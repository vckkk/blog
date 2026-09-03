---
title: RAG 系统架构与业务流程
display: home
date: 2026-09-01
---

本文档基于当前仓库中的 `eagent`、`eagent-web` 和 `eagent-admin` 实现整理。三张图分别回答：

1. 系统由哪些应用、服务和存储组成；
2. 一次文档入库和一次 RAG 问答分别如何流转；
3. 用户从登录、选择会话到获得答案的完整使用链路是什么。

## 1. 系统架构图

```mermaid
flowchart LR
    subgraph Client["客户端"]
        Web["eagent-web<br/>React + Vite<br/>用户聊天端"]
        Admin["eagent-admin<br/>Vue + Vite<br/>运营管理端"]
    end

    subgraph API["eagent API<br/>Midway + Koa :7001"]
        Middleware["中间件<br/>JWT 认证 / 团队上下文 / 请求 ID<br/>统一结果与错误处理"]
        Controllers["HTTP Controllers<br/>聊天 / 会话 / 知识库 / 文档 / 团队 / 意图 / 任务 / 监控"]
        Agent["AgentService<br/>会话、消息、Agent Run 生命周期"]
        Graph["RAGGraph<br/>LangGraph StateGraph"]
        Ingest["DocumentService<br/>上传、解析、切分、向量化、入库"]
        Retrieve["RetrieveService<br/>多路召回、关键词召回、融合、rerank"]
        Auth["PermissionService + IntentService<br/>权限边界与意图路由"]
        LLM["LLMService + Provider Adapters<br/>OpenAI / DeepSeek / Qwen / Doubao / Ollama"]
        Obs["Langfuse + LLM callback<br/>trace / span / token / latency"]
        SSE["SSE Runner<br/>流式 token、澄清、错误、结束事件"]
    end

    subgraph Data["数据与基础设施"]
        MySQL[("MySQL<br/>用户、团队、知识库、文档、Chunk<br/>会话、消息、任务、Agent Run、指标")]
        Redis[("Redis<br/>认证用户与团队缓存")]
        OSS[("阿里云 OSS<br/>原始上传文件")]
        Milvus[("Milvus<br/>Chunk 的 question / summary / content 向量")]
        Etcd[("etcd<br/>Milvus 元数据")]
        MinIO[("MinIO<br/>Milvus 对象存储")]
        Rerank["DashScope / Rerank Endpoint<br/>可选 Cross-Encoder 精排"]
        MCP["MCP 工具扩展位<br/>天气适配器当前返回空列表"]
    end

    Web -->|"Bearer JWT<br/>/api/chat SSE<br/>会话 API"| Middleware
    Admin -->|"Bearer JWT<br/>管理 API + X-Team-Id"| Middleware
    Middleware --> Controllers
    Middleware <--> Redis
    Middleware --> MySQL

    Controllers --> Agent
    Controllers --> Ingest
    Controllers --> Auth
    Controllers --> SSE

    Agent --> Graph
    Graph --> Auth
    Graph --> Retrieve
    Graph --> LLM
    Graph --> Obs
    Graph --> MySQL
    Agent --> MySQL
    Agent --> SSE
    SSE -->|"text-delta / tool / clarification / end"| Web

    Ingest -->|"put 原文件"| OSS
    Ingest -->|"文档元数据、任务、Chunk"| MySQL
    Ingest --> LLM
    Ingest -->|"Embedding"| LLM
    Ingest --> Milvus
    Ingest --> Auth

    Retrieve --> Auth
    Retrieve -->|"query embedding"| LLM
    Retrieve --> Milvus
    Retrieve --> MySQL
    Retrieve -.->|"可选精排"| Rerank
    Milvus --> Etcd
    Milvus --> MinIO

    LLM -.->|"模型调用"| MCP
    LLM --> Obs
```

### 架构要点

