---
title: Generator函数
date: 2019-11-12
lang: zh-CN
tags:
  - JavaScript
categorise:
  -Blog
---

JavaScript异步编程 ---- Generator

<!-- more -->

## Generator语法
`Generator`是ES6提供的一种异步编程解决方案，本质上也是一个函数。简单的从写法上来，`Generator`函数在内部定义了一些相互独立且互不影响的状态。

```JS
function* sayHi() {
  yield 'hi';
  yield 'helo';
  return 'end';
}

let say = sayHi();
sayHi.next();
// { value: 'hi', done: false}
sayHi.next();
// { value: 'helo', done: false}
sayHi.next();
// { value: 'end', done: true}
sayHi.next();
// { value: undefined, done: true}
sayHi.next();
// { value: undefined, done: true}
```
