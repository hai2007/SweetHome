(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{114:function(e,a,p){var t=p(115);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,p(2).default)("data-quickpaper-1159950e",t,!0)},115:function(e,a,p){(e.exports=p(1)(!1)).push([e.i,"",""])},185:function(e,a,p){"use strict";p.r(a);var t={};p(114);t.render=function(e){return e("div",{class:"doc-view",quickpaper:"","data-quickpaper-1159950e":""},[e("h2",{"data-quickpaper-1159950e":""},["变量定义和赋值的时机相关理解"]),e("p",{class:"warn","data-quickpaper-1159950e":""},["温馨提示：严格模式不允许使用未声明的变量。"]),e("p",{"data-quickpaper-1159950e":""},["var定义的变量会先定义，全部定义完毕再赋值。"]),e("p",{"data-quickpaper-1159950e":""},["比如我们执行下面的语句："]),e("pre",{"q-code":"","data-quickpaper-1159950e":""},["console.log(temp);"]),e("p",{"data-quickpaper-1159950e":""},["你会看见如下报错："]),e("pre",{"q-code":"","data-quickpaper-1159950e":""},["VM47:1 Uncaught ReferenceError: temp is not defined↵    at <anonymous>:1:13"]),e("p",{"data-quickpaper-1159950e":""},["我们把代码改一下："]),e("pre",{"q-code":"","data-quickpaper-1159950e":""},["console.log(temp);↵var temp='我爱你，中国！';"]),e("p",{"data-quickpaper-1159950e":""},["可以看见打印了```undefined```，没有报错，也没有打印```'我爱你，中国！'```。"]),e("p",{"data-quickpaper-1159950e":""},["其实修改后的代码相当于："]),e("pre",{"q-code":"","data-quickpaper-1159950e":""},["var temp;↵console.log(temp);↵temp='我爱你，中国！';"]),e("p",{"data-quickpaper-1159950e":""},["再看个例子："]),e("pre",{"q-code":"","data-quickpaper-1159950e":""},["console.log(temp);↵function temp(){}↵var temp='我爱你，中国！';"]),e("p",{"data-quickpaper-1159950e":""},["看看对应结果："]),e("pre",{"q-code":"","data-quickpaper-1159950e":""},["ƒ temp(){}"]),e("p",{"data-quickpaper-1159950e":""},["这说明，和var一样，function定义的变量也会进行提升，都将被提到当前作用域的最顶部（但是不会初始化）；同时，函数声明的优先级大于变量声明的优先级（function>var）。"])])};a.default=t}}]);