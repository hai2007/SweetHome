(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{107:function(a,c,e){var i=e(108);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,e(2).default)("data-quickpaper-52caac6e",i,!0)},108:function(a,c,e){(a.exports=e(1)(!1)).push([a.i,"",""])},182:function(a,c,e){"use strict";e.r(c);var i={};e(107);i.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-52caac6e":""},[a("h2",{"data-quickpaper-52caac6e":""},["z-index和层叠上下文和层叠水平的关系"]),a("h3",{"data-quickpaper-52caac6e":""},["第一步：基本概念。"]),a("p",{"data-quickpaper-52caac6e":""},["层叠上下文是一个概念上的东西，学过编译原理的人应该对这里的上下文很清楚，而层叠不过就是一个词罢了，解释一下就是，根据层叠规则决定位置的一个环境。还需要注意的一点是，具有层叠上下文的元素比普通元素要更靠近眼睛。"]),a("p",{"data-quickpaper-52caac6e":""},["层叠水平也是一个概念上的东西，用大白话说就是：在一个层叠上下文的环境下，里面的元素在z轴上的排列顺序的规则，而层叠顺序就是这里说的具体规则，是实践的东西。"]),a("h3",{"data-quickpaper-52caac6e":""},["第二步：层叠顺序。"]),a("p",{"data-quickpaper-52caac6e":""},["需要记住的是，内部的层叠上下文及其子元素均受制于外部的层叠上下文，下面是层叠顺序，从远到近。"]),a("ul",{"data-quickpaper-52caac6e":""},[a("li",{"data-quickpaper-52caac6e":""},["层叠上下文background/border；"]),a("li",{"data-quickpaper-52caac6e":""},["负z-index；"]),a("li",{"data-quickpaper-52caac6e":""},["block块状盒子模型；"]),a("li",{"data-quickpaper-52caac6e":""},["float浮动盒子；"]),a("li",{"data-quickpaper-52caac6e":""},["z-index为auto或看成0的不依赖z-index的上下文；"]),a("li",{"data-quickpaper-52caac6e":""},["z-index为auto或看成0；"]),a("li",{"data-quickpaper-52caac6e":""},["正z-index。"])]),a("h3",{"data-quickpaper-52caac6e":""},["第三步：产生条件。"]),a("p",{"data-quickpaper-52caac6e":""},["根层叠上下文（指的是页面根元素）。"]),a("p",{"data-quickpaper-52caac6e":""},["定位元素与传统层叠上下文（使用了position:absolute、position:fixed或position:relative的定位元素，且z-index的值是数字会产生叠上下文）。"]),a("p",{"data-quickpaper-52caac6e":""},["CSS3与新时代的层叠上下文:"]),a("ol",{"data-quickpaper-52caac6e":""},[a("li",{"data-quickpaper-52caac6e":""},["一个被设置了display:flex的元素包含的元素对其设置z-index为数值时其会产生层叠上下文；"]),a("li",{"data-quickpaper-52caac6e":""},["设置了opacity不为1的元素会产生层叠上下文；"]),a("li",{"data-quickpaper-52caac6e":""},["设置了transform不为none的元素会产生层叠上下文；"]),a("li",{"data-quickpaper-52caac6e":""},["设置了mix-blend-mode不为normal的元素会产生层叠上下文；"]),a("li",{"data-quickpaper-52caac6e":""},["设置了filter不为none的元素会产生层叠上下文；"]),a("li",{"data-quickpaper-52caac6e":""},["设置了isolation:isolate的元素会产生层叠上下文；"]),a("li",{"data-quickpaper-52caac6e":""},["设置了-webkit-overflow-scrolling的元素会产生层叠上下文（移动端）；"]),a("li",{"data-quickpaper-52caac6e":""},["设置了will-change的元素会产生层叠上下文。"])])])};c.default=i}}]);