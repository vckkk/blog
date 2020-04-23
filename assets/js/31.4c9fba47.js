(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{104:function(e,t,_){"use strict";_.r(t);var v=_(1),r=Object(v.a)({},(function(){var e=this,t=e.$createElement,_=e._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[_("p",[e._v("了解浏览器的回流(Reflow)与重绘(Repaint)")]),e._v(" "),_("h2",{attrs:{id:"基础准备"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基础准备"}},[e._v("#")]),e._v(" 基础准备")]),e._v(" "),_("p",[e._v("首先我们要知道浏览器渲染页面的大致流程,即浏览器是怎么处理HTML和CSS文件的.")]),e._v(" "),_("p",[_("img",{staticClass:"lazy",attrs:{alt:"图片来自@Berwin","data-src":"https://user-gold-cdn.xitu.io/2019/1/7/16827ff376991063?imageslim",loading:"lazy"}})]),e._v(" "),_("ul",[_("li",[e._v("图片来自@Berwin")])]),e._v(" "),_("p",[e._v("从上图很明显的能看出来,浏览器先读取HTML文件并构建DOM,然后读取CSS文件构建CSSDOM,接着把DOM和CSSDOM结合形成Render Tree.浏览器根据Render Tree知道了各个节点的样式,找到各个节点处于页面的哪个位置(Layout),最后浏览器就在屏幕上绘制像素(Paint).")]),e._v(" "),_("h2",{attrs:{id:"回流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回流"}},[e._v("#")]),e._v(" 回流")]),e._v(" "),_("p",[e._v("当Render Tree中部分或全部元素的尺寸、结构或某些属性发生变化时,浏览器重新构建文档的过程成为回流.\n导致回流的操作:")]),e._v(" "),_("ul",[_("li",[e._v("页面首次渲染")]),e._v(" "),_("li",[e._v("浏览器窗口大小发生改变")]),e._v(" "),_("li",[e._v("元素尺寸或位置发生改变")]),e._v(" "),_("li",[e._v("元素内容变化（文字数量或图片大小等等）")]),e._v(" "),_("li",[e._v("元素字体大小变化")]),e._v(" "),_("li",[e._v("添加或者删除可见的DOM元素")]),e._v(" "),_("li",[e._v("激活CSS伪类（例如：:hover）")]),e._v(" "),_("li",[e._v("查询某些属性或调用某些方法")])]),e._v(" "),_("p",[e._v("一些常用且会导致回流的属性和方法：")]),e._v(" "),_("ul",[_("li",[_("code",[e._v("clientWidth")]),e._v("、"),_("code",[e._v("clientHeight")]),e._v("、"),_("code",[e._v("clientTop")]),e._v("、"),_("code",[e._v("clientLeft")])]),e._v(" "),_("li",[_("code",[e._v("offsetWidth")]),e._v("、"),_("code",[e._v("offsetHeight")]),e._v("、"),_("code",[e._v("offsetTop")]),e._v("、"),_("code",[e._v("offsetLeft")])]),e._v(" "),_("li",[_("code",[e._v("scrollWidth")]),e._v("、"),_("code",[e._v("scrollHeight")]),e._v("、"),_("code",[e._v("scrollTop")]),e._v("、"),_("code",[e._v("scrollLeft")])]),e._v(" "),_("li",[_("code",[e._v("scrollIntoView()")]),e._v("、"),_("code",[e._v("scrollIntoViewIfNeeded()")])]),e._v(" "),_("li",[_("code",[e._v("getComputedStyle()")])]),e._v(" "),_("li",[_("code",[e._v("getBoundingClientRect()")])]),e._v(" "),_("li",[_("code",[e._v("scrollTo()")])])]),e._v(" "),_("h2",{attrs:{id:"重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#重绘"}},[e._v("#")]),e._v(" 重绘")]),e._v(" "),_("p",[e._v("当Render Tree中元素的样式改变但不影响其在Render Tree中的位置时,浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘.\n如改变元素的"),_("code",[e._v("color")]),e._v(".")]),e._v(" "),_("h2",{attrs:{id:"对比"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#对比"}},[e._v("#")]),e._v(" 对比")]),e._v(" "),_("p",[_("strong",[e._v("回流必将引起重绘，重绘不一定会引起回流。")]),e._v("\n所以回流比重绘的代价要更高.有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。")]),e._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/5a9923e9518825558251c96a",target:"_blank",rel:"noopener noreferrer"}},[_("em",[e._v("来自-浏览器的回流与重绘 (Reflow & Repaint)")]),_("OutboundLink")],1)]),e._v(" "),_("p",[_("a",{attrs:{href:"https://juejin.im/post/5c3333036fb9a049f1545d27",target:"_blank",rel:"noopener noreferrer"}},[_("em",[e._v("来自-关键渲染路径")]),_("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);