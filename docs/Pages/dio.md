---
title: Flutter网络请求
description: Flutter中的请求模块
tags:
  - Flutter
categories: 
  - Blog
---

Flutter应用的必要内容 -- 网络请求

<!-- more -->

## Dio
献上连接 [Dio](https://github.com/flutterchina/dio/blob/flutter/README-ZH.md)



## Json序列化
第一次看完整的Flutter项目时，发现所有从后台请求的回来的数据都有自己的Class类，这和一般情况下的Web开发(基于JS)有些不同。因为Flutter是基于Dart的，是一种静态语言，为了继续持续保有大部分静态类型语言特性：类型安全、自动补全和最重要的编译时异常。我们就需要准备和JSON一一对应的Model。

### Json Model
后端返给我们的一般是JSON或XML，为了方便代码，一般将JSON格式的字符串等转化为Dart对象。我们引入dart:convert这个内置的JSON解码器，使用json.decode( )来实现。该方法可以根据JSON字符串具体内容将其转为List或Map，这样我们就可以通过他们来查找所需的值，如：

​
```dart
//一个JSON格式的用户列表字符串
String jsonStr='[{"name":"Jack"},{"name":"Rose"}]';
​
//将JSON字符串转为Dart对象(此处是List)
List items=json.decode(jsonStr);
​
//输出第一个用户的姓名
print(items[0]["name"]);
​
```
通过json.decode() 将JSON字符串转为List/Map的方法比较简单，它没有外部依赖或其它的设置，对于小项目很方便。但当项目变大时，这种手动编写序列化逻辑可能变得难以管理且容易出错，例如有如下JSON：

​
```dart
{
  "name": "John Smith",
  "email": "john@example.com"
}
```
我们可以通过调用json.decode方法来解码JSON ，使用JSON字符串作为参数:

```dart
Map<String, dynamic> user = json.decode(json);
​
print('Howdy, ${user['name']}!');
print('We sent the verification link to ${user['email']}.');
​
```
这样，我们也能拿到Dart对象(Map)。但是json.decode()仅返回一个Map<String, dynamic>，这就出现了我们上面所说的问题，我们只有到运行时才能知道值的类型，失去了大部分静态类型语言的特性。而这不是我们最想要的，所以我们需要根据JSON文件编辑一个对应的Model Class，这样我们再访问时，就访问的是Model中的一个实例，而不是List/Map。我们在这样的一个Class类中写两个方法：

一个User.fromJson 构造函数, 用于从一个map构造出一个 User实例 map structure
一个toJson 方法, 将 User 实例转化为一个map.


### 自动生成Model
在实际开发中，怎么根据JSON文件编写对应的Model Class呢，一般我们使用官网推荐的json_serializable package包，它是一个自动化生成器。

在项目中配置
打开pubspec.yaml文件

```yaml
dependencies:
  # Your other regular dependencies here
  json_annotation: ^2.0.0
​
dev_dependencies:
  # Your other dev_dependencies here
  build_runner: ^1.0.0
  json_serializable: ^2.0.0
```
​然后点击Packages get来下载依赖，注意缩进！这里的层级目录关系是靠缩进符判断的。

具体代码
下面，我们举个栗子：我们以Github Developer 上的一个API 为例 https://api.github.com/users/octocat，其返回的结构为

```json
Status: 200 OK

{
  "login": "octocat",
  "id": 1,
  "node_id": "MDQ6VXNlcjE=",
  "avatar_url": "https://github.com/images/error/octocat_happy.gif",
  "gravatar_id": "",
  "url": "https://api.github.com/users/octocat",
  "html_url": "https://github.com/octocat",
  "followers_url": "https://api.github.com/users/octocat/followers",
  "following_url": "https://api.github.com/users/octocat/following{/other_user}",
  "gists_url": "https://api.github.com/users/octocat/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/octocat/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/octocat/subscriptions",
  "organizations_url": "https://api.github.com/users/octocat/orgs",
  "repos_url": "https://api.github.com/users/octocat/repos",
  "events_url": "https://api.github.com/users/octocat/events{/privacy}",
  "received_events_url": "https://api.github.com/users/octocat/received_events",
  "type": "User",
  "site_admin": false,
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "hireable": false,
  "bio": "There once was...",
  "public_repos": 2,
  "public_gists": 1,
  "followers": 20,
  "following": 0,
  "created_at": "2008-01-14T04:33:35Z",
  "updated_at": "2008-01-14T04:33:35Z"
}
```
我们需要将其中的 avatar_url、name、company这三条记录显示在我们的页面上，此时要在我们的model目录下lib/model新建一个Dart文件user.dart

```dart
import 'package:json_annotation/json_annotation.dart';//引入上面下载的依赖
​
part:'user.g.dart'  //文件关联
@JsonSerializable()    //靠这个方法来自动化生成对应的model，一个Class对应一个自己的JsonSerializable()
​
Class User {             //新建一个类
    @JsonKey(name:'avatar_url')  // 如果API返回的带有snake_case的对象，
    final String avatarUrl;      //但我们想在我们的模型中使用lowerCamelCase， 
                                //我们可以使用@JsonKey标注，同理如果返回的对象名带有"-"，一样标注
    final String name;
    final String company;
​
    User({this.avatarUrl,this.name,this.company});
​
//********自动生成model中的方法******//
    factory User.fromJson(Map<String,dynamic> json)=>_$UserFromJson(json);//model中的方法
    Map<String,dynamic> toJson()=>_$UserToJson(this); //model中的方法
    
}
```
​然后在项目根目录下运行

​
```bash
flutter packages pub run build_runner build
```
等待几秒，我们会在model目录下看到一个新的Dart文件user.g.dart 这个就是我们自动生成的model文件，但是你会发现存在报错，这是正常的的，因为我们还没有将model文件和实体文件关联。我们需要在user.dart 文件中写part:'user.g.dart'

打开自动形成的model文件，发现这里有两个方法没有被调用，这两个方法就是我们之前提到过的一个User.fromJson 构造函数，一个toJson 方法。我们还需要在user.dart文件中调用该方法。完整的user.dart文件如上显示，user.g.dart如下显示

```dart
// GENERATED CODE - DO NOT MODIFY BY HAND
​
part of 'user.dart';
​
// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************
​
User _$UserFromJson(Map<String, dynamic> json) {
  return User(
      avatarUrl: json['avatar_url'] as String,
      name: json['name'] as String,
      company: json['company'] as String);
}
​
Map<String, dynamic> _$UserToJson(User instance) => <String, dynamic>{
      'avatar_url': instance.avatarUrl,
      'name': instance.name,
      'company': instance.company
    };
```
最后，我们就要在page或widget页面中发起请求，并拿到响应。首先在当前page或widget中引入user.dart文件，然后在State中实例化这个user类，其次在请求中接收响应。具体如下：


```dart
import 'package:http/http.dart' as http;  //使用了自带的请求库
import 'user.dart'
​
class Demo extends StatefulWidget{
    @override
    _DemoState createState() => new _DemoState();
}
​
class _DemoState extends State<Demo>{
    User user;
//****省略无关代码***//
    void getDate(){
        http.get(https://api.github.com/users/octocat).then((res){
            setState((){
                final resJson = json.decode(res.body);
                user = new User.fromJson(resJson);
            })
        })
    }
 //***省略无关代码***//
}

```
之后，我们就可以使用user.avatarUrl，user.name，user.company来访问相应的记录，如果我们手误将其拼错，不用等到代码运行时就会给我们报错了。

### JSON嵌套
实际开发中，后端返回的数据往往会存在JSON嵌套的情况，这时候怎么办呢？我们只要确保内层嵌套的JSON也可序列化就可以了。我们以代码为列：

```dart
import 'package:json_annotation/json_annotation.dart';
part 'test.g.dart';
@JsonSerializable()
​
class Test{         //  Test类，后端返回的数据结构为test内嵌套了一个hello的对象
  Hello hello;      
​
  Test({this.hello});
​
  factory Test.fromJson(Map<String,dynamic> json)=>_$TestFromJson(json);
  Map<String,dynamic> toJson()=>_$TestToJson(this);
}
​
​
@JsonSerializable()
​
class Hello{
  final String presonName;  // Hello内有personName这一字段
​
​
  Hello({this.presonName});
  factory Hello.fromJson(Map<String,dynamic> json)=>_$HelloFromJson(json);
  Map<String,dynamic> toJson()=>_$HelloToJson(this);
}
​
```
注意必须有两个@JsonSerialiazble()其他步骤同上。

## 关于进一步提高效率
### 持续生成
使用watcher可以使我们的源代码生成的过程更加方便。它会监视我们项目中文件的变化，并在需要时自动构建必要的文件，我们可以通过flutter packages pub run build_runner watch在项目根目录下运行来启动watcher。只需启动一次观察器，然后它就会在后台运行，这是安全的。

