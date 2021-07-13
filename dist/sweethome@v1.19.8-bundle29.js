(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{113:function(a,e,p){var i=p(114);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,p(2).default)("data-quickpaper-eaaf6540",i,!0)},114:function(a,e,p){(a.exports=p(1)(!1)).push([a.i,"",""])},197:function(a,e,p){"use strict";p.r(e);var i={};p(113);i.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-eaaf6540":""},[a("h2",{"data-quickpaper-eaaf6540":""},["vertical-align垂直对齐方式相关说明"]),a("h3",{"data-quickpaper-eaaf6540":""},["第一步：行内盒子模型。"]),a("p",{"data-quickpaper-eaaf6540":""},["为什么明明说的是垂直对齐方式，开始却要说盒子模型，还是行内盒子模型，因为垂直对齐方式控制的对象就是这个模型，因此我们先了解一下控制的环境，再看如何控制。"]),a("p",{"data-quickpaper-eaaf6540":""},["关于盒子模型相关的东西，我们会单独去仔细说明，因为非常重要，这里只是给出简单的说明，包括下面的行高等一样："]),a("ul",{"data-quickpaper-eaaf6540":""},[a("li",{"data-quickpaper-eaaf6540":""},["内容区域（content area）：一种围绕着文字看不见的盒子，大小和font-size有关。"]),a("li",{"data-quickpaper-eaaf6540":""},['内联盒子（inline boxes）：不好表达，举例子解释一下，被inline水平标签（em、a和span等）包含的称为"内联盒子"，如果是光秃秃的文字就称为"匿名内联盒子"。']),a("li",{"data-quickpaper-eaaf6540":""},["行框盒子（line boxes）：一行就是一个行框盒子，里面由一个个内联盒子组成，应该不是太难理解。"]),a("li",{"data-quickpaper-eaaf6540":""},["包含盒子（containing box）：由一行行的行框盒子组成，比如```<p>单纯的文字被inline水平标签包含的文字</p>```。"])]),a("p",{"data-quickpaper-eaaf6540":""},["行内盒子模型布局有一个问题，随便提一下：在使用display:inline-block使元素位于一行时元素之间有间隙是由于一些比如换行符等空白字符导致的（解决方法是对外壳设置font-size:0px，里面小格子再恢复font-size为需要的值，当然别的方法也有，比如标签全部一行，不要换行，不过这个感觉好用些）。"]),a("p",{"data-quickpaper-eaaf6540":""},["还有一个技巧，对于想整体居中，内部左对齐的布局，为了最后一行不足一行的时候不会突兀的居中，可以添加几行和内容元素一样宽，高为零的行内元素，非常好用。"]),a("p",{"data-quickpaper-eaaf6540":""},["此外，还有几个常用的属性，列举一下："]),a("ul",{"data-quickpaper-eaaf6540":""},[a("li",{"data-quickpaper-eaaf6540":""},["white-space：属性设置如何处理元素内的空白，比如是否换行等。"])]),a("h3",{"data-quickpaper-eaaf6540":""},["第二步：行高。"]),a("p",{"data-quickpaper-eaaf6540":""},["为什么行高也是要提前说明一下，因为垂直对齐是在一行中进行的，行高代表的是实际高，有必要了解一下，帮助去寻找对齐线条。"]),a("p",{"data-quickpaper-eaaf6540":""},["行高定义的是二行文字基线（baseline）的距离（不一定准确，更严格说应该是行框盒子的实际高度，不是高度），内容区域（content area）高度+行间距(vertical↵        spacing)=行高，行高由于继承，无处不在，包括单行文本也不例外；其次，高度的表现不是行高而是内容区域高度+行间距，而且内容区域高度只与字号和字体有关，和行高没有任何关系。"]),a("p",{"data-quickpaper-eaaf6540":""},["简单的说就是：行高决定了内联盒子高度，行间距可大可小、可正可负，始终保证行高等于高。"]),a("p",{"data-quickpaper-eaaf6540":""},["内容区域高度不一定是font-size，还取决于字体，不同字体不一样，在simsum下二者是一样的。"]),a("p",{"data-quickpaper-eaaf6540":""},["line-height取值数字时所有可继承根据font-size重新计算，而取百分百和em时，当前元素根据font-size计算之后把计算的结果继承给下面元素，区别有点大。"]),a("p",{"data-quickpaper-eaaf6540":""},["替换元素比较特别，一般有内在尺寸和宽高比，不可以简单的去理解，遇到要小心，后期关于该元素会专门去讨论。"]),a("h3",{"data-quickpaper-eaaf6540":""},["第三步：正文。"]),a("p",{"data-quickpaper-eaaf6540":""},["垂直对齐方式是用来设置垂直对齐方式，所有垂直对齐的元素都会影响行高，修改的是自己的什么线垂直对齐父元素的什么线，比如默认自己的基线对齐父元素的基线；如果取值百分百，计算是相对行高计算的。"]),a("p",{"data-quickpaper-eaaf6540":""},["根据前置知识你应该可以猜到，其是一个inline-block、table-cell（比如td元素）或inline依赖型元素。"]),a("p",{"data-quickpaper-eaaf6540":""},["如果设置为数值，百分百或em等单位，表示的是在默认基础上偏移的对齐。"]),a("h3",{"data-quickpaper-eaaf6540":""},["第四步：注意点。"]),a("p",{"data-quickpaper-eaaf6540":""},["inline-block的基线是正常流中最后一个line box的基线，除非，这个line box里面既没有line boxes或者本身overflow属性的计算值而不是visible，这种情况下基线是margin底边缘。"])])};e.default=i}}]);