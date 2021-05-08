(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{135:function(a,e,t){"use strict";t.r(e);var p={};t(82);p.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-79953f81":""},[a("h2",{"data-quickpaper-79953f81":""},["关于DOM操作是异步的还是同步的相关理解"]),a("p",{"data-quickpaper-79953f81":""},["先列出我的理解，然后再从具体的例子中说明："]),a("ul",{"data-quickpaper-79953f81":""},[a("li",{"data-quickpaper-79953f81":""},["DOM操作本身应该是同步的（当然，我说的是单纯的DOM操作，不考虑ajax请求后渲染等）。"]),a("li",{"data-quickpaper-79953f81":""},["DOM操作之后导致的渲染等是异步的（在DOM操作简单的情况下，是难以察觉的）。"])]),a("h3",{"data-quickpaper-79953f81":""},["证明存在异步"]),a("p",{"data-quickpaper-79953f81":""},["DOM从操作到渲染结束，我想先用一个具体的例子来说明（",a("a",{class:"link",href:"#/editor?file=html_dom-sync",target:"_blank","data-quickpaper-79953f81":""},["点击此处查看"]),"）。"]),a("p",{"data-quickpaper-79953f81":""},["把img标签先追加到页面，然后把img里面的内容绘制到canvas上。我们会发现，canvas上什么也没有绘制出来，而img上面是有内容的（也就是「这是一个例子」这段文字）。"]),a("p",{"data-quickpaper-79953f81":""},["接着，在img添加到页面后，绘制canvas前添加一个延迟，我们修改一下第二步地方的代码如下（",a("a",{class:"link",href:"#/editor?file=html_dom-sync#setTimeout",target:"_blank","data-quickpaper-79953f81":""},["点击此处查看"]),"）："]),a("pre",{"q-code":"","data-quickpaper-79953f81":""},["// 第二步改为↵setTimeout(function () {↵    document.getElementById('canvas')↵        .getContext('2d')↵        .drawImage(document.getElementById('img'), 0, 0);↵}, 0);"]),a("p",{"data-quickpaper-79953f81":""},["再次运行，查看效果会发现：内容出来了。因此，异步是存在的，只不过是在DOM操作还是渲染上就不清楚了。"]),a("h3",{"data-quickpaper-79953f81":""},["证明DOM操作是同步的"]),a("p",{"data-quickpaper-79953f81":""},["接着上面的例子，想证明DOM操作是同步的很简单，依旧修改第二步的代码如下（",a("a",{class:"link",href:"#/editor?file=html_dom-sync#no-dom",target:"_blank","data-quickpaper-79953f81":""},["点击此处查看"]),"）："]),a("pre",{"q-code":"","data-quickpaper-79953f81":""},["// 第二步故意写错img的id↵setTimeout(function () {↵    document.getElementById('canvas')↵        .getContext('2d')↵        .drawImage(document.getElementById('img-no'), 0, 0);↵}, 0);"]),a("p",{"data-quickpaper-79953f81":""},["我们修改drawImage方法查找结点的id为一个错误的'img-no'，显然查找不到，运行结果如下："]),a("pre",{"q-code":"","data-quickpaper-79953f81":""},["Uncaught TypeError: Failed to execute 'drawImage' on 'CanvasRenderingContext2D':↵    The provided value is not of type '(CSSImageValue or HTMLImageElement or SVGImageElement or HTMLVideoElement or HTMLCanvasElement or↵    ImageBitmap or OffscreenCanvas)'↵at <anonymous>:21:18"]),a("p",{"data-quickpaper-79953f81":""},["我们看见浏览器报错了，因此，如果DOM操作是异步的，在没有添加延迟的时候不应该是什么都没有绘制出来，而是应该报错，因此DOM是同步的，那么渲染就是异步的。"]),a("h3",{"data-quickpaper-79953f81":""},["关于异步"]),a("p",{"data-quickpaper-79953f81":""},["应该很多地方都说过，js是单线程的，严格的说，是指JS引擎中负责解释和执行JavaScript代码的线程只有一个，除此之外，其实还有事件触发线程、ajax请求线程等，因此，应该说：同步是单线程可能更准确些。"]),a("p",{"data-quickpaper-79953f81":""},["另外，同步会阻塞异步，看一下下面的代码："]),a("pre",{"q-code":"","data-quickpaper-79953f81":""},["setTimeout(function() {↵    console.log('异步执行了');↵}, 0);↵while(true);"]),a("p",{"data-quickpaper-79953f81":""},["因为同步代码while条件一直为真，你在看见『异步执行了』前估计先看见浏览器页面卡卡的。"]),a("h3",{"data-quickpaper-79953f81":""},["总结"]),a("p",{"data-quickpaper-79953f81":""},["DOM操作只是结点操作，而页面最终的效果还会有render渲染树等参与，因此，虽然DOM操作是同步的，而你期望的「DOM操作」却不一定是同步的，包括调用外设（外设要看具体设备，有的设备会阻塞浏览器执行，什么意思，就是浏览器的异步操作也会停止，结合这里的异步操作的理解，就可以解释一些奇怪现象了）等，需要在日常开发的时候注意。"])])};e.default=p},82:function(a,e,t){var p=t(83);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,t(2).default)("data-quickpaper-79953f81",p,!0)},83:function(a,e,t){(a.exports=t(1)(!1)).push([a.i,"",""])}}]);