(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{113:function(a,p,i){var e=i(114);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);(0,i(2).default)("data-quickpaper-508a895f",e,!0)},114:function(a,p,i){(a.exports=i(1)(!1)).push([a.i,"",""])},197:function(a,p,i){"use strict";i.r(p);var e={};i(113);e.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-508a895f":""},[a("h2",{"data-quickpaper-508a895f":""},["关于CSS中设置overflow属性的值为hidden的相关理解"]),a("h3",{"data-quickpaper-508a895f":""},["包裹元素剪裁条件"]),a("p",{"data-quickpaper-508a895f":""},["是不是包裹元素overflow设置为hidden以后，内部元素如果超过包裹元素的话就会被剪裁？答案是不一定，这要看此刻的CSS环境。"]),a("p",{"data-quickpaper-508a895f":""},["根据对CSS2.1规范的理解，可以这样表述：如果一个元素的包含块的overflow属性设置为hidden，那么超过这个包含块部分的内容就会被剪裁。"]),a("p",{"data-quickpaper-508a895f":""},["因此我们需要学会寻找一个元素的包含块，不过在这之前，让我们先简单的知道如果一个元素的overflow属性设置为hidden，被其包裹的内容如果溢出需要同时满足的条件："]),a("ol",{"data-quickpaper-508a895f":""},[a("li",{"data-quickpaper-508a895f":""},["拥有overflow:hidden样式的块元素不具有position:relative和position:absolute样式；"]),a("li",{"data-quickpaper-508a895f":""},["内部溢出的元素是通过position:absolute绝对定位或position:fixed固定定位。"])]),a("h3",{"data-quickpaper-508a895f":""},["寻找包含块"]),a("h4",{"data-quickpaper-508a895f":""},["什么是包含块？"]),a("p",{"data-quickpaper-508a895f":""},["根据CSS2.1规范里面的说明，简单的说就是：用来确定一个元素的盒子的位置和尺寸的矩形就叫这个元素的包含块。"]),a("h4",{"data-quickpaper-508a895f":""},["寻找规则"]),a("p",{"data-quickpaper-508a895f":""},["因此包含块是一个非常有意义而且涉及属性很多的概念，至于如何确定一个元素的盒子的包含块是谁，遵循下面几条规则："]),a("h5",{"data-quickpaper-508a895f":""},["根元素的包含块"]),a("p",{"data-quickpaper-508a895f":""},["其包含块又叫初始包含块，可以先认为就是可视区域（其实不准确，姑且这样说比较简单）。"]),a("h5",{"data-quickpaper-508a895f":""},["非根元素，且其position属性是relative和static的元素的包含块"]),a("p",{"data-quickpaper-508a895f":""},["它的包含块是由最近的祖先块容器盒的内容区域创建的。"]),a("h5",{"data-quickpaper-508a895f":""},["非根元素，且其position属性是absolute的元素的包含块"]),a("p",{"data-quickpaper-508a895f":""},["它的包含块由最近的position不为static的祖先元素创建（如果没有找到这样的祖先元素，这个绝对定位的元素的包含块为初始包含块）；具体创建方法如下："]),a("ol",{"data-quickpaper-508a895f":""},[a("li",{"data-quickpaper-508a895f":""},["如果这个祖先元素是行内元素，包含块的范围是这个祖先元素中的第一个和最后一个行内盒的padding box围起来的区域；"]),a("li",{"data-quickpaper-508a895f":""},["如果这个祖先元素不是行内元素，包含块的范围是这个祖先元素的内边距+width区域。"])]),a("h3",{"data-quickpaper-508a895f":""},["为什么会清除浮动造成的影响"]),a("p",{"data-quickpaper-508a895f":""},["一个有趣的现象是：一个没有设置高度的父元素包裹一个子元素，父元素应该会被子元素撑起来，也就是有高了，不过如果你给子元素设置了浮动，显然原来父元素撑起来的高就塌了，到这里好像都很正常；接着，你给父元素加了一个overflow:hidden，发现父元素的高又有了，好像浮动被清除了一样，为什么会这样？"]),a("p",{"data-quickpaper-508a895f":""},["其实归根结底，这里的浮动没有清除，只是因为overflow属性的值是hidden的时候会形成一个BFC，而BFC就是一个隔离的渲染区域，因此浮动造成的高崩塌会导致对外部布局的影响，为了消除这种不益的表现，计算高度的时候浮动元素也计算进去了。"]),a("p",{"data-quickpaper-508a895f":""},["如果说到这里就停止，你可能会非常好奇，除了这里的情况还有什么情况会产生BFC，而BFC环境下具体会有哪些规则？接着下段来讲。"]),a("h3",{"data-quickpaper-508a895f":""},["BFC（块级格式化上下文）"]),a("p",{"data-quickpaper-508a895f":""},["BFC是一个非常有用的环境，如果用一句话来说明它是什么样的存在：一个隔离的渲染区域，容器里面的子元素不会在布局上影响到外面的元素，反之也是如此。"]),a("h4",{"data-quickpaper-508a895f":""},["如何触发BFC?"]),a("p",{"data-quickpaper-508a895f":""},["只需要保证满足下面至少一条就会触发BFC："]),a("ol",{"data-quickpaper-508a895f":""},[a("li",{"data-quickpaper-508a895f":""},["根元素body；"]),a("li",{"data-quickpaper-508a895f":""},["设置了float值不为none的元素；"]),a("li",{"data-quickpaper-508a895f":""},["设置了overflow属性不为visible的元素；"]),a("li",{"data-quickpaper-508a895f":""},["设置了属性position不为relative和static的元素；"]),a("li",{"data-quickpaper-508a895f":""},["设置了display的值为flex、table-cell、table-caption和inline-block中的任何一个的元素。"])]),a("p",{"data-quickpaper-508a895f":""},["可以看出来，就是一个比较独立的块，因为是一个独立的环境，在开发时候适度使用会有效降低开发和维护难度。"]),a("h4",{"data-quickpaper-508a895f":""},["BFC环境下的特性或规则"]),a("p",{"data-quickpaper-508a895f":""},["大致可以归纳为三个方面：独立性、垂直分布规则和水平分布规则。"]),a("ol",{"data-quickpaper-508a895f":""},[a("li",{"data-quickpaper-508a895f":""},["独立性：BFC是页面上一个隔离的容器，和外面的关系是不会互相影响，对浮动而言也是，不会和浮动元素发生重叠，高也和上面提到的一样不会崩塌；"]),a("li",{"data-quickpaper-508a895f":""},["垂直分布规则：BFC的内部里面的一个个盒子在垂直方向一个接着一个排放，位置由margin决定，两个相邻的盒子margin会发生重叠；"]),a("li",{"data-quickpaper-508a895f":""},["水平分布规则：BFC里面的盒子的左外边缘和包含块的左边相接触，简单的理解就是水平方向不会发生margin重叠。"])])])};p.default=e}}]);