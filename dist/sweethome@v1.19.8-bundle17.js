(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{166:function(a,e,c){var t=c(167);"string"==typeof t&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);(0,c(2).default)("data-quickpaper-6ac29f39",t,!0)},167:function(a,e,c){(a.exports=c(1)(!1)).push([a.i,"",""])},186:function(a,e,c){"use strict";c.r(e);var t=c(47),i={methods:{doScroll:function(a){window.sweethome_noRefresh=!0,window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+a,Object(t.a)(document.getElementById("root"),0)}},mounted:function(){Object(t.a)(document.getElementById("root"),0)}};c(166);i.render=function(a){return a("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-6ac29f39":""},[a("ul",{"data-quickpaper-6ac29f39":""},[a("li",{"data-quickpaper-6ac29f39":""},[a("span",{"@click":'doScroll("basic")',"data-quickpaper-6ac29f39":""},["说明"])]),a("li",{"data-quickpaper-6ac29f39":""},[a("span",{"@click":'doScroll("about")',"data-quickpaper-6ac29f39":""},["相关技术"]),a("ul",{"data-quickpaper-6ac29f39":""},[a("li",{"data-quickpaper-6ac29f39":""},[a("span",{"@click":'doScroll("about-registry")',"data-quickpaper-6ac29f39":""},["修改镜像"])])])])]),a("div",{class:"doc-view","data-quickpaper-6ac29f39":""},[a("h2",{"data-quickpaper-6ac29f39":""},["NPM:Nodejs下的包管理器"]),a("h3",{id:"fixed-basic","data-quickpaper-6ac29f39":""},["说明"]),a("p",{"data-quickpaper-6ac29f39":""},["当我们安装了Nodejs以后，npm工具就已经自动安装好了，如果后续希望主动升级版本，直接运行："]),a("pre",{"q-code":"","data-quickpaper-6ac29f39":""},["npm install npm -g"]),a("p",{"data-quickpaper-6ac29f39":""},["下面，我们来举例子，比如我们希望使用",a("span",{class:"warn","data-quickpaper-6ac29f39":""},["@hai2007/nodejs"]),"这个包："]),a("pre",{"q-code":"","data-quickpaper-6ac29f39":""},["npm install @hai2007/nodejs"]),a("p",{"data-quickpaper-6ac29f39":""},["安装好了以后，就可以直接在项目中使用了："]),a("pre",{"q-code":"","data-quickpaper-6ac29f39":""},["// index.js↵var nodejs = require('@hai2007/nodejs');↵nodejs.error('这是一个错误信息！');"]),a("p",{"data-quickpaper-6ac29f39":""},["所有可用的包，你可以",a("a",{href:"https://www.npmjs.com/",target:"_blank",class:"link","data-quickpaper-6ac29f39":""},["点击此处"]),"进行搜索。"]),a("h3",{id:"fixed-about","data-quickpaper-6ac29f39":""},["相关技术"]),a("h4",{id:"fixed-about-registry","data-quickpaper-6ac29f39":""},["修改镜像"]),a("p",{"data-quickpaper-6ac29f39":""},["由于npm的镜像地址是在国外，有时候为了安装的时候更快，我们会选择国内的淘宝镜像："]),a("pre",{"q-code":"","data-quickpaper-6ac29f39":""},["npm config set registry https://registry.npm.taobao.org"]),a("p",{class:"warn","data-quickpaper-6ac29f39":""},["何为镜像？简单的理解就是：你执行npm install的时候，请求数据的服务器地址。"]),a("p",{"data-quickpaper-6ac29f39":""},["更多的命令你可以",a("a",{href:"#/notebook_npm_terminal",target:"_blank",class:"link","data-quickpaper-6ac29f39":""},["点击此处"]),"进行查阅。"])])])};e.default=i},47:function(a,e,c){"use strict";var t=[],i=null,r=c(0),n=c.n(r);e.a=function(a,e){e=e||0,a=a||document.documentElement;var c=n.a.urlFormat(window.location.href).params.fixed;if(c){var r=document.getElementById("fixed-"+c);if(r){var p=r.offsetTop-e,o=a.scrollTop||0;!function(a,e,c){arguments.length<2&&(e=400);var r={timer:function(a,e,c){if(!a)throw new Error("Tick is required!");var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return t.push({id:i,createTime:new Date,tick:a,duration:e,callback:c}),r.start(),i},start:function(){i||(i=setInterval(r.tick,13))},tick:function(){var a,e,c,i,n,p,o,d=t;for((t=[]).length=0,e=0;e<d.length;e++)a=(n=d[e]).createTime,c=n.tick,p=n.duration,i=n.callback,!1,(o=(+new Date-a)/p)>=1&&!0,c(o=o>1?1:o),o<1&&n.id?t.push(n):i&&i(o);t.length<=0&&r.stop()},stop:function(){i&&(clearInterval(i),i=null)}},n=r.timer((function(e){a(e)}),e,c)}((function(e){a.scrollTop=(p-o)*e+o}),500,(function(){a.scrollTop=p}))}}else a.scrollTop=0}}}]);