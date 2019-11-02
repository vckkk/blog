---
display: none
---
# 阿里react全家桶
单独的reactjs只是ui构建库，只为我们解决了用户页面层的问题，并不能称之为开发框架。

## dva
dva是蚂蚁金服推出的一款在react项目中解决数据流的方案，其本质是基于redux和redux-saga来做状态管理和异步操作，并且为了简化开发流程，还内置了react-router和fetch，所以dva可以理解为一个应用框架。

其实在刚开始接触dva时，很不适应。已经习惯了原生的reactjs+redux+router+axios开发流程，每个库是干什么的，怎么用的都比较了解。咋一看dva和umi，就会问自己这是啥？这个又是啥？:slightly_smiling_face: 我到底会不会react！？这是我认识的react吗？所以会看得很不耐烦，学习效率低下，但是dva、umi真的很难学很复杂吗？不，dva只是对reactjs的一个二次封装与组合，所有的api、写法、用法都来自react，只要在学习过程中多加对比，把不太理解的地方抽出来和原生用法比较一下，你会发现dva并没有想象中的复杂。