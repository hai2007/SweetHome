(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{158:function(a,p,i){"use strict";i.r(p);var f={};i(95);f.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-5f46f6a0":""},[a("h2",{"data-quickpaper-5f46f6a0":""},["margin外边距的重叠问题总结"]),a("h3",{"data-quickpaper-5f46f6a0":""},["第一步：基础说明。"]),a("p",{"data-quickpaper-5f46f6a0":""},["margin的意思很容易明白，就是外边距，用更通俗的话说，就是二个盒子之间间距的设置。"]),a("p",{"data-quickpaper-5f46f6a0":""},["margin有许多需要注意的地方，比如块级元素垂直相邻外边距会合并，行内元素实际上不占上下外边距，左右外边距也不会合并，浮动元素的外边距也不会合并。"]),a("p",{"data-quickpaper-5f46f6a0":""},["普通元素的margin百分百是按照父级元素（正确的说应该是包含块）的宽来计算的，而绝对定位的元素的margin百分比是按照第一个定位元素（relative，absolute和fixed）的宽来计算的。"]),a("h3",{"data-quickpaper-5f46f6a0":""},["第二步：block元素重叠。"]),a("p",{"data-quickpaper-5f46f6a0":""},["block元素（不考虑float和absolute）在垂直方向发生margin重叠（不考虑writing-mode改变书写方式）；margin三种重叠：1.相邻兄弟元素；2.父亲元素和第一个或最后一个孩子元素；3.空的block元素。"]),a("h3",{"data-quickpaper-5f46f6a0":""},["第三步：重叠条件。"]),a("h4",{"data-quickpaper-5f46f6a0":""},["父子元素重叠条件（margin-top）"]),a("ol",{"data-quickpaper-5f46f6a0":""},[a("li",{"data-quickpaper-5f46f6a0":""},["父元素非块状格式上下文元素；"]),a("li",{"data-quickpaper-5f46f6a0":""},["父元素和第一个子元素之间没有inline元素分割；"]),a("li",{"data-quickpaper-5f46f6a0":""},["父元素没有border-top或padding-top设置。"])]),a("h4",{"data-quickpaper-5f46f6a0":""},["父子元素重叠条件（margin-bottom）"]),a("ol",{"data-quickpaper-5f46f6a0":""},[a("li",{"data-quickpaper-5f46f6a0":""},["父元素非块状格式上下文元素；"]),a("li",{"data-quickpaper-5f46f6a0":""},["父元素没有border-bottom或padding-bottom设置；"]),a("li",{"data-quickpaper-5f46f6a0":""},["父元素和最后一个子元素之间没有inline元素分割；"]),a("li",{"data-quickpaper-5f46f6a0":""},["父元素没有height,min-height和max-height的限制。"])]),a("h4",{"data-quickpaper-5f46f6a0":""},["空的block元素重叠"]),a("ol",{"data-quickpaper-5f46f6a0":""},[a("li",{"data-quickpaper-5f46f6a0":""},["元素没有border或padding或inline设置；"]),a("li",{"data-quickpaper-5f46f6a0":""},["没有height或者min-height设置。"])]),a("h3",{"data-quickpaper-5f46f6a0":""},["第四步：有价值的细节。"]),a("p",{"data-quickpaper-5f46f6a0":""},["重叠计算方法：正正取最大、负负取最小和正负相加。"]),a("p",{"data-quickpaper-5f46f6a0":""},["在书写方向的垂直方向，margin:auto会自动分配剩余空间（剩余空间的意思简单的可以理解为：在没有设置宽之前的长度去掉你设置的宽余下的那段距离）。"]),a("p",{"data-quickpaper-5f46f6a0":""},["绝对定位元素的非定位方向margin无效（貌似是的，不过描述不准确，其实一直有效，只不过现在只可以影响自己，无法改变兄弟了，因此看起来失效了）。"]),a("p",{"data-quickpaper-5f46f6a0":""},["最后一个题外话，margin-collapse可以设置重叠方式（collapse默认，重叠、discard取消margin,等于margin:0和separate分隔，就是不发生重叠）。"])])};p.default=f},95:function(a,p,i){var f=i(96);"string"==typeof f&&(f=[[a.i,f,""]]),f.locals&&(a.exports=f.locals);(0,i(2).default)("data-quickpaper-5f46f6a0",f,!0)},96:function(a,p,i){(a.exports=i(1)(!1)).push([a.i,"",""])}}]);