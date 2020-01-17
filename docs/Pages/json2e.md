---
title: Json2e
date: 2020-01-17
tag: 
  - JavaScript 
  - Node.js
display: home
---

利用XLSX搞一个JSON转Excel的小工具

<!-- more -->

## 缘由
  控制台的国际化一直由美杜莎国际化文案管理平台负责，代码中使用唯一的`key`来表示每条文案。发布上线前会将文案整合送给翻译小姐姐们，在项目目录中，文案`{key:中文}`使用`json`存储。
要是直接复制粘贴给小姐姐，估计小姐姐们顺着网线就过来打你了，成百条的文案一下显示在聊天框中谁看谁难受。不妨转为`Excel`后发给小姐姐，干净利落，便于保存且可追溯。说不定还能收一句辛苦小哥哥了、

这种JSON转Excel的在线工具挺多，复制粘贴一键转换并下载，不要太方便了。但是，由于数据安全问题，内网对上传下载做了部分限制。既然这样还不如自己本地撸一个然后`npm link`，
随便那个项目中都能使用。

话不多说，npm官网搜索相关词条，就`XLSX`吧，原因文档局详细~全是英文看不懂啊~。大概看一下关于写`Excel的`API就开始吧。用到了如下几个：
``` JS
xlsx.utils.book_new()
xlsx.utils.aoa_to_sheet()
xlsx.utils.book_append_sheet()
xlsx.writeFile()
```
对于各个方法的作用，一开始也不是很明了。这种已经是常态了，对新接触的内容要怎么快速上手呢，一是先看方法命名，先盲猜一波；二是复制在本地，不管三七二十几先跑一下，通过看结果来反推。

先对文件目录`npm init` 一下，下载相关依赖，`XLSX`,`commander`,`inquirer`等。

美杜莎平台支持`Excel`批量上传文案，文件格式为

|  AppName | Key | Simplified Chinese | English |
|  ----  | ----  | ---- | ---- |
| name  | y.page.OK | 确定 | OK |
| name | .... | .... | .... |

``` JS
const inquirer = require('inquirer')
const fs = require('fs');
const path = require('path')
const xlsx = require('xlsx');
const ora = require('ora')


const question = [
  {
    name: 'appName',
    message: "美杜莎应用名（如 yundun-console-aliyun-com-ddosdip）:"
  }
]

const spinner = ora('疯狂读取中...');

inquirer
  .prompt(question).then(answer => {
    const {appName} = answer;
    let ws_head = [
  ['AppName','Key','Simplified Chinese'],
];
  spinner.start();
  const workBook = xlsx.utils.book_new();
  const ws_name = 'SheetJS';
  const filePath = path.join(process.cwd(),'src','locales','message_zh.json');
  const jsonFile = JSON.parse(fs.readFileSync(filePath));
  let ws_data = [];
  Object.keys(jsonFile).map(key => {
    let tep = [appName,key,jsonFile[key]];
    ws_data.push(tep);
  });
  const ws = xlsx.utils.aoa_to_sheet([...ws_head,...ws_data]);
  xlsx.utils.book_append_sheet(workBook,ws,ws_name);
  xlsx.writeFile(workBook,'mds.xlsb');
  spinner.succeed('文案已经全部导出~~');
  })

```
代码非常简单基础功能很好的就实现了。

