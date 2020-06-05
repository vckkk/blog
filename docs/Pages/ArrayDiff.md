---
title: 数组之差
---

利用lodash的 difference 和 js数组方式找出两个数组的增量与减量

<!-- more -->

```js
import { difference } from 'lodash-es';

const arrayDiff = (oldArr, newArr) => {
  const diff = difference(newArr, oldArr);
  const diffAdd = [...diff, ...newArr];
  const filterUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i)); // 返回数组中非重复的元素
  const duplicates = (arr) => { // 返回数组中重复的元素
    const tmp = [];
    arr.forEach((i) => {
      (arr.indexOf(i) !== arr.lastIndexOf(i) && tmp.indexOf(i) === -1) && tmp.push(i);
    });
    return tmp;
  };
  return { delList: filterUnique([...diffAdd, ...newArr, ...oldArr]), addList: duplicates([...diffAdd]) };
};

export default arrayDiff;
```
