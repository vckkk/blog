---
title: JavaScript中的异步编程
date: 2019-11-07
lang: zh-CN
display: home
tags:
  - JavaScript
categorise:
  - Blog
---

JavaScript中的异步编程 ---- Promise

<!-- more -->

  了解JavaScript的异步编程之前需要先学习[JavaScript的有关运行机制](https://blog.webhbz.com/Pages/eventloop.html)
为了在整体上有个充分的认识，可以先阅读一下知乎上的这篇[文章](https://zhuanlan.zhihu.com/p/66593213)，相对简单便于理解。

## 什么是Promise

  Promise最早由社区提出，是用来解决回调地狱的方案，ES6 将其写进了语言标准，统一了用法，原生提供了`Promise`对象。
> 所谓的`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。   ---- 《ECMAScript 6 入门》

Promise对象在创建后，就会创建内部状态机，Promise对象代表了一个异步操作，而状态机就包含了这个异步操作的状态，`pendding`，`fulfilled`，`rejected`，
在`Promise`对象中，只会存在上述三种状态中的一种，且为不可逆的，不受外界影响。

## 创建Promise
在ES6中有原生的Promise构造函数，使用关键字`new` 来创建一个`Promise`对象。
```
const promise = new Promise ((resolve,reject) => { // 构造函数接受一个函数为参数，将这个参数暂名为'fn' ，'fn'又接受两个参数，且均为函数
  const flag = Math.random() > .5 ? true : false ;
  if(flag) {
    console.log('使用resolve将promise状态从pending变为resolved');
    resolve('大于0.5')
  } else {
    console.log('使用reject将promise状态从pending变为rejected')
    reject('小于0.5')
  }
})


promise.then((resolve) => {
  console.log(resolve)  // -- '大于0.5'
},(reject) => {
  console.log(reject)  // -- '小于0.5'
})

```
我们来一点点拆分这个`Promise`，她接收了一个函数，而这个函数又有两个参数`resolve`，`reject`，这两个参数都是Promise为我们创建好的`函数`。这两个函数的作用就是将`Promise`的状态从`pending`（等待）转换为`resolved`（已解决）或者从`pending`（等待）转换为`rejected`（已失败）。
而在Promise创建后，有一些自身的方法。这里先只说`then`，该方法接受两个`函数`作为参数，这里就和上面传入Promise的构造函数中的参数函数（`fn`）的两个参数（`resolve`,`reject`）对应上了。很显然，`then`方法的第一个参数函数，接收到`resolve`传递出的数据，而第二个参数就接收到了`reject`传递出的数据。
那么`Promise`是怎么解决异步操作的回调地狱呢？简单的说就是用`Promsie`对象包裹一个异步操作，异步操作只在`Promise`对象内部，不受外部影响同时也不阻塞外部，在这个异步操作有了结果后，通过`then`方法和外部进行数据传递。如下：
```
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random() > 0.5 ? resolve('success') : reject('fail');
    }, 1000)
});


promise.then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});

```
