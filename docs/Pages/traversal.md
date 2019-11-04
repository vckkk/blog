---
title: 数据遍历
display: home
date: 2019-04-08
lang: zh-CN
tags:
    - JavaScript
    - ES6
categorise:
    - Blog
---

常用的数据遍历对比

<!-- more -->

## 数组
### for循环
```js
    var arr = ['element1', 'element2', 'element3'];
    for (var i = 0, len = arr.length; i < len; i++) {
        console.log(arr[i]);
    }
    // element1
    // element2
    // element3
```
​这是一个标准的for循环，通过变量 i 追踪数组的索引，从而到达访问数组内每一个元素。

缺点：
- 1、只关心数组元素，需额外去维护变量i和边界length
- 2、多层嵌套难以维护
- 3、越界维护，需要花费精力去处理越界问题，一些编译型语言在遇到数组索引越界时会报错，而JavaScript           引擎将不会告诉你任何错误信息，错误定位成本会比较高。
### forEach
这个方法是数组自带的遍历方法
在某些情况下（当数组元素为引用类型时）可以改变数组本身，但是没有返回值，且不支持链式操作。
```js
    var arr = ['element1', 'element2', 'element3'];
    arr.forEach(function(value, index, arr) {
        console.log(value);
    });
​
    // element1
    // element2
    // element3
```
​缺点：
- 无法在遍历中退出，即无法break

### map
forEach的一些局限性在map中都得到了解决，map()即为映射，会新创建数组副本去承接操作后的数组。对数组每个元素都会执行，但是不要拿来做过滤筛选
### filter
map无法执行过滤，而filter本身就是过滤
### sort
默认升序排列，在数组自身上操作，会更改数组自身！
### some和every
两者返回的都是布尔值，some类似或--'||'+，而every类似且--'&'*
### for in...循环
可以解决数组越界问题，我们可以不用自己花费精力去维护i，for in 是精准迭代语句，可以遍历所有可枚举属性，可以遍历数组，对象，字符串，也可以break，continue操作。但是for in 也能遍历原型上的属性
### for of循环
```见ES6```
## 对象遍历
### Object.keys()
遍历的是实例对象所有可枚举的属性，返回对象的键值，形式是数组。不会遍历不可枚举的属性，也不会遍历原型上的属性。

### Object.getOwnPropertyNames()
用法同上，但是能遍历本身不可枚举的属性，原型上的不会得到遍历

### Object.values()

### Object.entries()
返回键值对数组['key',value]，不遍历原型，不遍历不可枚举属性



