(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{131:function(a,d,e){var p=e(132);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,e(2).default)("data-quickpaper-35f82d62",p,!0)},132:function(a,d,e){(a.exports=e(1)(!1)).push([a.i,"",""])},216:function(a,d,e){"use strict";e.r(d);var p={};e(131);p.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-35f82d62":""},[a("h2",{"data-quickpaper-35f82d62":""},["关于CSS单位%的一些总结"]),a("h3",{"data-quickpaper-35f82d62":""},["height 高"]),a("p",{"data-quickpaper-35f82d62":""},["height设置百分比的时候，简单的理解是相对父结点的高来计算的，可以看个例子（",a("a",{class:"link",href:"#/editor?file=style_percent-height#value",target:"_blank","data-quickpaper-35f82d62":""},["点击此处查看"]),"）。"]),a("p",{"data-quickpaper-35f82d62":""},["我们设置了父结点的高和兄弟结点的高，最终发现设置100%高的结果和父结点的高一致。"]),a("p",{"data-quickpaper-35f82d62":""},["那么，如果我们不给父结点设置高会怎么样？还是看看例子（",a("a",{class:"link",href:"#/editor?file=style_percent-height",target:"_blank","data-quickpaper-35f82d62":""},["点击此处查看"]),"）↵        ，结果发现```height:100%```失效了。"]),a("p",{"data-quickpaper-35f82d62":""},["是的，第一个孩子只是把父结点撑起来了。如果加个定位会怎么样？改造一下例子（",a("a",{class:"link",href:"#/editor?file=style_percent-height#absolute",target:"_blank","data-quickpaper-35f82d62":""},["点击此处查看"]),"）↵        。哈哈哈，高又恢复了。"]),a("p",{"data-quickpaper-35f82d62":""},["可能你会好奇，如果我给父结点设置高的同时用孩子把父结点撑起来（同时加定位）会怎么样？看看例子（",a("a",{class:"link",href:"#/editor?file=style_percent-height#value+absolute",target:"_blank","data-quickpaper-35f82d62":""},["点击此处查看"]),"）↵        。结果，按照父结点计算。"]),a("h3",{"data-quickpaper-35f82d62":""},["padding 内间距"]),a("p",{"data-quickpaper-35f82d62":""},["padding可以分别设置上下左右四个方向的间距，无论是哪个方向，如果使用百分比作为单位，都是参考父元素的宽计算。"]),a("p",{"data-quickpaper-35f82d62":""},["来看个例子(",a("a",{class:"link",href:"#/editor?file=style_percent-padding",target:"_blank","data-quickpaper-35f82d62":""},["点击此处查看"]),")，我们给div设置的```padding:10%```，试着缩放浏览器可以发现，只有浏览器的宽改变了，padding才会改变，这样也初步验证了我们上面提到的。"]),a("p",{"data-quickpaper-35f82d62":""},["进一步，我们对例子(",a("a",{class:"link",href:"#/editor?file=style_percent-padding#absolute",target:"_blank","data-quickpaper-35f82d62":""},["点击此处查看"]),")进行改造：加了一层设置了固定宽的父结点。"]),a("p",{"data-quickpaper-35f82d62":""},["按理说，由于父结点的宽是固定的，无论浏览器宽（也就是body的宽）如何改变，都不会影响padding的值，而事实却掐恰相反。"]),a("p",{"data-quickpaper-35f82d62":""},["为什么？"]),a("p",{"data-quickpaper-35f82d62":""},["由于我们给设置padding的div设置了绝对定位，此时，这个div已经脱离文档流，如果依旧根据物理上的父div来计算padding会不会不合适？所以，上面说的父结点不是物理上的，而是布局上的，准确的说，就是包含块。"]),a("p",{"data-quickpaper-35f82d62":""},["由于设置了绝对定位，此时其包含块已经变成了body，所以padding的百分比依旧是相对body的宽来计算的。"]),a("p",{"data-quickpaper-35f82d62":""},["那么，padding的这个特性有什么技巧可以总结？"]),a("p",{"data-quickpaper-35f82d62":""},["如果我们现在有一个容器，其宽不确定，可是我们希望里面的某个子元素高一直是此容器宽的一半，怎么办？"]),a("p",{"data-quickpaper-35f82d62":""},["是的，padding的这个特点就把宽和高联系起来了，你可以看看最终的例子(",a("a",{class:"link",href:"#/editor?file=style_percent-padding#layout",target:"_blank","data-quickpaper-35f82d62":""},["点击此处查看"]),")。"])])};d.default=p}}]);