const [...node] = document.getElementsByTagName('body');
console.log([...node][0].children[0])
let deep1 = (node, nodeList = []) => { // node是html片段,nodeList是所有节点的集合数组.
  if (node !== null) {
    nodeList.push(node);
    let children = node.children;
    for (let i = 0; i < children.length; i++) {
      deep1(children[i], nodeList)
    }
  }
  // console.log(nodeList)
  return nodeList;
}
const res = deep1([...node][0].children[0], nodeList = []);
// console.log(res);

let deep2 = (node) => {
  let stack = []; //创建一个栈,进出都在栈顶完成.
  let nodeList = [];
  if (node) {
    stack.push(node); // 将节点放置栈中.
    console.log(stack, 's')
    while (stack.length) { //当栈中有数据时
      let item = stack.pop(); // 将栈顶数据推出,即取节点组的根节点出来,则此时为空栈.
      let children = item.children; // 
      nodeList.push(item); // 将栈顶数据放置list中
      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }
  }
}
const li = document.getElementsByTagName('li')
const res2 = deep2([...node][0].children[0])
console.log(res2)