- `eagent-web` 是普通用户入口，当前路由集中在 `/login`、`/register`、`/chat` 和 `/chat/:conversationId`。
- `eagent-admin` 是管理入口，覆盖概览、知识库、文档与 Chunk、会话、意图、团队、监控和质量中心。
- 所有受保护请求先经过 JWT 校验，并解析用户团队、当前团队和可用知识库范围；Redis 仅作为认证上下文缓存，故障时回源 MySQL。
- MySQL 是业务事实存储；OSS 保存原始文件；Milvus 保存向量检索索引。Milvus 的 standalone 部署依赖 etcd 和 MinIO。
- 向量检索和答案生成均通过 `LLMService` 的 provider adapter 选择模型；可选 rerank 服务只改变候选排序，不改变业务权限范围。
- 观测链路使用 Langfuse trace/span，并将 LLM token、耗时、模型、请求 ID 等记录到观测数据表。

## 2. RAG 主要流程图

```mermaid
flowchart TD
    subgraph Offline["离线知识库构建"]
        Admin(["管理员在 eagent-admin 上传文档"]) --> Upload["POST /api/document/upload"]
        Upload --> WriteOSS["FileService<br/>校验类型/大小后写入 OSS"]
        Upload --> WriteDoc["DocumentService<br/>MySQL 写入 document(status=uploaded)"]
        WriteOSS --> SplitTask["POST /api/document/split<br/>创建异步 Task"]
        WriteDoc --> SplitTask
        SplitTask --> Parse["从 OSS 下载并解析 PDF / DOCX / TXT"]
        Parse --> ChunkSplit["RecursiveCharacterTextSplitter<br/>chunkSize=800 / overlap=128"]
        ChunkSplit --> Enhance["ChunkService + LLM<br/>生成 keywords / summary / question"]
        Enhance --> IndexEmbed["EmbeddingService<br/>为 content / summary / question 生成向量"]
        IndexEmbed --> PersistChunks["MySQL 保存 Chunk 与三类向量"]
        IndexEmbed --> MilvusIndex["Milvus 写入三类向量实体<br/>关联 knowledgeBaseId / documentId"]
        PersistChunks --> Ready(["文档可检索"])
        MilvusIndex --> Ready
    end

    Start(["用户提交问题"]) --> Context["解析会话上下文<br/>新问题 / follow-up / repair<br/>带入最近历史与来源文档"]
    Context --> Auth["JWT 认证与团队上下文<br/>读取用户可读知识库"]
    Auth --> Run["创建 Agent Run<br/>保存初始 state，生成 runId"]
    Run --> Intent["IntentJudgeNode<br/>闲聊/直接回答/RAG/复杂问题<br/>改写 query"]

    Intent -->|"chitchat 或 direct<br/>needRetrieve=false"| Direct["DirectAnswerNode<br/>仅基于对话历史与当前问题"]
    Intent -->|"rag"| Query["使用 rewrittenQuery"]
    Intent -->|"complex"| Split["QuestionSplitNode<br/>拆分为 2-5 个独立子问题"]
    Intent -->|"意图绑定存在但用户无读权限"| Block["routingBlocked=true<br/>跳过检索"]

    Split -->|"缺少对象/时间/范围等决定性信息"| Clarify["LangGraph interrupt<br/>产生 clarification_required"]
    Clarify --> Persist["保存 agent_run state 快照<br/>status=waiting_user<br/>checkpointVersion + pendingInteraction"]
    Persist --> SSEClarify["SSE 返回澄清问题与选项"]
    SSEClarify --> UserAnswer(["用户选择或输入补充信息"])
    UserAnswer --> Resume["POST /api/chat/:runId/resume<br/>原子 claim 版本化 checkpoint"]
    Resume --> SplitAgain["以 clarificationAnswer 重跑问题拆分"]
    SplitAgain -->|"ready"| Query
    SplitAgain -->|"仍无法拆分或达到上限"| Query

    Query --> RetrieveLoop["RAGLoopNode<br/>逐个 query 召回"]
    RetrieveLoop --> Scope["确定最终检索范围<br/>requested KB ∩ readable KB<br/>repair 时可限制 activeDocumentIds"]
    Scope --> Embed["EmbeddingService<br/>将 query 向量化"]
    Scope --> Keywords["规则提取关键词<br/>停用词 + 2/3-gram"]
    Embed --> VectorSearch["Milvus 三路向量召回<br/>question top10<br/>summary top10<br/>content top10"]
    Keywords --> KeywordSearch["MySQL Chunk keywords<br/>LIKE top10"]
    VectorSearch --> Merge["按 chunkId 合并去重<br/>保留各路得分"]
    KeywordSearch --> Merge
    Merge --> Weighted["加权融合基线<br/>question 0.4<br/>summary 0.3<br/>content 0.2<br/>keyword 0.1"]
    Weighted --> Rerank{"配置 rerank 且调用成功?"}
    Rerank -->|"是"| Cross["Cross-Encoder rerank<br/>覆盖 finalScore 并排序"]
    Rerank -->|"否 / 失败"| TopK["使用加权融合排序"]
    Cross --> TopK
    TopK --> Sources["构建 sources<br/>补齐文档名、知识库名、页码、章节、snippet"]
    Sources --> Synthesis["AnswerSynthesisNode<br/>参考资料 + 当前问题 + 历史<br/>约束引用事实、区分来源、无依据则拒答"]
    Block --> Synthesis

    Direct --> Stream["LLMService 流式生成"]
    Synthesis --> Stream
    Stream --> SSE["SSE 输出<br/>text-delta / tool-call / tool-result"]
    SSE --> PersistAnswer["保存 assistant message<br/>parts + sources + 完整性"]
    PersistAnswer --> Title["首轮异步生成会话标题"]
    Title --> End(["end 事件<br/>status / intentType / chunksCount / sources"])
```

