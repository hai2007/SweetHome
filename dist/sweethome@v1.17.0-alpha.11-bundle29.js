(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{105:function(a,i,p){var d=p(106);"string"==typeof d&&(d=[[a.i,d,""]]),d.locals&&(a.exports=d.locals);(0,p(2).default)("data-quickpaper-62cd7b49",d,!0)},106:function(a,i,p){(a.exports=p(1)(!1)).push([a.i,"",""])},181:function(a,i,p){"use strict";p.r(i);var d={};p(105);d.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-62cd7b49":""},[a("h2",{"data-quickpaper-62cd7b49":""},["z-index和层叠上下文和层叠水平的关系"]),a("h3",{"data-quickpaper-62cd7b49":""},["第一步：基本概念。"]),a("p",{"data-quickpaper-62cd7b49":""},["层叠上下文是一个概念上的东西，学过编译原理的人应该对这里的上下文很清楚，而层叠不过就是一个词罢了，解释一下就是，根据层叠规则决定位置的一个环境。还需要注意的一点是，具有层叠上下文的元素比普通元素要更靠近眼睛。"]),a("p",{"data-quickpaper-62cd7b49":""},["层叠水平也是一个概念上的东西，用大白话说就是：在一个层叠上下文的环境下，里面的元素在z轴上的排列顺序的规则，而层叠顺序就是这里说的具体规则，是实践的东西。"]),a("h3",{"data-quickpaper-62cd7b49":""},["第二步：层叠顺序。"]),a("p",{"data-quickpaper-62cd7b49":""},["需要记住的是，内部的层叠上下文及其子元素均受制于外部的层叠上下文，下面是层叠顺序，从远到近。"]),a("ul",{"data-quickpaper-62cd7b49":""},[a("li",{"data-quickpaper-62cd7b49":""},["层叠上下文background/border；"]),a("li",{"data-quickpaper-62cd7b49":""},["负z-index；"]),a("li",{"data-quickpaper-62cd7b49":""},["block块状盒子模型；"]),a("li",{"data-quickpaper-62cd7b49":""},["float浮动盒子；"]),a("li",{"data-quickpaper-62cd7b49":""},["z-index为auto或看成0的不依赖z-index的上下文；"]),a("li",{"data-quickpaper-62cd7b49":""},["z-index为auto或看成0；"]),a("li",{"data-quickpaper-62cd7b49":""},["正z-index。"])]),a("h3",{"data-quickpaper-62cd7b49":""},["第三步：产生条件。"]),a("p",{"data-quickpaper-62cd7b49":""},["根层叠上下文（指的是页面根元素）。"]),a("p",{"data-quickpaper-62cd7b49":""},["定位元素与传统层叠上下文（使用了position:absolute、position:fixed或position:relative的定位元素，且z-index的值是数字会产生叠上下文）。"]),a("p",{"data-quickpaper-62cd7b49":""},["CSS3与新时代的层叠上下文:"]),a("ol",{"data-quickpaper-62cd7b49":""},[a("li",{"data-quickpaper-62cd7b49":""},["一个被设置了display:flex的元素包含的元素对其设置z-index为数值时其会产生层叠上下文；"]),a("li",{"data-quickpaper-62cd7b49":""},["设置了opacity不为1的元素会产生层叠上下文；"]),a("li",{"data-quickpaper-62cd7b49":""},["设置了transform不为none的元素会产生层叠上下文；"]),a("li",{"data-quickpaper-62cd7b49":""},["设置了mix-blend-mode不为normal的元素会产生层叠上下文；"]),a("li",{"data-quickpaper-62cd7b49":""},["设置了filter不为none的元素会产生层叠上下文；"]),a("li",{"data-quickpaper-62cd7b49":""},["设置了isolation:isolate的元素会产生层叠上下文；"]),a("li",{"data-quickpaper-62cd7b49":""},["设置了-webkit-overflow-scrolling的元素会产生层叠上下文（移动端）；"]),a("li",{"data-quickpaper-62cd7b49":""},["设置了will-change的元素会产生层叠上下文。"])])])};i.default=d}}]);