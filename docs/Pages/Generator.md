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
