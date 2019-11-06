(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{264:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("strong",[t._v("函数是迄今为止发明出来的用于节省空间时间和提高性能的最重要手段")])]),t._v(" "),s("p",[t._v("那对函数的了解又有多少呢？\n::: info\n执行一个函数时都发生了什么？")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Helo'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("say")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v(":::")]),t._v(" "),s("h2",{attrs:{id:"函数的执行机制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数的执行机制","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数的执行机制")]),t._v(" "),s("h3",{attrs:{id:"创建函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建函数")]),t._v(" "),s("p",[t._v("我们定义的函数是怎么一步步生成的？")]),t._v(" "),s("blockquote",[s("p",[t._v("1、首先开辟一个新的堆内存")])]),t._v(" "),s("p",[t._v("我们定义的函数就存在计算机的堆内存中，那函数是以怎么的形态存储在内存中？")]),t._v(" "),s("blockquote",[s("p",[t._v("2、创建函数"),s("code",[t._v("say")]),t._v("，把函数体以字符串的形式存在之前开辟的堆内存中。")])]),t._v(" "),s("blockquote",[s("p",[t._v("3、在当前上下文中声明"),s("code",[t._v("say")]),t._v("函数（变量），")])]),t._v(" "),s("p",[t._v("当前上下文中，我们可以理解成当前上下堆栈（执行环境），"),s("code",[t._v("say")]),t._v("这个变量就存储在这个栈当中")]),t._v(" "),s("blockquote",[s("p",[t._v("4、栈中的"),s("code",[t._v("say")]),t._v("变量指向堆中的函数体，或是说把堆内存函数体的地址赋值给上下文中的"),s("code",[t._v("say")])])]),t._v(" "),s("h3",{attrs:{id:"执行函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行函数","aria-hidden":"true"}},[t._v("#")]),t._v(" 执行函数")]),t._v(" "),s("h4",{attrs:{id:"将存储的字符串函数体变成真正的js代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将存储的字符串函数体变成真正的js代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 将存储的字符串函数体变成真正的js代码")]),t._v(" "),s("p",[s("strong",[t._v("每一个函数的调用，都会在函数上下文堆栈中创建帧。")]),t._v("\n函数的执行是在栈上完成的。\n此时的执行流程大致如下：")]),t._v(" "),s("blockquote",[s("p",[t._v("1、形成一个代码执行环境，栈内存；")]),t._v(" "),s("p",[t._v("2、将堆内存中的函数体字符串复制到栈内存中，使其成为真正的js代码；")]),t._v(" "),s("p",[t._v("3、对形参进行赋值，在进行变量提升；")]),t._v(" "),s("p",[t._v("4、在堆内存中自上而下的执行；")]),t._v(" "),s("p",[t._v("5、将执行结果返回给调用者；")])]),t._v(" "),s("p",[t._v("这里可以结合JS的Event Loop去理解")]),t._v(" "),s("h4",{attrs:{id:"函数闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数闭包","aria-hidden":"true"}},[t._v("#")]),t._v(" 函数闭包")]),t._v(" "),s("p",[s("strong",[t._v("函数在执行的时候，都会形成一个全新的私有作用域，也叫私有栈内存。")]),t._v("\n这个私有作用域的目的有：")]),t._v(" "),s("blockquote",[s("p",[t._v("1、将堆内存中的字符串变为js代码")]),t._v(" "),s("p",[t._v("2、保护栈内存中的私有变量不受外界干扰")])]),t._v(" "),s("p",[t._v("函数执行时的这种保护机制就成为闭包。有关闭包的内容以后会完整的梳理一下。"),s("a",{attrs:{href:"/blank"}},[t._v("闭包")])]),t._v(" "),s("h4",{attrs:{id:"js引擎如何执行函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js引擎如何执行函数","aria-hidden":"true"}},[t._v("#")]),t._v(" js引擎如何执行函数")]),t._v(" "),s("p",[t._v("这篇文章可以多读几遍，加深认识和理解\n"),s("a",{attrs:{href:"http://www.cnblogs.com/onepixel/p/5090799.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考文章"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"this"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#this","aria-hidden":"true"}},[t._v("#")]),t._v(" this")]),t._v(" "),s("p",[t._v("有关this的内容会单独列出总结")])])},[],!1,null,null,null);a.default=e.exports}}]);