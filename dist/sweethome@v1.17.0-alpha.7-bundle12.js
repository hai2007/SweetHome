(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{141:function(c,a,e){var t=e(142);"string"==typeof t&&(t=[[c.i,t,""]]),t.locals&&(c.exports=t.locals);(0,e(2).default)("data-quickpaper-7dc66cf9",t,!0)},142:function(c,a,e){(c.exports=e(1)(!1)).push([c.i,"",""])},161:function(c,a,e){"use strict";e.r(a);var t=e(38),i={methods:{doScroll:function(c){window.sweethome_noRefresh=!0,window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+c,Object(t.a)(document.getElementById("root"),0)}},mounted:function(){Object(t.a)(document.getElementById("root"),0)}};e(141);i.render=function(c){return c("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-7dc66cf9":""},[c("ul",{"data-quickpaper-7dc66cf9":""},[c("li",{"data-quickpaper-7dc66cf9":""},[c("span",{"@click":'doScroll("basic")',"data-quickpaper-7dc66cf9":""},["基础使用"]),c("ul",{"data-quickpaper-7dc66cf9":""},[c("li",{"data-quickpaper-7dc66cf9":""},[c("span",{"@click":'doScroll("basic-environment")',"data-quickpaper-7dc66cf9":""},["环境搭建和运行"])]),c("li",{"data-quickpaper-7dc66cf9":""},[c("span",{"@click":'doScroll("basic-require")',"data-quickpaper-7dc66cf9":""},["模块系统"])])])])]),c("div",{class:"doc-view","data-quickpaper-7dc66cf9":""},[c("h2",{"data-quickpaper-7dc66cf9":""},["Node.js:基于Chrome V8引擎的JS运行环境"]),c("h3",{id:"fixed-basic","data-quickpaper-7dc66cf9":""},["基础使用"]),c("p",{"data-quickpaper-7dc66cf9":""},["简单的理解就是：运行在服务端的JavaScript。"]),c("p",{"data-quickpaper-7dc66cf9":""},["然而，JavaScript是",c("span",{class:"important","data-quickpaper-7dc66cf9":""},["ECMAScript标准"]),"在浏览器端的实现，而nodejs是其在客户端的实现，由于环境的不同，他们之间还是存在着一些比较大的差异。"]),c("h4",{id:"fixed-basic-environment","data-quickpaper-7dc66cf9":""},["环境搭建和运行"]),c("p",{"data-quickpaper-7dc66cf9":""},["你只需要去官网下载对应系统的安装包以后，点击安装（",c("a",{href:"https://nodejs.org/en/download/",target:"_blank",class:"link","data-quickpaper-7dc66cf9":""},["Node.js下载地址"]),"）即可。"]),c("p",{"data-quickpaper-7dc66cf9":""},["我们来演示如何开发一个最简单的打印语句："]),c("pre",{"q-code":"","data-quickpaper-7dc66cf9":""},["// index.js↵console.log('你好呀！');"]),c("p",{"data-quickpaper-7dc66cf9":""},["我们在index.js文件中写入上述代码，然后在当前路径打开命令行执行："]),c("pre",{"q-code":"","data-quickpaper-7dc66cf9":""},["node ./index.js"]),c("p",{"data-quickpaper-7dc66cf9":""},["这样，你就可以看见控制台打印了一个语句：",c("span",{class:"warn","data-quickpaper-7dc66cf9":""},['"你好呀！"']),"。"]),c("h4",{id:"fixed-basic-require","data-quickpaper-7dc66cf9":""},["模块系统"]),c("p",{"data-quickpaper-7dc66cf9":""},["在实际使用中，我们不可能把所有代码都写在一个文件里面，比如，我们有一个",c("span",{class:"warn","data-quickpaper-7dc66cf9":""},["tool.js"]),"用来提供打印上面这个语句的功能："]),c("pre",{"q-code":"","data-quickpaper-7dc66cf9":""},["// tool.js↵exports.doit = function() {↵    console.log('你好呀！');↵}"]),c("p",{"data-quickpaper-7dc66cf9":""},["那么，你在",c("span",{class:"warn","data-quickpaper-7dc66cf9":""},["index.js"]),"中如果想使用这个功能，只需要："]),c("pre",{"q-code":"","data-quickpaper-7dc66cf9":""},["// index.js↵var tool = require('./tool');↵tool.doit();"]),c("p",{"data-quickpaper-7dc66cf9":""},["可以看见，我们通过require方法获取tool这个模块，然后就可以很方便的调用这个模块提供的方法了。"])])])};a.default=i},38:function(c,a,e){"use strict";var t=[],i=null,d=e(0),r=e.n(d);a.a=function(c,a){a=a||0,c=c||document.documentElement;var e=r.a.urlFormat(window.location.href).params.fixed;if(e){var d=document.getElementById("fixed-"+e);if(d){var o=d.offsetTop-a,p=c.scrollTop||0;!function(c,a,e){arguments.length<2&&(a=400);var d={timer:function(c,a,e){if(!c)throw new Error("Tick is required!");var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return t.push({id:i,createTime:new Date,tick:c,duration:a,callback:e}),d.start(),i},start:function(){i||(i=setInterval(d.tick,13))},tick:function(){var c,a,e,i,r,o,p,n=t;for((t=[]).length=0,a=0;a<n.length;a++)c=(r=n[a]).createTime,e=r.tick,o=r.duration,i=r.callback,!1,(p=(+new Date-c)/o)>=1&&!0,e(p=p>1?1:p),p<1&&r.id?t.push(r):i&&i(p);t.length<=0&&d.stop()},stop:function(){i&&(clearInterval(i),i=null)}},r=d.timer((function(a){c(a)}),a,e)}((function(a){c.scrollTop=(o-p)*a+p}),500,(function(){c.scrollTop=o}))}}else c.scrollTop=0}}}]);