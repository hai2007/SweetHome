(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{180:function(a,e,t){var i=t(181);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,t(2).default)("data-quickpaper-56775439",i,!0)},181:function(a,e,t){(a.exports=t(1)(!1)).push([a.i,"",""])},205:function(a,e,t){"use strict";t.r(e);var i=t(57),r={methods:{doScroll:function(a){window.sweethome_noRefresh=!0,window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+a,Object(i.a)(document.getElementById("root"),0)}},mounted:function(){Object(i.a)(document.getElementById("root"),0)}};t(180);r.render=function(a){return a("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-56775439":""},[a("ul",{"data-quickpaper-56775439":""},[a("li",{"data-quickpaper-56775439":""},[a("span",{"@click":'doScroll("basic")',"data-quickpaper-56775439":""},["基础使用"]),a("ul",{"data-quickpaper-56775439":""},[a("li",{"data-quickpaper-56775439":""},[a("span",{"@click":'doScroll("basic-environment")',"data-quickpaper-56775439":""},["环境搭建和运行"])]),a("li",{"data-quickpaper-56775439":""},[a("span",{"@click":'doScroll("basic-require")',"data-quickpaper-56775439":""},["模块系统"])])])])]),a("div",{class:"doc-view","data-quickpaper-56775439":""},[a("h2",{"data-quickpaper-56775439":""},["Node.js:基于Chrome V8引擎的JS运行环境"]),a("h3",{id:"fixed-basic","data-quickpaper-56775439":""},["基础使用"]),a("p",{"data-quickpaper-56775439":""},["简单的理解就是：运行在服务端的JavaScript。"]),a("p",{"data-quickpaper-56775439":""},["然而，JavaScript是",a("span",{class:"important","data-quickpaper-56775439":""},["ECMAScript标准"]),"在浏览器端的实现，而nodejs是其在客户端的实现，由于环境的不同，他们之间还是存在着一些比较大的差异。"]),a("h4",{id:"fixed-basic-environment","data-quickpaper-56775439":""},["环境搭建和运行"]),a("p",{"data-quickpaper-56775439":""},["你只需要去官网下载对应系统的安装包以后，点击安装（",a("a",{href:"https://nodejs.org/en/download/",target:"_blank",class:"link","data-quickpaper-56775439":""},["Node.js下载地址"]),"）即可。"]),a("p",{"data-quickpaper-56775439":""},["我们来演示如何开发一个最简单的打印语句："]),a("pre",{"q-code":"","data-quickpaper-56775439":""},["// index.js↵console.log('你好呀！');"]),a("p",{"data-quickpaper-56775439":""},["我们在index.js文件中写入上述代码，然后在当前路径打开命令行执行："]),a("pre",{"q-code":"","data-quickpaper-56775439":""},["node ./index.js"]),a("p",{"data-quickpaper-56775439":""},["这样，你就可以看见控制台打印了一个语句：",a("span",{class:"warn","data-quickpaper-56775439":""},['"你好呀！"']),"。"]),a("h4",{id:"fixed-basic-require","data-quickpaper-56775439":""},["模块系统"]),a("p",{"data-quickpaper-56775439":""},["在实际使用中，我们不可能把所有代码都写在一个文件里面，比如，我们有一个",a("span",{class:"warn","data-quickpaper-56775439":""},["tool.js"]),"用来提供打印上面这个语句的功能："]),a("pre",{"q-code":"","data-quickpaper-56775439":""},["// tool.js↵exports.doit = function() {↵    console.log('你好呀！');↵}"]),a("p",{"data-quickpaper-56775439":""},["那么，你在",a("span",{class:"warn","data-quickpaper-56775439":""},["index.js"]),"中如果想使用这个功能，只需要："]),a("pre",{"q-code":"","data-quickpaper-56775439":""},["// index.js↵var tool = require('./tool');↵tool.doit();"]),a("p",{"data-quickpaper-56775439":""},["可以看见，我们通过require方法获取tool这个模块，然后就可以很方便的调用这个模块提供的方法了。"])])])};e.default=r},57:function(a,e,t){"use strict";var i=[],r=null,c=t(0),o=t.n(c);e.a=function(a,e){e=e||0,a=a||document.documentElement;var t=o.a.urlFormat(window.location.href).params.fixed;if(t){var c=document.getElementById("fixed-"+t);if(c){var p=c.offsetTop-e,n=a.scrollTop||0;!function(a,e,t){arguments.length<2&&(e=400);var c={timer:function(a,e,t){if(!a)throw new Error("Tick is required!");var r=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return i.push({id:r,createTime:new Date,tick:a,duration:e,callback:t}),c.start(),r},start:function(){r||(r=setInterval(c.tick,13))},tick:function(){var a,e,t,r,o,p,n,d=i;for((i=[]).length=0,e=0;e<d.length;e++)a=(o=d[e]).createTime,t=o.tick,p=o.duration,r=o.callback,!1,(n=(+new Date-a)/p)>=1&&!0,t(n=n>1?1:n),n<1&&o.id?i.push(o):r&&r(n);i.length<=0&&c.stop()},stop:function(){r&&(clearInterval(r),r=null)}},o=c.timer((function(e){a(e)}),e,t)}((function(e){a.scrollTop=(p-n)*e+n}),500,(function(){a.scrollTop=p}))}}else a.scrollTop=0}}}]);