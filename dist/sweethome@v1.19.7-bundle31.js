(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{104:function(e,a,t){var c=t(105);"string"==typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);(0,t(2).default)("data-quickpaper-317e6c80",c,!0)},105:function(e,a,t){(e.exports=t(1)(!1)).push([e.i,"",""])},186:function(e,a,t){"use strict";t.r(a);var c={};t(104);c.render=function(e){return e("div",{class:"doc-view",quickpaper:"","data-quickpaper-317e6c80":""},[e("h2",{"data-quickpaper-317e6c80":""},["关于DOM操作是异步的还是同步的相关理解"]),e("p",{"data-quickpaper-317e6c80":""},["先列出我的理解，然后再从具体的例子中说明："]),e("ul",{"data-quickpaper-317e6c80":""},[e("li",{"data-quickpaper-317e6c80":""},["DOM操作本身应该是同步的（当然，我说的是单纯的DOM操作，不考虑ajax请求后渲染等）。"]),e("li",{"data-quickpaper-317e6c80":""},["DOM操作之后导致的渲染等是异步的（在DOM操作简单的情况下，是难以察觉的）。"])]),e("h3",{"data-quickpaper-317e6c80":""},["证明存在异步"]),e("p",{"data-quickpaper-317e6c80":""},["DOM从操作到渲染结束，我想先用一个具体的例子来说明（",e("a",{class:"link",href:"#/editor?file=html_dom-sync",target:"_blank","data-quickpaper-317e6c80":""},["点击此处查看"]),"）。"]),e("p",{"data-quickpaper-317e6c80":""},["把img标签先追加到页面，然后把img里面的内容绘制到canvas上。我们会发现，canvas上什么也没有绘制出来，而img上面是有内容的（也就是「这是一个例子」这段文字）。"]),e("p",{"data-quickpaper-317e6c80":""},["接着，在img添加到页面后，绘制canvas前添加一个延迟，我们修改一下第二步地方的代码如下（",e("a",{class:"link",href:"#/editor?file=html_dom-sync#setTimeout",target:"_blank","data-quickpaper-317e6c80":""},["点击此处查看"]),"）："]),e("pre",{"q-code":"","data-quickpaper-317e6c80":""},["// 第二步改为↵setTimeout(function () {↵    document.getElementById('canvas')↵        .getContext('2d')↵        .drawImage(document.getElementById('img'), 0, 0);↵}, 0);"]),e("p",{"data-quickpaper-317e6c80":""},["再次运行，查看效果会发现：内容出来了。因此，异步是存在的，只不过是在DOM操作还是渲染上就不清楚了。"]),e("h3",{"data-quickpaper-317e6c80":""},["证明DOM操作是同步的"]),e("p",{"data-quickpaper-317e6c80":""},["接着上面的例子，想证明DOM操作是同步的很简单，依旧修改第二步的代码如下（",e("a",{class:"link",href:"#/editor?file=html_dom-sync#no-dom",target:"_blank","data-quickpaper-317e6c80":""},["点击此处查看"]),"）："]),e("pre",{"q-code":"","data-quickpaper-317e6c80":""},["// 第二步故意写错img的id↵setTimeout(function () {↵    document.getElementById('canvas')↵        .getContext('2d')↵        .drawImage(document.getElementById('img-no'), 0, 0);↵}, 0);"]),e("p",{"data-quickpaper-317e6c80":""},["我们修改drawImage方法查找结点的id为一个错误的'img-no'，显然查找不到，运行结果如下："]),e("pre",{"q-code":"","data-quickpaper-317e6c80":""},["Uncaught TypeError: Failed to execute 'drawImage' on 'CanvasRenderingContext2D':↵    The provided value is not of type '(CSSImageValue or HTMLImageElement or SVGImageElement or HTMLVideoElement or HTMLCanvasElement or↵    ImageBitmap or OffscreenCanvas)'↵at <anonymous>:21:18"]),e("p",{"data-quickpaper-317e6c80":""},["我们看见浏览器报错了，因此，如果DOM操作是异步的，在没有添加延迟的时候不应该是什么都没有绘制出来，而是应该报错，因此DOM是同步的，那么渲染就是异步的。"]),e("h3",{"data-quickpaper-317e6c80":""},["关于异步"]),e("p",{"data-quickpaper-317e6c80":""},["应该很多地方都说过，js是单线程的，严格的说，是指JS引擎中负责解释和执行JavaScript代码的线程只有一个，除此之外，其实还有事件触发线程、ajax请求线程等，因此，应该说：同步是单线程可能更准确些。"]),e("p",{"data-quickpaper-317e6c80":""},["另外，同步会阻塞异步，看一下下面的代码："]),e("pre",{"q-code":"","data-quickpaper-317e6c80":""},["setTimeout(function() {↵    console.log('异步执行了');↵}, 0);↵while(true);"]),e("p",{"data-quickpaper-317e6c80":""},["因为同步代码while条件一直为真，你在看见『异步执行了』前估计先看见浏览器页面卡卡的。"]),e("h3",{"data-quickpaper-317e6c80":""},["总结"]),e("p",{"data-quickpaper-317e6c80":""},["DOM操作只是结点操作，而页面最终的效果还会有render渲染树等参与，因此，虽然DOM操作是同步的，而你期望的「DOM操作」却不一定是同步的，包括调用外设（外设要看具体设备，有的设备会阻塞浏览器执行，什么意思，就是浏览器的异步操作也会停止，结合这里的异步操作的理解，就可以解释一些奇怪现象了）等，需要在日常开发的时候注意。"])])};a.default=c}}]);