---
title: Flutter中的手势处理和通知
display: home
tags:
  - Flutter
categories: 
  - Blog
---

手势处理是应用的必要内容，   Flutter中对于手势事件的识别有两种，第一种是基础的原始指针事件(pointer)，它描述的是屏幕上的指针(鼠标、触摸)的位置和移动；第二种是由单个或多个指针组成的一个动作，例如拖动、缩放、双击、长按等。

<!-- more -->


### PointerEvent
   事件模型一般分为三个阶段：手指按下、手指移动、和手指抬起，而更高级别的手势（如点击、双击、拖动等）都是基于这些原始事件的。
   当手指按下时，Flutter会对当前程序进行命中测试(Hit Test)，用来确认在手指触碰区域存在哪些Widget， 指针按下事件（以及该指针的后续事件）然后被分发到由命中测试发现的最内部的widget。 从那里开始，这些事件会在widget树中向上冒泡，这些事件会从最内部的widget被分发到到widget根的路径上的所有Widget，这和Web开发中浏览器的事件冒泡机制相似， 但是Flutter中没有机制取消或停止冒泡过程。注意，只有通过命中测试的Widget才能触发事件。

   在Flutter中，我们用Listener这个功能型Widget来监听原始事件；

​
```dart
Listener({
  Key key,
  this.onPointerDown, //手指按下时的回调
  this.onPointerMove, //手指移动时的回调
  this.onPointerUp,//手指抬起时的回调
  this.onPointerCancel,//触摸事件取消回调
  this.behavior = HitTestBehavior.deferToChild, //在命中测试期间如何表现
  Widget child
})
```
​PointerEvent是Flutter中的一个类，里面包含了很多指针的信息；如和上面Listener中一一对应的PointerDownEvent、PointerMoveEvent、PointerUpEvent。还有一些常用的信息，如：

   · position ：鼠标相对全局坐标的偏移量  Offset（X,Y）

   · delta ： 两次移动事件PointerMoveEvent的间距  Offset(dx,dy)

   · pressure ： 按压力度 3D Touch

   · orientation ： 指针移动方向，一个角度值


Behavior属性，这个属性的值的类型是HitTestBehavior，可选的值有三个 deferToChild、opaque、translucent；
>deferToChild：子组件会一个个的去命中测试，一旦有一个通过了测试，则该组件(命中的这个子组件的父组件)也会通过；
即，指针作用在子组件上时，父组件也能接收该事件
>opaque ：将组件变为不透明，即便本身为透明的。效果是整个组件范围内都会接收事件，即Widget的整个区域都是可点击范         围。
>translucent：将组件变为透明的，即点击事件能穿透。



#### 怎么中止pointerEvent？

我们在之前说过，Flutter的指针事件类似浏览器的冒泡机制，假如我们不想让某组件接收PointerEvent怎么办，Flutter中有两个类能帮助我们实现。一个是IgnorePointer，另一个是AbsorbPointer。
这两个widget都能阻止其子组件树接收PointerEvent，但是AbsorbPoniter自身会参与命中测试，而IgnorePinter自身不参与。

### GestureDetector
Flutter封装了GestureDetector类，这是一个功能型的Widget，我们可以通过它来识别一些由原生指针事件组成的较为复杂的手势事件。

```dart
GestureDetector(
    child: new Widget,
    onTop:()=>{}, // 点击
    onDoubleTap:()=>{}, // 双击
    onLongPress:()=>{}  // 长按
    ... // 其他属性请官网查看
)

```

注意： 当同时监听onTap和onDoubleTap事件时，当用户触发tap事件时，会有200毫秒左右的延时，这是因为当用户点击完之后很可能会再次点击以触发双击事件，所以GestureDetector会等一断时间来确定是否为双击事件。如果用户只监听了onTap（没有监听onDoubleTap）事件时，则没有延时。



## 拖动与滑动
Flutter中的拖动、滑动基于GestureDetector和 Stack Positioned 这些widget，在GestureDetector中的事件中获取当前元素的偏移量(基于全屏而非父组件)，然后在Positioned中的top、left中更新数据，实现拖动

​
```dart
GestureDetector(
    child: new Widget,
    onPanDown:(DragDownDetails e){
        print(e.globalPosition) //起始坐标
    },
    onPanUpdate:(DragUpdateDetails e){
        setState(){  // 更新偏移量
            _top +=e.delta.dy;
            _left +=e.delta.dx;
    },
    onPanEnd:(DragUpdateDetails e){
        print(e.velocity) // 打印整个移动的速度
    }
}
)
```
滑动，即只更新一个方向上的偏移量。
## 缩放
同样GestureDetector中有监听缩放事件的属性，原理同上，根据指针动态更新组件的weight、height。
onScaleUpdate：（ScaleUpdateDatils details）{
}
```dart
class _ScaleTestRouteState extends State<_ScaleTestRoute> {
  double _width = 200.0; //通过修改图片宽度来达到缩放效果
​
  @override
  Widget build(BuildContext context) {
   return Center(
     child: GestureDetector(
        //指定宽度，高度自适应
        child: Image.asset("./images/sea.png", width: _width),
        onScaleUpdate: (ScaleUpdateDetails details) {
          setState(() {
            //缩放倍数在0.8到10倍之间
            _width=200*details.scale.clamp(.8, 10.0); // clamp(a,b) ab之间
          });
        },
      ),
   );
  }
}
```
​


### GestureRecognizer
### 手势竞争与冲突
#### 竞争
#### 冲突
## 通知机制
在Flutter的Widget树中，每一个节点都可分发通知，这个通知会沿着树向上传递，所有的父组件都能通过NotificationListener来监听通知，并且这个传递是可以中断的。