### RAG 流程中的关键实现

- 普通问题直接进入一次检索；复杂问题先由 LLM 拆分，再对每个子问题执行检索，最后按 `finalScore` 去重并取全局 Top 8。
- 当前检索是“多路召回 + 精排”：Milvus 的 question、summary、content 三路各取 Top 10，MySQL 关键词召回补充候选，默认最终每个子问题取 Top 4。
- rerank 未配置、缺少 API Key、HTTP 失败或响应无 `results` 时，自动回退到加权融合排序。
- repair 请求会从历史中找到最近一个有效用户问题，强制重新检索，并优先限制到上次回答引用过的文档。
- 澄清恢复的业务快照由 `agent_run` 管理；代码已注册 LangGraph checkpointer，但当前流式执行与恢复仍以 `Agent Run + state snapshot` 为主。
- 流式答案结束后，后端把答案、结构化 `parts`、来源和 `is_complete` 写回消息表；客户端刷新时会重新加载会话详情和 pending run。

## 3. 用户使用链路图

```mermaid
sequenceDiagram
    autonumber
    actor U as 用户
    participant W as eagent-web
    participant API as eagent API
    participant DB as MySQL
    participant R as Redis
    participant KB as 知识库/向量链路
    participant LLM as LLM Provider

    U->>W: 打开应用
    W->>W: 无 token 则跳转 /login
    U->>W: 输入账号密码
    W->>API: POST /api/user/login
    API->>DB: 校验用户与团队关系
    API->>R: 缓存用户/团队认证上下文
    API-->>W: JWT + 用户信息
    W->>W: 进入 /chat

    U->>W: 新建或选择会话
    W->>API: 获取会话列表
    API->>DB: 查询当前用户会话
    DB-->>API: conversations
    API-->>W: 会话列表
    W->>API: 获取会话详情
    API->>DB: 查询历史 messages
    DB-->>API: 历史消息与 sources
    API-->>W: 渲染历史与标题
    W->>API: GET pending run
    API->>DB: 查询 waiting_user Agent Run
    API-->>W: 可选恢复澄清状态

    U->>W: 输入问题，点击发送
    W->>API: POST /api/chat<br/>Bearer JWT + clientMessageId
    API->>R: 读取/刷新认证上下文
    API->>DB: 幂等保存 user message
    API->>DB: 保存 Agent Run 初始 state
    API-->>W: 建立 SSE 连接

    API->>LLM: 意图判断与 query 改写
    API->>DB: 读取意图树、团队绑定和权限
    DB-->>API: readable KB + intent route

    alt chitchat / direct
        API->>LLM: 直接回答
    else RAG / complex
        opt complex 且缺少关键信息
            API-->>W: clarification_required
            W-->>U: 显示澄清问题与选项
            U->>W: 选择或输入补充信息
            W->>API: POST /api/chat/:runId/resume<br/>checkpointVersion
            API->>DB: 原子 claim + 更新 Agent Run
        end
        API->>LLM: query embedding
        API->>KB: Milvus 三路向量召回
        API->>DB: MySQL 关键词召回与 Chunk 补全
        KB-->>API: 候选 chunks
        DB-->>API: keyword hits
        API->>API: 合并、去重、加权融合、可选 rerank
        API->>LLM: 参考资料 + 历史 + 当前问题
    end

    loop 流式生成
        LLM-->>API: text-delta / tool events
        API-->>W: SSE data event
        W-->>U: 增量渲染答案
    end

    API->>DB: 保存 assistant message、parts、sources
    API->>DB: 记录 API / 对话 / LLM 指标
    opt 首轮对话
        API->>LLM: 异步生成会话标题
        LLM-->>API: title
        API->>DB: 更新 conversation title
        API-->>W: conversation_title
    end
    API-->>W: end(status, intentType, chunksCount, sources)
    W->>API: 重新拉取会话详情
    API->>DB: 查询最新消息
    DB-->>API: 完整会话
    API-->>W: 同步本地状态
    W-->>U: 显示最终答案和来源
```

