---
title: this 
date: 2019-04-27
lang: zh-CN
tags:
   - JavaScript
categorise:
   - Blog
---

## what
什么是this？this是一个指针，指向调用函数的对象。为了搞清this指向问题，我们先要知道this绑定的规则
- 默认绑定

- 隐式绑定

- 显式绑定

- new绑定
- 
<!-- more -->


## 默认绑定

默认绑定，是指不符合其他绑定规则时的this指向，一般在独立调用函数时出现。

```js

function syaHelo() {

 console.log('helo',this.name);

}

var name = 'js';

syaHelo();

// helo js

```

在调用该函数时，就是应用了this的默认绑定，这时的this指向全局对象(浏览器环境下window)，但是在严格模式下，this指向undefined。

## 隐式绑定

表现形式一般为 xxx.function()

```js

function sayHelo() {

 console.log('helo',this.name)

}

var language = {

 name:'js',

 say:sayHelo,

}

var name = 'py';

language.sayHelo();

// helo js  

```

这里应用的就是隐式绑定，函数的调用是在一个对象上触发的(简单的说就是看调用的括号)，即调用的对象的上下文为此时的this，虽然函数是在外部定义声明的，但对象内部引用的函数，且在对象中调用了。若存在层层对象嵌套，this指向只跟最后一层有关。

::: info

**隐式绑定注意事项**

隐式绑定存在绑定丢失

如上述代码，若`var say = language.sayHelo; say()` 则打印出的是`helo py` 这就是绑定丢失。

但是按定义来说，函数的调用是在window下，我们调用的是函数`say`，与language这个对象已经没有关系了，所以this指向全局对象。

还有一种情况也会造成隐式绑定的丢失，丢失发生在事件回调中。

:::

## 显式绑定

通过`call、apply、bind`的方式，显式的指定this的指向。

## new绑定

使用new来调用函数会执行以下操作

- 创建一个新对象

- 将构造函数的作用域赋值给新对象，即this指向这个新对象

- 执行构造函数中的代码

- 返回新对象

```js

function sayHi(name){

   this.name = name;

 

}

var Hi = new sayHi('js');

console.log('Helo', Hi.name);

//Helo js

```

## 优先级

==*new绑定 > 显式绑定 > 隐式绑定 > 默认绑定*==

## 特例

如果我们将null或者是undefined作为this的绑定对象传入call、apply或者是bind,这些值在调用时会被忽略，实际应用的是默认绑定规则。

## 箭头函数

> TODO