---
title: 【摘】《JavaScript 忍者秘籍》读书笔记
---

@(博文集)
[原地址](https://github.com/vckkk/JavaScript-Ninja-Reading-Notes/blob/master/JavaScript-Ninja-Reading-Notes.md)

[TOC]

## 第一部分 热身
### 第1章 无处不在的JavaScript
#### 一、JavaScript区别于其他语言的一些概念
* **函数是一等公民**——在JavaScript中，函数与其他对象共存，并且能够像任何其他对象一样使用。
* **函数闭包**——第3、4、5章会详细说明。
* **作用域**——JavaScript没有类似C语言的块级作用域变量，取而代之只能依赖函数级别的变量和全局变量。
* **基于原型的面向对象**

#### 二、可以帮助书写更优雅的JavaScript代码
* 生成器：一次请求生成多次值的函数
* Promise：便于控制异步代码
* [Proxy](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)：控制对特定对象的访问
* 高级[数组](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)方法：书写更优雅的数组处理函数
*  [Map](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map)：用于创建字典集合，保存键值对；[Set](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set)：存储任何类型的唯一值
*  正则表达式
*  modules：将代码划分为较小的可以自包含的片段，使项目便于管理。
### 第2章 运行时的页面构建过程
#### 一、web应用生命周期概览
1. Web应用的生命周期从用户在浏览器地址栏输入url，或单击一个链接开始。
2. 浏览器生成请求并发送至服务器，服务器执行某些动作或者获取某些资源，将响应发送回客户端；
3. 浏览器处理HTML，CSS和JavaScript并构建页面；
4. 监控事件队列，一次处理其中<font color=red>一个</font>事件；
5. 直至用户关闭或者离开页面。
#### 二、web页面构建阶段
	在Web页面能被展示或者交互前，必须根据服务器获取的响应来构建，页面构建阶段的目标是建立Web应用的UI。包括两个步骤：
	1. 解析HTMl代码并构建文档对象模型（DOM）
	2. 执行JavaScript代码
	步骤2会在HTML解析到脚本节点时执行，在页面构建阶段，这两个步骤可能会交替执行多次。

##### 1、 HTML解析和DOM构建
通过解析收到的HTML代码，构建一个个HTML元素，构建DOM。除了html根节点外，所有节点都只有一个父节点。为了正确构建DOM，浏览器会修复在HTML代码中发现的问题。每当解析到脚本元素时，浏览器就会停止从HTML构建DOM，开始执行JavaScript代码。
##### 2、执行JavaScript代码
JavaScript代码由浏览器提供的JavaScript引擎执行。如Firefox的Spidermonkey（蜘蛛猴？）引擎，Chrome和Opera的V8引擎，还有Edge的Chakra引擎。
* **2.1 JavaScript中的全局对象**
浏览器暴露给JavaScript引擎的主要全局对象是window对象，window对象最重要的属性是document，它代表了当前页面的DOM，通过这个对象，JavaScript能在***任何程度***上修改DOM。全局window对象会存在于整个页面的生存期之间。   
* **2.2 JavaScript代码的不同类型**
	* 函数代码：包含在函数中的代码，被其他代码调用。
	* 全局代码：位于函数之外的代码，由JavaScript引擎自动执行。
* **2.3 在页面构建阶段执行JavaScript代码**
浏览器在页面构建阶段遇到了脚本节点，会停止HTML到DOM的构建转而开始执行JavaScript代码。JavaScript代码可以任意修改DOM结构，但是不能选择和修改还没被创建的节点。

```
只要还有没处理完的HTML元素和没执行完的JavaScript代码，下面两个步骤都会一直交替执行。
1.将HTML构建为DOM
2.执行JavaScript代码
最后当浏览器处理完所有的HTML元素后，页面构建阶段就结束了。
```
#### 三、事件处理
##### 1、事件处理器概览
浏览器执行环境的核心思想基于：同一时刻只能执行一个代码片段，即所谓的单线程执行模型。所有已生成的事件（无论是用户生成的，例如鼠标移动或键盘按压，还是服务器生成的，如ajax请求）都会放在同一个事件队列中，以它们被浏览器检测到的顺序排列。
Web应用的JavaScript代码中，大部分处理的事件为：
- 浏览器事件：页面加载完成或者无法加载时
- 网络事件：接收到来自服务器的响应，如Ajax事件和服务器端事件
- 用户事件：鼠标单击、移动或键盘事件
- 计时器事件：timeout时间到期
##### 2、注册事件处理器
在客户端Web应用中，有两种方式注册事件。
- 通过把函数赋值给某个特殊属性：某个事件只能注册一个事件处理器，赋值的方式会将上一个事件处理器改写替换。如```window.loaded = function () {}```
- 通过使用内置addEventListener方法：可以注册尽可能多的事件。
##### 3、处理事件
事件处理的主要思想是：当事件发生时，浏览器调用相应的事件处理器。由于是单线程模型，同一时刻只能处理一个事件。在事件处理阶段，浏览器会循环检查事件队列，检查队首是否存在事件，如果存在则执行对应的事件处理。处理结束后，该事件从事件队列中移除，JavaScript引擎退出事件处理函数，事件循环再次检查队列。
## 第二部分理解函数
### 第3章 新手的第一堂函数课：定义与参数
	JavaScript中最关键的概念是：函数是第一类对象，或者被称为一等公民。函数和其他JavaScript数据类型一样，能被变量引用，能以字面量形式声明，甚至能被作为函数参数进行传递。
#### 一、函数式的不同
##### 1、函数是第一类对象
JavaScript中函数拥有对象的所有能力，因此函数可被作为任意其他类型对象来对待。函数能够实现以下功能，也是JavaScript中对象具有的功能。
- 通过字面量创建
``` 
function funName () {} 
```
- 赋值给变量，数组或其他对象的属性
```
var fun = function (){};
arrName.push( function (){} );
arrName.getName = function (){};
```
- 作为函数的参数来传递
```
function call (funName) {
	funName();
} 

call(function(){});
```
- 作为函数返回值
```
function returnFun() {
	return function(){};
}
```
- 具有动态创建和分配的属性
```
var funName = function(){};
funName.name = "Hanzo";
```
**对象能做的任何事情，函数也都能做。函数也是对象，唯一的特殊之处在于，函数是可以调用的。**
##### 2、回调函数
	回调函数是指，我们创建的函数会被其他函数在稍后某个合适的时间点“再回来调用”。
一个简单的示例
```
var text = 'example';
function useless(callback) {
	console.log('I am unless function');
	return callback();
}
function getText() {
	console.log('In getText function');
	return text;
}
console.log('Before making all the calls');
console.log(useless(getText));
console.log('After the calls have  been made');
-------------------------------
上述代码执行结果如下:
Before making all the calls
I am unless function
In getText function
example
After the calls have  been made
```
getText函数作为参数传入useless函数，在useless中，通过callback参数获取getText函数的引用，并通过callback()的调用让getText函数得到执行。
```
console.log(useless(getText));
//可以将上述代码改写成以下形式：
console.log(useless(function() { return text; }));
```
JavaScript的重要特性之一，在函数调用处定义函数，这种方式可以使代码更紧凑和易于理解。函数式方式让我们把函数作为一个单独的实体来创建，像对待其他类型一样，可以创建并作为参数传入一个方法。
#### 二、函数作为对象的乐趣
##### 1、自记忆函数
记忆化是一种构建函数的处理过程，能够记住上次计算的结果。在这个函数中，当得到结果时，就将该结果和参数存储起来。如果另外一个调用使用相同的参数，无需再次计算，直接返回该参数对应的结果。对于动画计算和搜索不经常变化的数据，记忆化是十分有用的。
下面这个例子，使用简单的算法来计算素数。
```
function isPrime(value) {
	if (!isPrime.answers) {
		isPrime.answers = {};
	}
	if (isPrime.answers[value] !== undefined) {
		return isPrime.answers[value];
	}
	var prime = value !== 0 && value !== 1;
	for (var i = 2; i < value; i++) {
		if (value % i === 0) {
			prime = false;
			break;
		}
	}
	return isPrime.answers[value] = prime;
}

console.log('5是素数？',isPrime(5));
console.log('该结果被缓存了？',isPrime.answers[5]);
```
- 在isPrime中，首先通过检查它的answers属性来确认是否已经创建了一个缓存，如果没有则新建一个，只有首次调用才会创建这个初始空对象。这个缓存是函数自身的一个属性，所以只要该函数还存在，缓存也就存在。
- 优点：优先查找之前所得到的值，有一定的性能收益；无需执行任何特殊操作和初始化，就能顺利工作。
- 缺点：任何缓存必然会为性能牺牲内存；无法知道该算法的复杂度，因为结果依赖于函数之前的输入。
#### 三、函数定义
JavaScript提供了4类定义函数的方式：
1. 函数定义和函数表达式——最常用，却有着微妙的不同。
2. 箭头函数——ES6新增。
3. 函数构造函数——以字符串形式动态构造一个函数。
4. 生成器函数——ES6新增。
##### 1、函数声明和函数表达式
JavaScript中，定义函数最常用的方式是函数声明和函数表达式。
- 函数声明——函数声明是独立的，是一段独立的JavaScript代码块（但也能够被包含在其他函数或代码块中）。需要提供被调用的方式，所以函数名是必须的。
- 函数表达式
	JavaScript中，函数是第一类对象，能让我们把函数和其他表达式同等看待。函数表达式可以作为变量声明赋值语句的一部分，可以作为一次函数调用中的参数，可以作为函数执行的返回值。函数表达式是其他JavaScript表达式的一部分，函数名是可选的。
```
//函数表达式作为变量声明赋值语句中的一部分
var myFunc = function(){};
//函数表达式作为一次函数调用的参数&&函数执行的返回值
myFunc(function(){
	return function(){}
})
```
- 立即函数（IIFE）
	当需要进行函数调用时，使用能够求值得到函数的表达式，其后跟着一对函数调用括号，括号内包含参数。如下所示，我们首先创建了一个函数，然后立即调用这个新创建的函数。这种函数叫做立即调用函数表达式（IIFE）
```
//标准函数调用——一个能够计算得到函数的表达式，本例中是一个标识符
myFunctionName(3);

//函数表达式的立即调用——一个能够计算得到函数的表达式，本例中是一个函数表达式
(function(){})(3)	
```
使用一元操作符，实现立即调用函数表达式，一元操作符得到的结果不会存储，一元操作符向JavaScript引擎指明它处理的是表达式而不是语句。
```
+function(){}();
-function(){}();
!function(){}();
~function(){}();
```	
##### 2、箭头函数
箭头函数是JavaScript标准中ES6的新增内容。箭头函数语句书写简单，以一串可选参数名列表开头，参数名以逗号分隔。如果没有参数或者多于一个参数时，参数列表必须包裹在括号内。当只有一个参数时，则可不需要括号。参数列表之后<font color= blud>必须跟着一个胖箭头</font>，以此向JavaScript引擎表明当前处理的是箭头函数。
```
//表达式可直接跟在胖箭头后面
var greet = name => 'Greetings ' + name;

//箭头操作符后可跟一个代码块
var greet = name => {
	var helloString = 'Greetings ';
	return helloString + name;
}
```
如果没有return语句，返回undefined，反之返回值就是return表达式的值。
#### 四、函数的形参和实参
- 形参是定义函数时所列举的变量
- 实参是调用函数时传递给函数的值
- 调用函数时提供的实参，会以形参在函数中定义的顺序被依次赋值，如果实参的数量大于形参，那么额外的实参不会赋值给任何形参。反之，如果形参数量大于实参，那么那些没有对应实参的形参会被置为undefined。
##### 1、剩余参数——不与任何形参名称相匹配的额外实参可通过剩余参数引用。
剩余参数已被加入ES6标准
为函数的最后一个命名参数前加上省略号前缀，这个参数就变成剩余参数，该参数类型是数组，数组内包含着传入的剩余参数。只有函数的最后一个形参才能成为剩余参数。
##### 2、默认参数——函数调用时，若没传入参数，默认参数可以给函数提供缺省的参数值。
由于JavaScript不支持重载，在设置函数默认参数时，需要逐个判断。通过使用typeof操作符，检查对应形参是否被设置形参。typeof操作符返回一个字符串用于表明操作数的类型，如果该操作数未被定义，那么typeof操作符返回字符串undefined。
ES6中，创建默认参数的方法是为函数的形参赋值。
### 第4章 函数进阶：理解函数调用
#### 一、使用隐式函数参数
函数在调用时，除了显式声明的参数外，还会传递两个隐式的参数：arguments和this。
##### 1、arguments参数
- arguments参数是传递给函数的所有参数集合。
- arguments不是数组，但是有名为length的属性，表示实参的确切个数。通过数组索引的方式可以获得单个参数的值。
- arguments可以作为函数实参的别名。在非严格模式下，改变arguments对象的值，会影响对应的函数参数值，同时，修改某个参数值，会影响参数和arguments对象。
- 避免使用别名。在JavaScript提供的严格模式中，无法将arguments作为函数参数的别名使用。
```
"use strict"
function test(person){
	console.log('before change arguments is ', arguments[0]);
	console.log('before change person is ', person);
	person = "Lily";
	console.log('after change person, arguments is ', arguments[0]);
	console.log('after change person, person is ', person);
	arguments[0] = 'Rose';
	console.log('after change arguments, arguments is ', arguments[0]);
	console.log('after change arguments, person is ', person);
}

test('Polly');
//打印结果：
before change arguments is  Polly
before change person is  Polly
after change person, arguments is  Polly
after change person, person is  Lily
after change arguments, arguments is  Rose
after change arguments, person is  Lily
```
##### 2、this参数：函数上下文
**this参数的指向，由定义函数的方式和位置决定，同时还受到函数调用方式的严重影响。**
#### 二、函数调用
调用函数的4种方式
- 作为一个函数，被直接调用
- 作为一个方法，被关联在一个对象上。
- 作为一个构造函数，实例化一个新的对象
- 通过函数的apply或者call方法
```
function mvp(name) {}
function Fmvp(name) {}

//作为函数调用
mvp('Kevin');
(function(who){return who;})('Kevin')

//作为对象的一个方法被调用
var golden = {
	mvp: function() { }
}
golden.mvp('Kevin');
//作为构造函数调用
golden = new Fmvp('Kevin');

//通过call方法调用
golden.call(mvp,'Kevin');
//通过apply方法调用
golden.apply(mvp, ['Kevin']);

```
除了call和apply方式外，函数的调用操作符都是函数表达式之后加一对圆括号。
##### 1、作为函数，直接被调用
通过()运算符调用一个函数，且被调用的函数表达式不是作为一个对象的属性存在时，就是直接被调用。当以这种方式调用时，函数上下文this的值有两种可能：在非严格模式下，它是全局上下文（window对象）；在严格模式下，它是undefined。
```
function unStrict() {
	return this;
}

function isStrict(){
	"use strict";
	return this;
}
console.log('非严格模式下的this ', unStrict());
console.log('严格模式下的this ', isStrict());

//输出结果为：
非严格模式下的this  Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
严格模式下的this  undefined
```
##### 2、作为方法被调用
当一个函数被赋值给一个对象的属性，并且通过对象属性引用的方式调用时，函数会作为对象的方法被调用。这种情况下函数被称为方法（method）。当函数作为某个对象的方法被调用时，该对象会成为函数的上下文，并且在函数内部可通过this访问到。
```
function whatMyThis() {
	return this;
}
console.log('作为函数被调用,上下文为',whatMyThis());

var getMyThis = whatMyThis;
console.log('使用变量来调用函数，上下文为',getMyThis())

var content1 = {
	name:'content1',
	getMyThis: whatMyThis	
}
console.log('使用content1对象的方法getMyThis来调用函数，上下文为',content1.getMyThis())

var content2 = {
	name:'content2',
	getMyThis: whatMyThis	
}
console.log('使用content2对象的方法getMyThis来调用函数，上下文为',content2.getMyThis())


//打印结果为
作为函数被调用,上下文为 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
使用变量来调用函数，上下文为 Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
使用content1对象的方法getMyThis来调用函数，上下文为 {name: "content1", getMyThis: ƒ}
使用content2对象的方法getMyThis来调用函数，上下文为 {name: "content2", getMyThis: ƒ}
```
在整个实例中，whatMyThis是一个独立的函数，由于调用的方式不同，函数的上下文是不同的。在不同的对象中，共享了完全相同的函数，但当执行函数时，该函数可以访问并操作所属对象的其他方法。
##### 3、作为构造函数调用
若要通过构造函数的方式调用，需要在函数调用之前使用关键字new。
使用关键字new调用函数会触发以下操作：
1. 创建一个新的空对象
2. 该对象作为this参数传递个构造函数，从而成为构造函数的函数上下文
3. 新构造的对象作为new运算符的返回值。（除了构造函数自身返回一个对象）

**构造函数自身返回值时**
- 如果构造函数返回一个对象，则该对象将作为整个表达式的值返回，替换new关键字创建的对象，作为函数上下文。
- 如果构造函数返回的是非对象类型，则忽略返回值，返回new关键字创建的对象。

```
//使用构造函数来实现通用函数
function Ninja(name) {
	this.name = name;
	this.skill = function() {
			return this;
	};
}
var ninja1 = new Ninja('ninja1');
var ninja2 = new Ninja('ninja2');

console.log('ninja1的skill上下文，', ninja1.skill());
console.log('ninja2的skill上下文，', ninja2.skill());

//打印结果
ninja1的skill上下文， Ninja {name: "ninja1", skill: ƒ}
ninja2的skill上下文， Ninja {name: "ninja2", skill: ƒ}
```


```
//如果构造函数有返回值，返回字符串
function Ninja(name) {
	this.name = name;
	this.skill = function() {
			return this;
	};
	return this.name;
}
var ninja1 = new Ninja('ninja1');
var ninja2 = new Ninja('ninja2');

console.log('ninja1的skill上下文，', ninja1.skill());
console.log('ninja2的skill上下文，', ninja2.skill());
//打印结果
ninja1的skill上下文， Ninja {name: "ninja1", skill: ƒ}
ninja2的skill上下文， Ninja {name: "ninja2", skill: ƒ}

//可见，构造函数返回非对象，依旧会通过构造并返回一个新对象

```

```
//如果构造函数返回一个对象，那么通过new关键字调用，会返回什么？
var people = {
	name : 'global people',
	skill: false
}

function Ninja(name) {
	this.name = name;
	this.skill = true;
	return people;
}
var ninja1 = new Ninja('ninja1');
var ninja2 = new Ninja('ninja2');

ninja1.skill1 = function(){
	return this;
}

console.log('ninja1，', ninja1.skill1())
console.log('ninja2，', ninja2.skill1())
//打印结果为：
ninja1， {name: "global people", skill: false, skill1: ƒ}
ninja2， {name: "global people", skill: false, skill1: ƒ}
```
**通过以上测试，可以知道：**
- 如果构造函数返回一个对象，则该对象将作为整个表达式的返回值，而传入构造函数的this将被抛弃。
- 如果构造函数返回值不是对象，则忽略返回值，返回新创建的对象。

**编写构造函数则注意事项**
- 推荐使用严格模式编写构造函数。
- 为方便区分构造函数和普通函数，通常以名词命名构造函数，并以大写字母开头。
##### 4、使用apply和call方法调用
需要注意的是，不同函数的主要区别在于：最终作为函数调用上下文传（this）递给执行函数的对象不同。使用apply和call方法可以显式的指定函数上下文。使用apply方法调用函数，需要为其传递两个参数：作为函数上下文的对象和一个数组作为函数调用的参数。call方法的使用方式类似，参数以列表的形式传入，而不是数组。
```
//使用apply和call方法设置函数上下文
function add() {
	var result = 0;
	for (var n = 0; n < arguments.length; n++) {
		result += arguments[n];
	}
	this.result = result;
}
var ninja1 = {};
var ninja2 = {};
add.apply(ninja1, [1, 2, 3]);
add.call(ninja2, 2, 3, 4);

console.log('ninja1.result',ninja1.result);
console.log('ninja2.result', ninja2.result);
//打印结果
ninja1.result 6
ninja2.result 9
```
使用call方法和apply方法强制指定回调函数的函数上下文
```
function forEach(list, callback) {
	for(var n = 0; n < list.length; n++) {
		callback.call(list, n);
	}
}

var col = [0, 1, 2, 3];
forEach(col, function(n) {
	console.log(this[n])//此时this为col数组
});
//打印结果：
0
1
2
3
```
#### 三、解决函数上下文的问题
##### 1、使用箭头函数绕过函数上下文问题
**箭头函数没有单独的this。箭头函数的this与声明所在的上下文相同。**
以下为两个奇怪的例子
```
//示例一
function Button(){
	this.clicked = false;
	this.clickTimes = 0;
	this.click = () => {
		this.clicked = true;
		this.clickTimes++;
		console.log(button.clicked, 'this button clicked',this.clickTimes ,'times');
	} 
}
var button = new Button();
button.click();
true "this button clicked" 1 "times"
button.click()
true "this button clicked" 2 "times"
```
```
//示例二
var button = {
	clicked: false,
	clickTimes: 0,
	click: () => {
		this.clicked = true;
		this.clickTimes++;
		console.log(button.clicked, 'this button clicked',this.clickTimes ,'times');
	}
}
button.click();
button.click();
//打印结果
false "this button clicked" NaN "times"
false "this button clicked" NaN "times"
```
两个示例中，箭头函数的this不相同。示例一中，箭头函数是button对象的方法，箭头函数的this为button对象，示例二中，箭头函数是作为对象字面量button对象的属性定义的，因此箭头函数的this为全局window对象。

> **来自灵魂的发问：**到底什么是对象的方法，什么是对象的属性？？？
##### 2、使用bind方法
bind方法创建并返回一个新函数，bind方法创建的新函数与原函数的函数体相同，新函数被绑定到指定的对象上。
回到上文示例二中
```
var button = {
	clicked: false,
	clickTimes: 0,
	click: function(){
		this.clicked = true;
		this.clickTimes++;
		console.log(button.clicked, 'this button clicked',this.clickTimes ,'times');
	}
}
var btnfun = button.click.bind(button);
btnfun()
true "this button clicked" 1 "times"
```
### 第5章 精通函数：闭包和作用域
#### 一、理解闭包
闭包允许函数访问并操作函数外部的变量。只要变量或函数存在于声明函数时的作用域内，闭包即可时函数能够访问这些变量或函数。

**一个最简单的闭包**
```
var outerValue = "ninja";//在全局作用域中定义一个变量
function outerFunction() { //在全局作用域中声明函数
	console.log(outerValue);
}
outerFunction();   //执行该函数
```
外部变量和外部函数都是在全局作用域中声明的，该作用域在运行时从未消失，这个作用域就是一个闭包。

**另一个闭包的例子**
```
var outerValue = "It`s hot!";
var later;                  //声明一个外部空变量
function outerFunction() {
	var innerValue = "Vary hot!";   //声明一个内部变量，在函数外不可被访问
	function innerFunction() {      //声明一个内部函数
		console.log('I`m innerFunction!');
		console.log(outerValue);
		console.log(innerValue);
	}
	later = innerFunction;          //将内部函数innerFunction的索引存储在外部变量later中。
	console.log('I`m outerFunction!')	
}
outerFunction();      //通过调用outerFunction，创建并将内部函数赋值给变量later
later();    //通过later调用内部函数，

//打印结果：
I`m outerFunction!
I`m innerFunction!
It`s hot!
Vary hot!

```
> 每一个通过闭包访问变量的函数都有一个作用域链，作用域链包含闭包的全部信息。使用闭包时，所有的信息都会存储在内存中，直到JavaScript引擎回收或者页面卸载时，才会被清理。
#### 二、使用闭包
##### 1、封装私有变量
```
function Ninja(nameValue) {
	var name = nameValue;
	var feints = 0;
	this.getFeints = function() {
		return feints;
	};
	this.feint = function() {
		feints++
	};
}

var ninja1 = new Ninja();
ninja1.feint();

console.log(ninja1.feints);
console.log(ninja1.getFeints());

//打印结果
undefined    //无法直接访问到feints
1            //可通过get方法获得
```
##### 2、回调函数
```vbscript-html
<div id="box1"></div>
<div id="box2"></div>
<div id="box3"></div>
<script>
  function animateIt(el) {
    var elem = document.getElementById(el);
    var tick = 0;
    var timer = setInterval(function() {
      if(tick < 100) {
        elem.style.left = elem.style.top = tick + 'px';
        
        tick++;
      } else {
        clearInterval(timer);
        console.log(tick);  
      }
    }, 10);
  }
  animateIt('box1');
  animateIt('box2');
  animateIt('box3'); 
</script>
```
> 每个动画都在处理程序闭包内获得私有变量
> 该实例无法访问其他闭包内的变量
#### 三、通过执行上下文来跟踪代码
JavaScript代码有两种类型，对应有两种函数执行上下文。
- 全局代码，全局代码的函数执行上下文只有一个，当JavaScript程序开始执行时就已经创建了全局上下文
- 函数代码，每次调用函数时，就会创建一个新的函数执行上下文。
```
function skulk(ninja) {
	report(ninja + " skulking");
}
function report(message) {
	console.log(message);
}
skulk("Kuma");
skulk("Yoshi");
```
上述代码在执行时的执行上下文为：
1. 每个JavaScript程序只创建一个全局执行上下文
2. 调用skulk("Kuma")时，创建新的skulk函数执行上下文，推入栈
3. 执行skulk("Kuma")时，调用report函数，创建新的report函数执行上下文，推入栈
4. report执行打印命令，结束后，report函数执行上下文被弹出
5. skulk函数的执行上下文被激活，skulk函数继续执行，执行结束后，其执行上下文被弹出
6. 调用skulk("Yoshi")，过程如上。
#### 四、使用词法环境跟踪变量作用域
**词法环境是JavaScript引擎内部用来跟踪标识符与特定变量之间的映射关系，通常称为作用域。**
##### 1、代码嵌套
```
var ninja = "Main";
function skulk() {
	var action = "skulking";
	function report() {
		var reportNum = 3;
		for(var i = 0; i < reportNum; i++) {
			console.log(ninja + " " + action + " " + i );
		}
	}
	report();
}
skulk();
```
上述代码中，skulk函数定义在全局代码中，report函数定义在skulk函数中，for循环嵌套在report函数中。每次执行skulk函数，都会创建新的函数词法环境。for循环可以访问report函数，skulk函数以及全局代码中的变量。report函数可以访问skulk函数以及全局代码中的变量。skulk函数可以访问全局变量。**词法环境帮助函数跟踪判断变量是否可以访问。**
##### 2、代码嵌套及词法环境
函数执行时，如果在当前环境中无法找到标识符，就会对外部环境进行查找。一旦查找到匹配变量，或者在全局环境中无法查找到对应的标识符返回错误，会停止查找。无论何时调用函数，都会创建一个新的执行环境，与此同时还会创建一个与之相关联的词法环境。外部环境和新建的词法环境相关联成为当前函数的全局环境。
```
var ninja = "Muneyoshi";
function skulk() {
	var action = "Skulking";
	function report() {
		var intro = "Aha!";
		console.log(intro);
		console.log(action);
		console.log(ninja);
	}

	report();
}
skulk();
```
通过以上示例，来说明JavaScript引擎是如何查找变量的值
> 打印intro时，JavaScript引擎首先检查当前执行上下文，即report函数环境。查找完成
> 打印action时，report中没有action标识符的引用，因此JavaScript引擎需要查找report的外部环境：skulk。查找完成。
> 打印ninja时，JavaScript需要查找skulk的外部环境。在调用skulk时，外部环境（即定义skulk的环境）和新创建的skulk环境成为全局环境，因此可以在全局环境中找到ninja标识符。
#### 五、理解JavaScript的变量类型
**在JavaScript中，我们通过3个关键字定义变量：var、let和const。这3个关键字有两点不同：可变性和与词法环境的关系**
##### 1、变量可变性
- 通过const定义的变量都不可变，其值只能在声明时赋值一次。
- 通过var活let声明的变量值可以变更任意次数。

> 值得注意的是：我们不能将一个全新的值赋值给const变量，但是，我们可以修改const变量已有的对象；如果const变量指向一个数组，我们可以修改该数组的长度。
##### 2、定义变量的关键字与词法环境
- 当使用var定义变量时，该变量是在距离最近的函数内部或是在全局词法环境中定义的。换言之，没有块级作用域。在for循环内部定义的变量，在for循环外部依旧能访问。
- 使用let与const定义具有块级作用域的变量。let和const直接在最近的词法环境中定义变量（块级，循环内，函数内和全局环境内）
##### 3、在词法环境中注册标识符
- 注册标识符的过程取决于当前词法环境的类型。
具体过程如下：
1、如果是创建函数环境，那么会创建形参及函数参数的默认值。
2、如果是全局环境，会扫描函数的声明，但是不会扫描执行函数表达式和箭头函数。已扫描到的函数，会被创建并与当前环境相同的标识符绑定，如果该标识符已存在，其值将被重写。
3、如果是块级环境，则扫描当前代码块中以及其他函数之外通过var 声明的变量。若该标识符不存在，进行注册并初始化为undefined，若存在，则保留其值。

- JavaScript是如何做到在函数声明之前调用函数的？
当函数通过声明定义时，在创建词法环境时已经注册了函数标识符，在代码执行之前，该函数已存在。这种情况仅针对函数生命有效，函数表达式和箭头函数是在执行过程中执行定义的。
```
console.log(typeof fun);
console.log(typeof myFunExp);
console.log(typeof arrowFun);
function fun(){};
var myFunExp = function() {};
var arrowFun = x => {};
//执行结果为
function
undefined
undefined
```
- 函数重载
```
console.log(typeof fun);
var fun = 3;
console.log(typeof fun);
function fun() {};
console.log(typeof fun)
//打印结果为：
function   //此时fun指向函数
number     //3赋值给fun
number     //因为创建词法环境时，注册过函数声明，函数声明不会影响标识符的值。
```
- 关于变量提升
实际上变量和函数声明在代码里的位置是不会动的，而是在编译阶段被放入内存中。变量的初始换是不会被提升的。
#### 六、研究闭包的工作原理
##### 1、回顾使用闭包模拟私有变量的代码
```
function Ninja() {
	var feints = 0;  //私有变量
	this.getFeints = function() {  //访问私有变量的方法
		return feints;
	};
	this.feint = function() { //提供修改私有变量的方法
		feints++;
	};
}

var ninja1 = new Ninja();  
console.log(ninja1.feints) //尝试直接访问私有变量：undefined
ninja1.feint()   //调用方法修改私有变量
console.log(ninja1.getFeints()) //验证已修改私有变量

var ninja2 = new Ninja() //通过构造函数创建实例时，该实例具有独立的私有变量
console.log(ninja2.getFeints())  
 
```
每次通过new调用构造函数时，都会创建一个新的词法环境，该词法环境保持构造函数内部的局部变量。
- 使用new关键字后，一个新的对象被实例化。
- 进入构造函数后，会创建一个新的词法环境，会跟踪在该作用域内创建的所有局部变量。
- 在构造函数执行阶段，其创建了两个函数，并将这两个函数赋值给了新创建的对象。这两个函数始终保持着创建它们的环境的引用。
##### 2、私有变量的警告
可以通过函数访问私有变量，而不是通过对象访问
```
function Ninja() {
	var feints = 0;  //私有变量
	this.getFeints = function() {  //访问私有变量的方法
		return feints;
	};
	this.feint = function() { //提供修改私有变量的方法
		feints++;
	};
}

var ninja1 = new Ninja();
ninja1.feint();
var imposter = {};
imposter.getFeints = ninja1.getFeints; //将对象ninja1的getFeints方法，赋值给对象imposter

console.log(imposter.getFeints()) //验证我们可以通过对象imposter可以访问ninja1的私有变量：1
```
以上例子可以说明，私有变量并不是真的私有，而是通过闭包实现的"假装"私有。
##### 3、回顾闭包和回调函数的例子
在计时器的回调函数中使用闭包
```html
<div id="box1"></div>
<div id="box2"></div>
<script>
function animateIt(elementId) {
	var elem = document.getElementById(elementId);
	var tick = 0;
	var timer = setInterval(function() {
		if(tick < 100) {
			elem.style.left = elem.style.top = tick + "px";
			tick++;
		} else {
			clearInterval(timer);
			console.log(tick) //通过闭包访问tick
			console.log(elem) //通过闭包访问dom元素
			console.log(timer)//通过闭包访问计时器
		}
	}, 10);
}
animateIt("box1");
animateIt("box2");
//打印结果为：
100
<div id=​"box1" style=​"width:​ 50px;​ height:​ 50px;​ background-color:​ red;​ position:​ absolute;​ top:​ 99px;​ left:​ 99px;​">​</div>​
1
100
<div id=​"box2" style=​"width:​ 50px;​ height:​ 50px;​ background-color:​ yellow;​ position:​ absolute;​ top:​ 99px;​ left:​ 99px;​">​</div>​
2
</secipt>
```
每次调用animateIt，都会创建一个对应的函数词法环境，该词法环境保存了动画所需要的重要变量。只要存在通过闭包访问这些变量的函数存在，那么这个环境就会一直存在。上述例子中，浏览器会一直保持setInterval的回调函数，直到调用clearInterval方法。