### 用户端可见的分支

- **正常问答**：发送后实时显示 token，结束后展示来源和会话标题。
- **无检索问答**：问候、感谢、简单确认或可由历史直接回答的问题绕过知识库。
- **复杂问题**：系统可能先请求澄清；用户补充后沿同一个 `runId` 恢复。
- **停止生成**：前端调用 `AbortController`，后端将未完成 assistant message 标记为 `is_complete=false`，并提供重试入口。
- **重新回答**：前端复用最后一条用户消息；repair 语义会强制重新检索，并保留上下文。
- **刷新恢复**：进入会话时同时加载历史消息和待处理 Agent Run，等待澄清的会话可恢复交互。

## 4. 代码映射

| 能力 | 主要代码 |
| --- | --- |
| Agent 图与路由 | `eagent/src/agent/graph.ts` |
| Agent 状态 | `eagent/src/agent/state.ts` |
| 意图判断与权限路由 | `eagent/src/agent/nodes/intentJudge.node.ts` |
| 复杂问题拆分与澄清 | `eagent/src/agent/nodes/questionSplit.node.ts` |
| RAG 循环与来源构建 | `eagent/src/agent/nodes/ragLoop.node.ts` |
| 召回、融合与 rerank | `eagent/src/service/retrieve.service.ts` |
| 文档解析、分块、Embedding 入库 | `eagent/src/service/document.service.ts`、`eagent/src/service/chunk.service.ts` |
| OSS 文件上传 | `eagent/src/service/file.service.ts` |
| Milvus 向量集合 | `eagent/src/service/milvus.service.ts` |
| 聊天 SSE 与 resume API | `eagent/src/controller/chat.controller.ts` |
| 会话与消息编排 | `eagent/src/agent/agent.service.ts` |
| 用户聊天交互 | `eagent-web/src/pages/Chat/components/MessageInput.tsx` |
| 用户端路由 | `eagent-web/src/router/index.tsx` |
| 管理端路由 | `eagent-admin/src/router/index.ts` |
