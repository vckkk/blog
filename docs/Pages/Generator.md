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
在调用函数`sayHi`时，并没有像一般函数那样直接执行，而是在遇见`next()`方法后，输出第一个“状态”--`hi`，再次调用`next`会以此打印`Genertaor`内部定义的“状态”。直至全部遍历后返回`{value: undefined， done: true}`并且在此之后的`next`方法都是返回这个。若函数没有`return`的话，也是返回`undefined`。

`yield`意为发放或产出。在`Genertaor`内部，`yield`就是一个标识，一个暂停的标识。
注意！是遇到`yield`后，暂停后面的一系列操作，并将后面紧跟的表达式的值作为返回对象的值。
`next`是`Genertaor`给我们的方法，也是我们唯一能和其内部进行数据交换的入口。`yield`是没用返回值，或者说返回值全是`undefined`。我们的`next`方法就能携带一个参数，`Genertaor`会这个参数当做上一个`yield`的返回值。
举个来自阮老师《ES6入门》的例子

```js
function* foo(x) {
let y = 2 * (yield (x + 1));
let z = yield (y / 3);
return (x + y + z);
}
```
按照上述`yield`和`next`的作用，我们来调用这个函数。
```JS
let a = foo(5);
a.next(); // Object{value:6, done:false}  第一次next只执行了yield后面的 x+1
a.next(); // Object{value:NaN, done:false} yield没有返回值，y为undefined
a.next(); // Object{value:NaN, done:true} 同上，z为undefined

let b = foo(5);
a.next(); //  Object{value:6, done:false} x+1
a.next(12); //  Object{vale:8, done: false} 这里我们通过next方法向内部注入参数12，Genertaor会将12当做上一个yield的返回值，即x+1的值，所以现在 y=2*12；y/3为8；
a.next(13); //  Object{value: 42, done: treu} 同上参数13当做上一个yield的返回值，即z=13，那么此时x=5,y=24,z=13,则返回value=42 
```
`Genertaor`还有`return`和`throw`方法，这两个方法都类似`next`方法，`return`方法的参数会被当做上一次`yield`的返回值（这个效果同`next(params)`），并且结束整个`Genertaor`，无论后面是否还有`yield`。而`throw`是`Genertaor`的容错方法。我们能在外部抛出一个`error`，并在内部捕获。前提是`Genertaor`内部必须有`try...catch`语句，且在`genertaor.throw(error)`前，执行过一次`next`，即`Iterator`的指针开始工作，而且`throw`方法在执行时会默认的执行一次`next`。

## Genertaor与异步
在一开始就说`Genertaor`是解决异步的一种方案，那么具体是怎么进行的呢？
首先我们再来认识一下什么是异步编程。
字面意思，‘异’：不同。完成一个操作需要不同的步骤或流程模块。也就是说不是连续的（同步）。我们需要在完成前序任务后，等待一段时间，再紧接进行后续任务，而且在等待的时间内还能进行其他任务的操作。比如有一个任务是读取文件进行处理，任务的第一段是向操作系统发出请求，要求读取文件。然后，程序执行其他任务，等到操作系统返回文件，再接着执行任务的第二段（处理文件）。这种不连续的执行，就叫做异步。

那么这个异步的过程和`Genertaor`有什么连续呢？对比不同函数，`Genertaor`内部有了暂停的概念，即可在函数执行过程中，暂停该函数且能够在暂停的地方继续执行，还能记住之前的状态。这不就和异步的概念完美契合。

下面就看看`Genertaor`怎么对一个异步函数进行封装。
```JS
const fetch = require('node-fetch');

function* gen(){
  const  url = 'https://api.github.com/users/github';
  const result = yield fetch(url);
  console.log(result.bio);
}

const g = gen();
const result = g.next();

result.value.then(function(data){
  return data.json();
}).then(function(data){
  g.next(data);
})
```
