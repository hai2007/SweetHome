(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{114:function(a,e,p){var c=p(115);"string"==typeof c&&(c=[[a.i,c,""]]),c.locals&&(a.exports=c.locals);(0,p(2).default)("data-quickpaper-b68e0c1a",c,!0)},115:function(a,e,p){(a.exports=p(1)(!1)).push([a.i,"",""])},185:function(a,e,p){"use strict";p.r(e);var c={};p(114);c.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-b68e0c1a":""},[a("h2",{"data-quickpaper-b68e0c1a":""},["变量定义和赋值的时机相关理解"]),a("p",{class:"warn","data-quickpaper-b68e0c1a":""},["温馨提示：严格模式不允许使用未声明的变量。"]),a("p",{"data-quickpaper-b68e0c1a":""},["var定义的变量会先定义，全部定义完毕再赋值。"]),a("p",{"data-quickpaper-b68e0c1a":""},["比如我们执行下面的语句："]),a("pre",{"q-code":"","data-quickpaper-b68e0c1a":""},["console.log(temp);"]),a("p",{"data-quickpaper-b68e0c1a":""},["你会看见如下报错："]),a("pre",{"q-code":"","data-quickpaper-b68e0c1a":""},["VM47:1 Uncaught ReferenceError: temp is not defined↵    at <anonymous>:1:13"]),a("p",{"data-quickpaper-b68e0c1a":""},["我们把代码改一下："]),a("pre",{"q-code":"","data-quickpaper-b68e0c1a":""},["console.log(temp);↵var temp='我爱你，中国！';"]),a("p",{"data-quickpaper-b68e0c1a":""},["可以看见打印了```undefined```，没有报错，也没有打印```'我爱你，中国！'```。"]),a("p",{"data-quickpaper-b68e0c1a":""},["其实修改后的代码相当于："]),a("pre",{"q-code":"","data-quickpaper-b68e0c1a":""},["var temp;↵console.log(temp);↵temp='我爱你，中国！';"]),a("p",{"data-quickpaper-b68e0c1a":""},["再看个例子："]),a("pre",{"q-code":"","data-quickpaper-b68e0c1a":""},["console.log(temp);↵function temp(){}↵var temp='我爱你，中国！';"]),a("p",{"data-quickpaper-b68e0c1a":""},["看看对应结果："]),a("pre",{"q-code":"","data-quickpaper-b68e0c1a":""},["ƒ temp(){}"]),a("p",{"data-quickpaper-b68e0c1a":""},["这说明，和var一样，function定义的变量也会进行提升，都将被提到当前作用域的最顶部（但是不会初始化）；同时，函数声明的优先级大于变量声明的优先级（function>var）。"])])};e.default=c}}]);