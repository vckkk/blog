# Reactjs

## 什么是React
    *** A JavaScript library for building user interfaces ***

    一个用于构建用户页面的JavaScript库。如果你熟悉 MVC 概念的话，那么 React 的组件就相当于 MVC 里面的 View。如果你不熟悉也没关系，你可以简单地理解为，React.js 将帮助我们将界面分成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，就成了我们的页面。

    一个组件的显示形态和行为有可能是由某些数据决定的。而数据是可能发生改变的，这时候组件的显示形态就会发生相应的改变。而 React.js 也提供了一种非常高效的方式帮助我们做到了数据和组件显示形态之间的同步。

    React.js 不是一个框架，它只是一个库。它只提供 UI （view）层面的解决方案。在实际的项目当中，它并不能解决我们所有的问题，需要结合其它的库，例如 Redux、React-router 等来协助提供完整的解决方法。

## 什么是组件化
    现在前端大都推崇组件化思想，React.js也不例外，那到底什么是组件化？我们从一个简单的例子开始说起。
      ![](https://cdn.nlark.com/yuque/0/2019/png/240921/1554191857857-6a224ff5-5599-4811-afb8-fc528cc9586b.png)![](https://cdn.nlark.com/yuque/0/2019/png/240921/1554191857872-487a88e1-f4d8-445a-a139-4e16b0e8d506.png)

这是一个点赞按钮，点击后会在"点赞"和"取消"之间切换。

如果你对前端有些了解的话，这点东西不在话下，直接上手。



​
1
...//省略的公共部分
2
  <body>
3
    <div class='wrapper'>
4
      <button class='like-btn'>
5
        <span class='like-text'>点赞</span>
6
        <span>👍</span>
7
      </button>
8
    </div>
9
  </body>
10
...
​


​
1
const button = document.querySelector('.like-btn') // 获取按钮DOM
2
const buttonText = button.querySelector('.like-text') // 获取按钮内部文字 
3
let isLiked = false
4
button.addEventListener('click', () => {         // 事件监听
5
  isLiked = !isLiked
6
  if (isLiked) {
7
    buttonText.innerHTML = '取消'
8
  } else {
9
    buttonText.innerHTML = '点赞'
10
  }
11
}, false)
​
    现在一个简单的点赞按钮就写好了。可是你发现另外一个页面也需要这样的按钮，同事的项目中也需要这个功能，你现在只有一种方法：将html结构和JavaScript代码统统复制粘贴过去。这样的实现方式没有任何可复用性。

结构复用与简单组件化
    现在我们重写这个点赞按钮，让它具有一定的可复用性。首先我们写一个class类，里面有一个方法，我们就叫他render方法（用到ES6的字符串模块 ` `），这个方法返回了一段标识HTML结构的字符串。



​
1
class LikeButton {
2
  render() {
3
    return `
4
      <button id='like-btn'>
5
          <span class='like-text'>赞</span>
6
          <span>👍</span>
7
        </button>
8
      `
9
  }
10
}
​
    然后我们就能用这个类来构造不同的实例按钮



​
1
const wrapper = document.querySelector('.wrapper');  // 获取div
2
const likeButton1 = new LikeButton();   // 构建实例
3
wrapper.innerHTML = likeButton1.render();  //  将返回的内容插入div中
​
    我们使用innerHTML简单粗暴的将按钮按进wrapper中。但是你会发现：按钮DOM是有了，那么点击事件怎么办？我们这个LikeButton类中所返回的button就是一段字符串，无法给其添加事件，DOM事件的API只能添加在DOM身上。所以现在的问题就是：怎么将这段表示DOM结构的字符串变成真正的DOM？

    假设现在有一个函数可以帮我们完成这个动作，createDOMFromString，我们向这个函数中传递一段HTML结构的字符串，他会将对于的DOM结构返回给我们。现在我们利用这个函数重新我们的LikeButton类



​
1
class LikeButton {
2
  render() {
3
    this.element = creatrDOMFromString(`
4
      <button id='like-btn'>
5
        <span class='like-text'>赞</span>
6
        <span>👍</span>
7
      </button>
8
  `);
9
    this.element.addEventListener('click',() => console.log('click'),false);
10
    return this.element;
11
  }
12
}
​
    现在我们render返回的并不只是一段字符串了，而是一个已经添加过事件的DOM，现在我们就可以将DOM放置在页面上，因为现在已经不是字符串，所以不能用innerHTML，而是用appendChild



​
1
const wrapper = document.querySelector('.wrapper');
2
const likeButton1 = new LikeButton();
3
wrapper.appendChild(likeButton1.render());
​
    现在你再一次尝试点击按钮，就能在控制台看到打印出的 'click'，接下来，我们将完整的点赞功能写好



​
1
class LikeButton {
2
  constructor() {
3
    this.state = {isLiked: false};
4
  };
5
  changenLikeText() {
6
    const likeText = this.element.querySelector('.like-text');
7
    this.state.isLiked = !this.state.isLiked;
8
    likeText.innerHTML = this.state.isLiked ? '取消':'点赞';
9
  }；
10
  render() {
11
    this.element = createDOMFromString(`
12
      <button id='like-btn'>
13
        <span class='like-text'>赞</span>
14
        <span>👍</span>
15
      </button>     
16
      `);
17
    this.element.addEventListener('click',this.changeLikeText.bind(this),false);
18
    return this.element;
19
  }
20
}
21
​
22
​
​
    这个构造函数添加了一个对象state用来保存当前按钮的状态，还给按钮新绑定了事件，点击会触发按钮的文本改变。现在只要在的地方实例化一下，就可以轻松使用。

优化DOM操作
    上面实现了点赞按钮的复用，也是一个简易的组件，不过我们发现在changeText方法中有手动操作DOM的动作，是因为数据改变我们要去更新页面内容，那么假设现在有不止一个数据可以更改页面内容，我们需要频繁的手动操作DOM吗？这里有一种解决方案：一旦有数据发生改变，我们就重新调用render，构建一个新的DOM。



​
1
class LikeButton {
2
  constructor() {
3
    this.state = {isLiked: false};
4
  }
5
  setState(state) {
6
    this.state = state;
7
    this.element = this.render();
8
  };
9
  changenLikeText() {
10
    this.setState({
11
      isLiked: !this.state.isLiked
12
    })
13
  };
14
  render() {
15
    this.element = createDOMFromString(`
16
      <button id='like-btn'>
17
        <span class='like-text'>${this.state.isLiked ? '取消':'点赞'}</span>
18
        <span>👍</span>
19
      </button>     
20
      `);
21
    this.element.addEventListener('click',this.changeLikeText.bind(this),false);
22
    return this.element;
23
  }
24
}
​
    对比一下更新后的代码，多了setState的方法，这个方法接受一个state参数（更新后的state），在方法内我们更新了this.state，然后又调用了render方法，根据新的state创建了新的DOM。这样就避免了手动DOM的动作。现在只是新构建了DOM，并没有表现在页面上，继续修改代码中的setState方法



​
1
...
2
  setState(state) {
3
    const oldEle = this.element;
4
    this.state = state;
5
    this.element = this.render();
6
    if(this.onStateChange){
7
      this. onStateChange(oleEle,this.element)
8
    }
9
  }
10
...
11
​
12
// 然后在使用组件的时候
13
const likeButton = new LikeButton(); // 实例化组件
14
wrapper.appendChild(likeButton.render()) // 第一次插入 DOM 元素
15
likeButton.onStateChange = (oldEle, newEle) => {
16
  wrapper.insertBefore(newEle, oldEle) // 插入新的元素
17
  wrapper.removeChild(oldEle) // 删除旧的元素
18
}
​
    现在，每一次steState都会调用onStateChange方法，这个方法是在实例化后注入的，所以我们就可以随意编写这个方法。每当state发生变化，触发setState，然后调用onStateChange，我们就能在页面上插入新DOM并删除旧的DOM，虽然也很暴力并且严重影响性能，但是在React中，会被一种Virtual-DOM的策略有效解决。

抽出组件的公共方法
    上面已经完成了一个点赞按钮的组件，站在更长远的角度看，我们还可以将当前这个模式给抽象出来，以便写更多的组件。



​
1
class Component {
2
  constructor(props={}){
3
    this.props = props;
4
  }
5
  setState(state) {
6
    const oldEle = this.element;
7
    this.state = state;
8
    this.element = this.renderDOM();
9
    if(onStateChange) this.onStateChange(oldEle,this.element)
10
  }
11
  renderDOM(){
12
    this.element = createDOMFromString(this.render());
13
    if(this.onClick){
14
      this.element.addEventListener('click',this.onClick.bind(this),false);
15
    }
16
    return this.element;
17
  }
18
  const createDOMFromString = (domString) {
19
    const div = document.createElement('div');
20
    div.innerHTML = domString;
21
    return div;
22
  }
23
  const mount = (component,wrapper) => {
24
    wrapper.appenChild(component.renderDOM());
25
    component.onStateChange = (oldEle,newEle) {
26
      wrapper.insertBefore(newEle,oldEle);
27
      wrapper.removeChild(oldEle);
28
    }
29
  }
30
  
31
}
​
    现在这个Component类比起之前的LikeButton类多了一点东西，我们逐一地看下，constructor的props参数是从外部传入的，我们可以用来个性化组件，renderDOM就是原来的render方法，这里的createDOMFromString只是为构建出的DOM添加一个div父节点，mount方法是将当前组件进行挂载，放置到我们预期的页面上。



​
1
class LikeButton extends Component {
2
  constrcutor(props) {
3
    super(props);
4
    this.state = {
5
      isliked: false,
6
    }
7
  }
8
  onClick = () {
9
    this.setState({
10
      color: 'blue',
11
    })
12
  }
13
  render() {
14
    return(`
15
    <button class="like-btn" style="background-color:${this.props.color}">
16
      <span class="like-text">
17
        ${this.state.isliked ? '取消' : '点赞'}
18
      </span>
19
      <span>👍</span>
20
    </button>
21
  `)
22
  }
23
}
24
​
25
const wrapper = document.querySelector('.wrapper');
26
mount(new LikeButton({color:'red'}),wrapper);
​
  现在页面上就多了一个红色点赞按钮。到现在，已经基本学会了react组件的写法。这里的renderDOM就是react.js中的render函数，我们最早定义的createDOMFromString就是React.createElement方法，只不过在react中它解析的是JSX语法。而这个mount就是ReactDOM.render方法，将组件挂载到指定节点。