---
title: ES6
lang: zh-CN
image: /cover2.jpg
display: home
description: JavaScript ES6基础学习总结
date: 2019-03-20
tags:
  - JavaScript
  - ES6
categories:
  - Blog
---

JavaScript ES6基础学习总结

<!-- more-->

## let/const命令
### let
let的作用类似var，是用来声明变量的，但是其所声明的变量只在let命令所在的代码块中有效。

let声明的变量不存在变量提升，所有变量的使用必须在声明之后。在let声明变量的代码块中存在暂时性死区（TDZ），在同一作用域内不能重复声明，let命令会形成块级作用域。

### const
用let类似，但是其声明的变量不可修改，并且声明之后必须马上初始化（即赋值）。同样也不存在变量提升，存在暂时性死区，以及只在其代码块中有效。其本质是地址不能改变。

## 箭头函数
## Iterator遍历器
iterator遍历器（迭代器）对ES6来说是很重要的一个概念，它是实现解构赋值、rest参数、扩展运算符、Generator生成器、for of循环的基础。ES6中新增的数据结构Set、Map也有使用到iterator迭代器。

对于可以迭代的数据结构，ES6为其在内部部署了一个Symbol.iterator的属性，它是一个函数，执行该函数后会生成一个iterator对象，我们把这个对象也叫做iterator接口，我们可以通过这个接口来访问数据内部。

遍历器（Iterator）就是这样一种机制。它是一种接口，为各种不同的数据结构提供统一的访问机制。任何数据结构只要部署 Iterator 接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。

Iterator 的作用有三个：一是为各种数据结构，提供一个统一的、简便的访问接口；二是使得数据结构的成员能够按某种次序排列；三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。

默认部署Iterator接口的数据结构有：
>1.Array

>2.Map

>3.Set

>4.String

>5.TypedArray

>6.函数的 arguments 对象

>7.NodeList 对象


一个例子（数组的iterator接口）
```js
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();
iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }

```


## 变量的解构赋值


### 数组的解构赋值
数组解构的原理其实是消耗数组的迭代器，把生成对象的value属性的值赋值给对应的变量

​
```js
let [a, b, c] = [1, 2, 3];

```
​
等号两边进行模式匹配，只要模式相同，右边的值就会对应的赋给左边，如果解构不成功，就赋'undefined'，如果等号右边不是具有interator接口的数据，则会报错。

解构赋值允许存在默认值

​
```js
let [foo = true] = [];
foo // true
let [x, y = 'b'] = ['a']; // x='a', y='b'
let [x, y = 'b'] = ['a', undefined]; // x='a', y='b'

```
​
当数组成员严格等于（===）undefined时，默认值才会生效。默认值可以引用解构赋值的其他变量，但该变量必须已经声明。

​
```js
let [x = 1, y = x] = [];     // x=1; y=1
let [x = 1, y = x] = [2];    // x=2; y=2
let [x = 1, y = x] = [1, 2]; // x=1; y=2
let [x = y, y = 1] = [];     // ReferenceError: y is not defined

```
​
### 对象的解构赋值
对象的解构赋值是根据对象的键名进行赋值的。如键名与值相同，则可省略属性名。同样也可以进行嵌套解构赋值，也存在默认值。

### 字符串的解构赋值
​
```js
const [a, b, c, d, e] = 'hello';
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"

```
​
类似数组也有length属性

### 函数参数的解构赋值
​
```js
function add([x, y]){
  return x + y;
}
add([1, 2]); // 3

```
​
   

函数参数的解构也可以使用默认值。

​
```js
function move({x = 0, y = 0} = {}) {
  return [x, y];
}
move({x: 3, y: 8}); // [3, 8]
move({x: 3}); // [3, 0]
move({}); // [0, 0]
move(); // [0, 0]

```
​
上面代码中，函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。

## rest参数与扩展运算符
剩余/扩展运算符同样也是ES6一个非常重要的语法，使用3个点（...），后面跟着一个含有iterator接口的数据结构

### 剩余运算符
ES6中剩余运算符代替的之前的arguments参数（箭头函数没有arguments参数），访问函数的arguments是一个非常昂贵的操作，建议在ES6环境下均使用剩余运算符来代替。



​
```js
// 我们来对比一下arguments和rest参数
function F (a,b,c){
  console.log(arguments[0],arguments[1],arguments[2])
}; 
F(1,2,3) // 1,2,3
​
// rest参数
function F(...rest){
  console.log(rest)
}
​
F(1,2,3) //  [1,2,3]

```
​


剩余运算符除了可以在函数的参数中使用外，还能结合解构赋值一同在数组中使用。但是剩余运算符(...)必须在数组的最后一位，因为剩余运算符的原理其实是利用了数组的迭代器，它会消耗3个点后面的数组的所有迭代器，读取所有迭代器生成对象的value属性，而我们的解构也是消耗迭代器，如果剩余运算符在前会将数组的所以迭代器消耗，导致无法进行解构赋值。



​
```js
let [first,...other] = [1,2,3,4]
first // 1
other // [2,3,4]

```
​


### 扩展运算符
扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。



​
```js
let arr1 = [1,2,3];
let arr2 = [...arr1,4,5]  // [1,2,3,4,5]
​
// 也能使用多个 类似数组的conect方法
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [..arr1,...arr2]  // [1,2,3,4,5,6]
​
```
​
​
    

在ES2018中，对象也是可以使用扩展运算符，之前我们说过数组的扩展运算符原理是消耗所有迭代器，但对象中并没有迭代器，我个人认为可能是实现原理不同，但是仍可以理解为将键值对从对象中拆开，它可以放到另外一个普通对象中，类似Object.assign( )。

## 对象的简写
### 对象属性的简写
在ES6中，当对象（Object）中的属性与值相同时，则可省略属性名。但是这个值必须是一个变量。如：



​
```js
let value = 0;
let object = {
  value: value;
}
​
let objectES6 = {
  value; //这里省略的是属性名value
}

```
​


 在实际中对象属性名的简写一般与解构赋值一起使用。

### 方法的简写
ES6中允许当对象中存在方法（函数）时，我们可以简写为：



​
```js
let objectES5 = {
  func： function(){
  }
}
​
let objectES6 = {
  func() {
  },
  func2:() => {
  }
}
```
​
## for...of...
  for...of循环是ES6新增的遍历方法，允许我们遍历一个存在iterator接口的数据，并返回所有项的值。

简单对比for...in循环：

for ... of遍历获取的是对象的键值( for...of并不能遍历对象 ),for ... in 获取的是对象的键名
如：

```js
let arr = [1,2,3,4,5]
for(let i in arr ) {
    console.log(i)            //0,1,2,3,4  输出的是下标，即键名
 }
        
let arr = [1,2,3,4,5]
 for(let i of arr ) {
  console.log(i)              //1,2,3,4,5  输出值 相当于键值
 }

```
​

for ... in会遍历对象的整个原型链,性能非常差不推荐使用,而for ... of只遍历当前对象不会遍历原型链
对于数组的遍历,for ... in会返回数组中所有可枚举的属性(包括原型链上可枚举的属性),for ... of只返回数组的下标对应的属性值
    



​
1
TODO： JavaScript的数据遍历
​
## 数据遍历

## 对象新方法
## ES6 Module




​
1
TODO： Common.js规范和ES6规范
​