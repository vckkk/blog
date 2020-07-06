---
title: JavaScript继承
display: home
---

了解JavaScript中的几种继承方法

<!-- more -->

## 
继承在js中占有非常重要的地位，那么在js中有很多中继承的方式，不过每一种继承方式都有优缺点。下面就列举几种继承的方式。
实现继承首先需要一个父类，在js中实际上是没有类的概念，在es6中class虽然很像类，但实际上只是es5上语法糖而已。

## 原型链继承

```js
function Parent () {
  this.name = 'parent';
  this.say = function() {
    console.log('hi',this.name)
  }
}
function Child() {
  this.name = 'child'
}
Child.prototype = new Parent(); // 继承，让子类的原型直接等于父类的一个实例，每个子的实例都会拥有父类的属性
const child1 = new Child();
child1.say();  // hi child 
```
### 优缺点
* 优点：简单易于实现，父类的新增的实例与属性子类都能访问
* 缺点：无法实现多继承
     创建子类实例时，不能向父类构造函数中传参数
     修改原型上的属性会影响所有实例，引用类型的属性被所有实例共享

## 借用构造函数继承
借用`call`方法
```js
function Parent () {
  this.name = 'parent';
  this.say = function() {
    console.log('hi',this.name)
  }
}

function Child() {
  Parent.call(this,'parent'); // 继承 
  this.name = 'child'
}

const child2 = new Child();
child2.say();
```
### 优缺点
* 优点：解决了子类构造函数向父类构造函数中传递参数
     避免了引用类型的属性被所有实例共享
     可以实现多继承（call或者apply多个父类）
* 缺点：只是子类的实例，不是父类的实例
     方法都在构造函数中定义，无法复用
     不能继承原型属性/方法(Parent.prototype上的内容无法继承)，只能继承父类的实例属性和方法

## 组合继承
组合原型链继承和借用构造函数继承
背后的思路是：使用原型链实现对原型方法的继承，而通过借用构造函数来实现对实例属性的继承。
```js
function Parent() {
  this.name = 'parent';
  this.say = function() {
    console.log('hi',this.name)
  }
}

Parent.prototype.getName = function(){
  console.log(this.name);
}

function Child(name,age) {
  Parent.call(this,'parent');  // 继承；继承Parent类的方法属性；
  this.name = name;
  this.age =age;
}

Child.prototype = new Parent();  // 继承； 继承父类原型上的方式属性；

const child3 = new Child('cc');
child3.say();
child3.getName();
```
### 优缺点
* 优点：融合原型链继承和构造函数的优点，是JavaScript中最常用的继承模式
* 缺点：调用了两次父类构造函数

## 原型式继承
借助另外一个构造函数。
```js
function Parent() {
  this.name = 'parent';
  this.say = function() {
    console.log('hi',this.name)
  }
}

function Create(f) {
  function F() {};
  F.prototype = f;
  return new F();
}

const parent = new Parent();
const child4 = Create(parent)
child4.say();
```
### 优缺点
* 优点：不限制调用方式、简单，易实现
* 缺点：不能多次继承

## 寄生式继承
可以理解为在原型式继承的基础上增加一些函数或属性

## 寄生组合式继承
所谓寄生组合继承，即通过借用构造函数来继承属性，通过原型链的混成形式来继承方法。
其背后的基本思路是：不必为了指定子类型的原型而调用超类型的构造函数，我们所需要的无非就是超类型的原型的一个副本而已。本质上，就是使用寄生式继承来继承超类型的原型，然后再将结果指定给予类型的原型。
```js
//父类
function Parent(name,age){
  this.name = name || 'cc'
  this.age = age || 27
  this.say = function(){
    console.log(this.name)
  }
}
//父类方法
Parent.prototype.eat = function(){
  return this.name + this.age + 'eat sleep'
}
//子类
function Child(name,age){
  //继承父类属性
  Parent.call(this,name,age)
}
//继承父类方法
(function(){
  // 创建空类
  let Super = function(){};
  Super.prototype = Parent.prototype;
  //父类的实例作为子类的原型
  Child.prototype = new Super();
})();
//修复构造函数指向问题
Child.prototype.constructor = Child;
const child5 = new Child();
child5.say();
child5.eat();
```