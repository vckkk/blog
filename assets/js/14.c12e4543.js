(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{179:function(t,a,s){"use strict";s.r(a);var e=s(0),r=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"数据遍历"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据遍历","aria-hidden":"true"}},[t._v("#")]),t._v(" 数据遍历")]),t._v(" "),s("h2",{attrs:{id:"数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组","aria-hidden":"true"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),s("h3",{attrs:{id:"for循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for循环","aria-hidden":"true"}},[t._v("#")]),t._v(" for循环")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" len "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" len"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// element1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// element2")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// element3")]),t._v("\n")])])]),s("p",[t._v("​这是一个标准的for循环，通过变量 i 追踪数组的索引，从而到达访问数组内每一个元素。")]),t._v(" "),s("p",[t._v("缺点：")]),t._v(" "),s("ul",[s("li",[t._v("1、只关心数组元素，需额外去维护变量i和边界length")]),t._v(" "),s("li",[t._v("2、多层嵌套难以维护")]),t._v(" "),s("li",[t._v("3、越界维护，需要花费精力去处理越界问题，一些编译型语言在遇到数组索引越界时会报错，而JavaScript           引擎将不会告诉你任何错误信息，错误定位成本会比较高。")])]),t._v(" "),s("h3",{attrs:{id:"foreach"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#foreach","aria-hidden":"true"}},[t._v("#")]),t._v(" forEach")]),t._v(" "),s("p",[t._v("这个方法是数组自带的遍历方法\n在某些情况下（当数组元素为引用类型时）可以改变数组本身，但是没有返回值，且不支持链式操作。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'element3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    arr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" index"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n​\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// element1")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// element2")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// element3")]),t._v("\n")])])]),s("p",[t._v("​缺点：")]),t._v(" "),s("ul",[s("li",[t._v("无法在遍历中退出，即无法break")])]),t._v(" "),s("h3",{attrs:{id:"map"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#map","aria-hidden":"true"}},[t._v("#")]),t._v(" map")]),t._v(" "),s("p",[t._v("forEach的一些局限性在map中都得到了解决，map()即为映射，会新创建数组副本去承接操作后的数组。对数组每个元素都会执行，但是不要拿来做过滤筛选")]),t._v(" "),s("h3",{attrs:{id:"filter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter","aria-hidden":"true"}},[t._v("#")]),t._v(" filter")]),t._v(" "),s("p",[t._v("map无法执行过滤，而filter本身就是过滤")]),t._v(" "),s("h3",{attrs:{id:"sort"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sort","aria-hidden":"true"}},[t._v("#")]),t._v(" sort")]),t._v(" "),s("p",[t._v("默认升序排列，在数组自身上操作，会更改数组自身！")]),t._v(" "),s("h3",{attrs:{id:"some和every"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#some和every","aria-hidden":"true"}},[t._v("#")]),t._v(" some和every")]),t._v(" "),s("p",[t._v("两者返回的都是布尔值，some类似或--'||'+，而every类似且--'&'*")]),t._v(" "),s("h3",{attrs:{id:"for-in-循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-in-循环","aria-hidden":"true"}},[t._v("#")]),t._v(" for in...循环")]),t._v(" "),s("p",[t._v("可以解决数组越界问题，我们可以不用自己花费精力去维护i，for in 是精准迭代语句，可以遍历所有可枚举属性，可以遍历数组，对象，字符串，也可以break，continue操作。但是for in 也能遍历原型上的属性")]),t._v(" "),s("h3",{attrs:{id:"for-of循环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#for-of循环","aria-hidden":"true"}},[t._v("#")]),t._v(" for of循环")]),t._v(" "),s("p",[s("code",[t._v("见ES6")])]),t._v(" "),s("h2",{attrs:{id:"对象遍历"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对象遍历","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象遍历")]),t._v(" "),s("h3",{attrs:{id:"object-keys"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-keys","aria-hidden":"true"}},[t._v("#")]),t._v(" Object.keys()")]),t._v(" "),s("p",[t._v("遍历的是实例对象所有可枚举的属性，返回对象的键值，形式是数组。不会遍历不可枚举的属性，也不会遍历原型上的属性。")]),t._v(" "),s("h3",{attrs:{id:"object-getownpropertynames"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-getownpropertynames","aria-hidden":"true"}},[t._v("#")]),t._v(" Object.getOwnPropertyNames()")]),t._v(" "),s("p",[t._v("用法同上，但是能遍历本身不可枚举的属性，原型上的不会得到遍历")]),t._v(" "),s("h3",{attrs:{id:"object-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-values","aria-hidden":"true"}},[t._v("#")]),t._v(" Object.values()")]),t._v(" "),s("h3",{attrs:{id:"object-entries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object-entries","aria-hidden":"true"}},[t._v("#")]),t._v(" Object.entries()")]),t._v(" "),s("p",[t._v("返回键值对数组['key',value]，不遍历原型，不遍历不可枚举属性")])])}],!1,null,null,null);a.default=r.exports}}]);