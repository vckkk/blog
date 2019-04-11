(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{170:function(t,e,a){"use strict";a.r(e);var r=a(0),s=Object(r.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("在学习JavaScript的运行机制之前，我们首先要了解以下几点知识：")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("浏览器的内核是多线程的，它们在内核控制下相互配合以保持同步，一个浏览器通常由以下常驻线程组成：GUI 渲染线程，javascript 引擎线程，浏览器事件触发线程，定时触发器线程，异步 http 请求线程。")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),a("p",[t._v("JavaScript是单行线的，在同一时间只能做一件事（任务）。在JavaScript中任务被分为两种：宏任务（MacroTask、Task）、微任务（MicroTask）")]),t._v(" "),t._m(7),t._v(" "),a("p",[t._v("JavaScript只有一个主线程（main thread）和调用栈（call-stack），所有需要处理的任务都会在调用栈内等待主线程去执行。JavaScript任务又分为同步任务和异步任务，同步任务会在调用栈中按照后进先出的顺序等待主线程的执行，而异步任务会在异步任务有结果后将异步任务的回调函数注册在任务队列中，等待调用栈为空栈时，进栈执行。\n当调用栈中的同步任务完全执行完毕（调用栈为空栈）时，首先检查微任务队列是否为空，若不为空，则微任务队列按先进先出进入调用栈开始被主线程执行，直至微任务队列为空，检查宏任务队列，若不为空，怎宏任务按先进先出进去调用栈，当每一个宏任务执行结束后，都检查微任务队列，若不为空，则微任务进入调用栈执行，若为空，继续执行宏任务队列中的任务，直至宏任务队列、微任务队列均为空。")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),a("p",[t._v("日常使用率最高的异步任务编程方法，也是最基本的方法，简单的说就是函数嵌套。\n如我们平常使用的封装好的网络请求")]),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("ES6引入的一个新对象，基本内容见阮老师的《ES6入门》")]),t._v(" "),t._m(14),t._v(" "),a("p",[t._v("ES6中一个异步任务的解决方案。")]),t._v(" "),t._m(15),t._v(" "),a("p",[t._v("ES7中异步任务的解决方案，是基于Promise，封装的Generator。")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),a("p",[t._v("async函数对 Generator 函数的改进，体现在以下几点")]),t._v(" "),t._m(21),t._v(" "),a("p",[a("strong",[t._v("参考文章:")]),a("br"),a("br"),t._v(" "),a("a",{attrs:{href:"https://juejin.im/post/5c653e07f265da2dba020c02",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入浅出JavaScript运行机制"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5b66706d51882508603d123a",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS的Event Loop和microTask"),a("OutboundLink")],1)]),t._v(" "),t._m(22),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/599ff3d5f265da24843e6276",target:"_blank",rel:"noopener noreferrer"}},[t._v("我了解到的JavaScript异步编程"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5c30375851882525ec200027",target:"_blank",rel:"noopener noreferrer"}},[t._v("JS异步编程六种方案"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.im/post/5c6515e0518825266c3ef852",target:"_blank",rel:"noopener noreferrer"}},[t._v("JavaScript异步编程的6种方法"),a("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"javascript的运行机制以及event-loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#javascript的运行机制以及event-loop","aria-hidden":"true"}},[this._v("#")]),this._v(" JavaScript的运行机制以及Event Loop")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"浏览器线程以及相关数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器线程以及相关数据结构","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器线程以及相关数据结构")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"浏览器内核的多线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器内核的多线程","aria-hidden":"true"}},[this._v("#")]),this._v(" 浏览器内核的多线程")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("p",[t._v("GUI 渲染线程：负责渲染浏览器界面 HTML 元素,当界面需要重绘(Repaint)或由于某种操作引发回流(reflow)时,该线程就会执行。在 Javascript 引擎运行脚本期间, GUI 渲染线程都是处于挂起状态的,也就是说被”冻结”。即 GUI 渲染线程与 JS 引擎是互斥的，当JS引擎执行时GUI线程会被挂起，GUI 更新会被保存在一个队列中等到 JS 引擎空闲时立即被执行。")])]),t._v(" "),a("li",[a("p",[t._v("javascript 引擎线程：也可以称为 JS 内核，主要负责处理 Javascript 脚本程序，例如 V8 引擎。Javascript 引擎线程理所当然是负责解析 Javascript 脚本，运行代码。浏览器无论什么时候都只有一个 JS 线程在运行 JS 程序。")])]),t._v(" "),a("li",[a("p",[t._v("浏览器事件触发线程：当一个事件被触发时该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理。这些事件可以是当前执行的代码块如定时任务、也可来自浏览器内核的其他线程如鼠标点击、AJAX 异步请求等，但由于JS的单线程关系所有这些事件都得排队等待 JS 引擎处理。")])]),t._v(" "),a("li",[a("p",[t._v("定时触发器线程：浏览器定时计数器并不是由 JavaScript 引擎计数的, 因为 javaScript 引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确, 因此通过单独线程来计时并触发定时是更为合理的方案。")])]),t._v(" "),a("li",[a("p",[t._v("异步 http 请求线程：在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求， 将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件放到 JavaScript 引擎的处理队列中等待处理")]),t._v(" "),a("p",[t._v("例子1:异步请求是由线程 JavaScript 执行线程、HTTP 请求线程 和 事件触发线程 共同完成的。JavaScript 执行线程 执行异步请求代码，这时浏览器会开一条新的 HTTP 请求线程 来执行请求，JavaScript 执行线程则继续执行 执行队列 中剩下的其他任务。然后在未来的某一时刻 事件触发线程 监视到之前的发起的 HTTP 请求已完成，它就会把完成事件的回调代码插入到 JavaScript 执行队列尾部 等待 JavaScript 执行线程空闲时来处理。")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"堆，栈，队列"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#堆，栈，队列","aria-hidden":"true"}},[this._v("#")]),this._v(" 堆，栈，队列")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("堆（Heap）\n堆是一种特殊的线性数据结构，其特性为必须是完全二叉树；用数组实现；任意节点的值总是不大于或不小于其父节点的值。（可了解一下二叉树、满二叉树的概念）")]),this._v(" "),e("li",[this._v("栈（Stack）\n栈是一种数据结构，只能在某一端插入和删除的特殊线性表，栈在计算机科学中是限定仅在表尾进行插入或删除操作的线性表。 它按照后进先出的原则存储数据，先进入的数据被压入栈底，最后的数据在栈顶，需要读数据的时候从栈顶开始弹出数据。")]),this._v(" "),e("li",[this._v("队列（Queue）\n队列也是一种数据结构，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作，和栈一样，队列是一种操作受限制的线性表。即先进先出。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"event-loop"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#event-loop","aria-hidden":"true"}},[this._v("#")]),this._v(" Event Loop")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("p",[this._v("宏任务："),e("code",[this._v("script代码、setTimeout、setInterval、setImmediate、I/O、UI Rendering")])])]),this._v(" "),e("li",[e("p",[this._v("微任务："),e("code",[this._v("Process.nextTick（NodeJS）、Promise、Object.observe、MutationObserver（HTML5 新增)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"异步编程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#异步编程","aria-hidden":"true"}},[this._v("#")]),this._v(" 异步编程")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"回调函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#回调函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 回调函数")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n​\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"事件监听"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#事件监听","aria-hidden":"true"}},[this._v("#")]),this._v(" 事件监听")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"发布订阅"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布订阅","aria-hidden":"true"}},[this._v("#")]),this._v(" 发布订阅")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"promise"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#promise","aria-hidden":"true"}},[this._v("#")]),this._v(" Promise")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"generator-生成器函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#generator-生成器函数","aria-hidden":"true"}},[this._v("#")]),this._v(" Generator 生成器函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"async-await"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#async-await","aria-hidden":"true"}},[this._v("#")]),this._v(" async/await")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"其他"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他","aria-hidden":"true"}},[this._v("#")]),this._v(" 其他")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("(1) async/await函数相对于Promise，优势体现在：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("处理 then 的调用链，能够更清晰准确的写出代码并且也能优雅地解决回调地狱问题。\n当然async/await函数也存在一些缺点，因为 await 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低，代码没有依赖性的话，完全可以使用 Promise.all 的方式。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("(2) async/await函数对 Generator 函数的改进，体现在以下三点：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("内置执行器。 Generator 函数的执行必须靠执行器，所以才有了 co 函数库，而 async 函数自带执行器。也就是说，async 函数的执行，与普通函数一模一样，只要一行。\n更广的适用性。 co 函数库约定，yield 命令后面只能是 Thunk 函数或 Promise 对象，而 async 函数的 await 命令后面，可以跟 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。\n更好的语义。 async 和 await，比起星号和 yield，语义更清楚了。async 表示函数里有异步操作，await 表示紧跟在后面的表达式需要等待结果。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("1）内置执行器。Generator函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。")]),this._v(" "),e("li",[this._v("2）更好的语义。async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。")]),this._v(" "),e("li",[this._v("3）更广的适用性。 co模块约定，yield命令后面只能是Thunk函数或Promise对象，而async函数的await命令后面，可以是Promise对象和原始类型的值（数值、字符串和布尔值，但这时等同于同步操作）。")]),this._v(" "),e("li",[this._v("4）返回值是Promise。async函数的返回值是Promise对象，这比Generator函数的返回值是Iterator对象方便多了。你可以用then方法指定下一步的操作。\n进一步说，async函数完全可以看作多个异步操作，包装成的一个Promise对象，而await命令就是内部then命令的语法糖。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("a",{attrs:{href:""}},[this._v("【 js 基础 】 setTimeout(fn, 0) 的作用")])])}],!1,null,null,null);e.default=s.exports}}]);