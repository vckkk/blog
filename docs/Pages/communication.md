---
title: 组建通信
lang: zh-CN
description: Flutter组建间的通信
display: home
date: 2018-11-17
tags:
  - Flutter
categories: 
  - Blog
---

介绍Flutter中的组建通信方式，是构建Flutter应用的基础

<!-- more -->

# 组件通信
## 父组件向子组件传递参数
在父组件中引入子组件时，将需要传递的信息写在 new childWidget( mykey : value )
然后在子组件中定义并接受这个参数 :
```dart
class childWidget extends StatelessWidget{
    childWidget({key key,this.value}):super(key:key);
    String value;
...// 此时，从父组件传过来的 value 就可以在childWidget这个子组件中使用了
}
```
## 子组件向父组件
在父组件中定义一个函数，并将这个函数通过父向子通信的方式传给子组件，然后子组件接受并调用该函数，就能将子组件的信息传递给其父组件。

​
```dart
...//父组件
​class ParentState extends State<Parent> {      //在父组件中 定义变量和回调函数
  String data = '无';
​
  void onDataChange(val) {     //这个val来自子组件 调用函数时传入的参数
    setState(() {
      data = val;        
    });
  }
...//
    new childWidget( callback: (val) => onDataChange(val)) // 在引用子组件的时候将函数传递过去
​
```
```dart
...// 子组件
class childWidget extends StatefulWidget {  
  childWidget ({Key key, this.callback})   //接受父组件传来的函数
    :super(key: key);
  final callback;             // 定义
...
}
//然后就可以在该组件中调用此函数 
//widget.callback（val） 此时，父组件就能接受到这个来自子组件的val
​
```
flutter父子组件之间的通信和react、vue是相似的，父向子通过props传递：在父组件中定义，在子组件就能使用；
而子向父同样的都是依靠一个回调函数实现的，那么兄弟组件之间的通信呢？



## 兄弟组件间
Flutter中，我们可以通过eventBus来实现兄弟组件间的通信，这个eventBus在模式上类似发布订阅，在一个组件中发布，在另一个（兄弟组件）组件中订阅，就能实现兄弟组件的通信。
首先，要引入eventBus模块，然后创建实例，接着创建event、并且监听这个event。

在工程目录下新建一个eventBus文件
```dart
import 'package:event_bus/event_bus.dart';
​
EventBus eventBus = new EventBus();       //创建实例 eventBus
​
class MyEvent {     //创建event MyEvent；在其他页面引入eventBus实例后，我们就可以将需要传递的信息放在MyEvent中
  String text;
  MyEvent(this.text);
}
```

发送信息的兄弟组件
```dart
  //首先 import 你刚才创建的eventBus.dart 文件 将eventBus实例引入
​
  //然后 将需要传递的信息放入 MyEvent中
eventBus.fire(new MyEvent('信息')) // eventBus是你创建的实例，Myevent同样也是；

```


接受信息的兄弟组件

```dart
  //同样的，在该组件中引入创建的eventBus.dart import...
  //在需要信息组件的initState钩子中接受
...
  void initState() {
    eventBus.on<MyEvent>().listen((MyEvent data) =>  // data是形参
      show(data.text)   //show函数是定义在该页面上的 
    );
  }
...
  void show(String val) {           //val就是兄弟组件传来的信息
    setState(() {               
      data= val;                     // 现在就可以为所欲为了
    });
  }
```



收集整理来自：[简书](https://www.jianshu.com/p/25a85c02d586)