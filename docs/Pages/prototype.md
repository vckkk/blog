# 构造函数，原型以及原型链
## 构造函数                
构造函数也是一种函数，与普通函数并没有什么区别，不过为了规范，构造函数的首字母一般为大写字母。构造函数与普通函数的区别在于使用，使用new生成实例的函数是构造函数，而直接调用的是普通函数。每个通过new生成的实例对象都有一个constructor属性，其返回的是创建实例对象时构造函数的引用，而并非一个函数名称的字符串。
```js
function Language(){
  
}
let fn = new Language(js);
fn.constructor === Language // true
​
```


## 原型
### prototype
JavaScript是一种基于原型（对象）的语言。每一个对象都有一个原型对象，对象以原型对象为模板，从原型对象上继承方法和属性，这些方法和属性定义在原型对象的构造器函数的prototype属性上，而非对象实例本身上。

​![center​](https://cdn.nlark.com/yuque/0/2019/jpeg/240921/1558430707054-f6b70165-5015-4180-ad36-38eb6db22725.jpeg)


Parent对象有一个原型对象--Parent.prototype，原型对象上又有两个属性，一个是constructor，一个是__proto__

即`Parent.prototype = {  constructor: {  }, __proto__: { }   }`
![](https://cdn.nlark.com/yuque/0/2019/jpeg/240921/1558430707063-518f59d0-9a28-499b-a5ed-cd1e76f20ce9.jpeg)

​​如上图，对象（构造函数Parent）有一个指针（prototype属性），指向原型对象（Parent.prototype）；
而原型对象（Parent.prototype）上又有一个指针（constructor属性），指向对象（构造函数 Parent）；

这是一个相互嵌套引用。



### __ proto __
之前说过原型对象上有两个属性，一个是constructor，一个是__proto__。__proto__是一个访问器属性，通过它可以访问到对象内部的[[prototype]]

这里p是Parent构造函数的一个实例对象，p.__proto__指向原型对象。__proto__是每一个实例(对象)都有的属性。而prototype是构造函数(函数)的属性，两者并不一样，但是指向的是同一个原型对象。
![center](https://cdn.nlark.com/yuque/0/2019/jpeg/240921/1558430707104-e227c94a-b5e9-4869-b649-aad19beab882.jpeg)</br>
![center](https://cdn.nlark.com/yuque/0/2019/jpeg/240921/1558430707071-fbcf6ec7-2a69-4052-b20d-309bf2c6538b.jpeg)  </br>      
![center](https://cdn.nlark.com/yuque/0/2019/jpeg/240921/1558430707078-170682be-a279-4d83-b61f-bccb1623f290.jpeg)  </br>        

​​
> JavaScript最顶层的是 null，null "生"了一个名叫No.1的对象。或者说，No.1继承了null。No.1上有所有的属性方法

> Object是一个创造对象的机器，他以No.1这个对象为模板，可以创造任意的对象。
> 为了统一管理，JavaScript又有除Object外若干个制造对象的机器。如：String、Number、Array等。这些机器用来创造有相同属性方法的对象。Object以No.1为模板，其他的机器也有对应的模板，而且这些 板是继承与No1



>然而这么多的机器，本身也是一种对象，所以JavaScript又按照No.1创造了No.2对象——机器们的祖辈。所有的机器都是No2创造出来的。则有了Object、Number等对象继承于No.2。

>Function时创造机器的机器，因为他是机器，所有他继承于No.2，并且是创造机器的机器，则以机器的祖辈No2为模板。所以出现了 Function.prototype === Function.__proto__.