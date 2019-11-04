---
title: Flutter的路由与导航
display: home
tags:
  - Flutter
categories: 
  - Blog
---

Flutter路由，与Vue、React等框架类似，通过路由来实现页面跳转。在Flutter中，就是通过路由来实现Widget之间的切换与传参。

<!-- more -->

一、Flutter的静态路由 不能向下一个页面传递参数（push()不能传递参数，但是可以传递自己定义的已知参数），但是可以接受下一个页面返回的参数（ pop( ) 回来的参数）

## 命名路由
命名路由(或称静态路由）的注册  在 MaterialApp 中有routes 类似Map（对象键值对的形式）的配置项 。

```Dart
class MyApp extends StatelessWidget {   // 一个没有状态的组件
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Flutter Demo',
      home: new MyHomePage(title: 'Flutter Demo Home Page'),
      routes: {             //命名路由
        "nameRoute":(BuildContext context)=>new NameRoutrPage('在NameRoutrPage页面中定义的参数'), //"路由名称" 对应跳转的页面（组件）
       //...可配置多个命名路由   这里的NameRoutrPage() 是需要跳转至的页面组件 需要另外声明
      },
    );
  }
}
```
​
### 命名路由的跳转 
在页面中需要实现页面跳转的组件上注册事件
```Dart
new FlatButton( onPressed: (){        //按钮  绑定路由跳转事件
  Navigator.of(context).pushNamed("nameRoute");
}, 
textColor: Colors.lightBlue,child: 
new Text("直接使用name跳转")
)
```
这里是在FlatButton上绑定了跳转事件 Navigator.of(context).pushNamed(' 命名路由的名字 ')，另一种命名路由跳转的写法

```dart
Navigator.pushNamed(context, "nameRoute");
Navigator.of(context).pushNamed('nameRoute').then((value) {
///**代码块**   下一个页面返回的参数
})
```
但是，pushNamed是有一个Future的返回值，这就是命名路由可以接受下一个页面返回参数的原因。
```dart
Navigator.of(context).pop('这个是要返回给上一个页面的数据');
```
### 编程式路由（由 MaterialPageRoute 实现）
```Dart
Navigator.push<String>(context, new MaterialPageRoute(builder: (BuildContext context){
    return new Page('任意参数'); 
  })).then( (String result){
    //处理代码  下一个页面返回的参数
  });
​```
#### pop的写法

```dart
Navigator.pop(context,controller.text); //其中 controller.text是返给上一个页面的参数
​
```
## Flutter中的导航  [整理来自](https://www.jianshu.com/p/fbd1d0e22f9c)

### 2.1 type
在App中最常见的导航无非两种:底部导航和顶部导航（类似标签切换），而在Flutter中有已经封装好的Widget来实现这个效果和功能。

### 2.2 准备工作

#### 1）创建TabController

TabController是Flutter自有的一个类，要实现导航，必须创建controller，这个controller是TabBarView和TabBar共有的一个参数，依靠这个参数将路由和导航实现同步。在组件初始化时 initState的钩子中创建 ，在组件习销毁时dispose（）的钩子中注销

#### 2）TabBar

TabBar就是导航自身，这个组件可以创建在任意地方


```dart
new TabBar(                    //创建导航
          tabs: <Widget>[          //导航的子元素
            new Tab(
              icon: new Icon(Icons.directions_bike),
            ),
            new Tab(
              icon: new Icon(Icons.directions_boat),
            ),
            new Tab(
              icon: new Icon(Icons.directions_bus),
            ),
          ],
        )
​
```


#### 3）TabBarView
这个组件就是导航所对应的页面Widget
```dart
new TabBarView(
        controller: _tabController,       //创建的TabController
        children: <Widget>[
          new Center(child: new Text('自行车')),
          new Center(child: new Text('船')),
          new Center(child: new Text('巴士')),
        ],
      ),
```
#### 4）整合
以上三个组件是实现导航跳转的必备元素，但是在TabController的使用上有两种方式
第一是使用系统的DefaultTabController,这种方式很简单，只要在Scaffold上面再套一层DefaultTabController就可以了。这种方式下，TabBarView会自动去查找这个tabController,如果找不到就会报错。见链接，该方式不需要自己创建controller。
第二种是自己定义一个TabController.实现SingleTickerProviderStateMixin，一般我们使用这种方式。下面是这种方式实现导航的具体代码
```dart
class TabBarDemoState extends State<TabBarDemo>
    with SingleTickerProviderStateMixin {    //不探究原理，记住就好
  TabController _tabController;                //导航控制器
  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();                          //注销
  }
​
  void initState() {
    super.initState();
    _tabController = new TabController(vsync: this, length: 3);  //创建 length：根据实际写
  }
​
  @override
  Widget build(BuildContext context) {
    return new Scaffold(
      appBar: new AppBar(
        title: new Text('顶部tab切换'),
        bottom: new TabBar(
          tabs: <Widget>[
            new Tab(
              icon: new Icon(Icons.directions_bike),
            ),
            new Tab(
              icon: new Icon(Icons.directions_boat),
            ),
            new Tab(
              icon: new Icon(Icons.directions_bus),
            ),
          ],
          controller: _tabController,   //引入控制器  实现同步
        ),
      ),
      body: new TabBarView(
        controller: _tabController, //引入控制器 实现同步
        children: <Widget>[
          new Center(child: new Text('自行车')),
          new Center(child: new Text('船')),
          new Center(child: new Text('巴士')),
        ],
      ),
    );
  }
```
​
以上是创建了顶部导航，底部导航同理。

在Scaffold中有 bottomNavigationBar 配置，将TabBar 创建在此项下面即可完成底部导航。



收集整理来自：[flutter-study](https://github.com/chinabrant/flutter_study) Flutter等相关问题。



Flutter中还有PageView (类似于TabBarView)，app效果和目前市场上的各大新闻客户端相似。

具体代码来自：[简书](https://www.jianshu.com/p/7f5b7e7d3c9a)
