(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{154:function(e,a,t){var i=t(155);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);(0,t(2).default)("data-quickpaper-288f830e",i,!0)},155:function(e,a,t){(e.exports=t(1)(!1)).push([e.i,"",""])},174:function(e,a,t){"use strict";t.r(a);var i=t(41),r={methods:{doScroll:function(e){window.sweethome_noRefresh=!0,window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+e,Object(i.a)(document.getElementById("root"),0)}},mounted:function(){Object(i.a)(document.getElementById("root"),0)}};t(154);r.render=function(e){return e("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-288f830e":""},[e("ul",{"data-quickpaper-288f830e":""},[e("li",{"data-quickpaper-288f830e":""},[e("span",{"@click":'doScroll("basic")',"data-quickpaper-288f830e":""},["说明"])]),e("li",{"data-quickpaper-288f830e":""},[e("span",{"@click":'doScroll("about")',"data-quickpaper-288f830e":""},["相关技术"]),e("ul",{"data-quickpaper-288f830e":""},[e("li",{"data-quickpaper-288f830e":""},[e("span",{"@click":'doScroll("about-registry")',"data-quickpaper-288f830e":""},["修改镜像"])])])])]),e("div",{class:"doc-view","data-quickpaper-288f830e":""},[e("h2",{"data-quickpaper-288f830e":""},["NPM:Nodejs下的包管理器"]),e("h3",{id:"fixed-basic","data-quickpaper-288f830e":""},["说明"]),e("p",{"data-quickpaper-288f830e":""},["当我们安装了Nodejs以后，npm工具就已经自动安装好了，如果后续希望主动升级版本，直接运行："]),e("pre",{"q-code":"","data-quickpaper-288f830e":""},["npm install npm -g"]),e("p",{"data-quickpaper-288f830e":""},["下面，我们来举例子，比如我们希望使用",e("span",{class:"warn","data-quickpaper-288f830e":""},["@hai2007/nodejs"]),"这个包："]),e("pre",{"q-code":"","data-quickpaper-288f830e":""},["npm install @hai2007/nodejs"]),e("p",{"data-quickpaper-288f830e":""},["安装好了以后，就可以直接在项目中使用了："]),e("pre",{"q-code":"","data-quickpaper-288f830e":""},["// index.js↵var nodejs = require('@hai2007/nodejs');↵nodejs.error('这是一个错误信息！');"]),e("p",{"data-quickpaper-288f830e":""},["所有可用的包，你可以",e("a",{href:"https://www.npmjs.com/",target:"_blank",class:"link","data-quickpaper-288f830e":""},["点击此处"]),"进行搜索。"]),e("h3",{id:"fixed-about","data-quickpaper-288f830e":""},["相关技术"]),e("h4",{id:"fixed-about-registry","data-quickpaper-288f830e":""},["修改镜像"]),e("p",{"data-quickpaper-288f830e":""},["由于npm的镜像地址是在国外，有时候为了安装的时候更快，我们会选择国内的淘宝镜像："]),e("pre",{"q-code":"","data-quickpaper-288f830e":""},["npm config set registry https://registry.npm.taobao.org"]),e("p",{class:"warn","data-quickpaper-288f830e":""},["何为镜像？简单的理解就是：你执行npm install的时候，请求数据的服务器地址。"]),e("p",{"data-quickpaper-288f830e":""},["更多的命令你可以",e("a",{href:"#/notebook_npm_terminal",target:"_blank",class:"link","data-quickpaper-288f830e":""},["点击此处"]),"进行查阅。"])])])};a.default=r},41:function(e,a,t){"use strict";var i=[],r=null,n=t(0),p=t.n(n);a.a=function(e,a){a=a||0,e=e||document.documentElement;var t=p.a.urlFormat(window.location.href).params.fixed;if(t){var n=document.getElementById("fixed-"+t);if(n){var c=n.offsetTop-a,o=e.scrollTop||0;!function(e,a,t){arguments.length<2&&(a=400);var n={timer:function(e,a,t){if(!e)throw new Error("Tick is required!");var r=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return i.push({id:r,createTime:new Date,tick:e,duration:a,callback:t}),n.start(),r},start:function(){r||(r=setInterval(n.tick,13))},tick:function(){var e,a,t,r,p,c,o,d=i;for((i=[]).length=0,a=0;a<d.length;a++)e=(p=d[a]).createTime,t=p.tick,c=p.duration,r=p.callback,!1,(o=(+new Date-e)/c)>=1&&!0,t(o=o>1?1:o),o<1&&p.id?i.push(p):r&&r(o);i.length<=0&&n.stop()},stop:function(){r&&(clearInterval(r),r=null)}},p=n.timer((function(a){e(a)}),a,t)}((function(a){e.scrollTop=(c-o)*a+o}),500,(function(){e.scrollTop=c}))}}else e.scrollTop=0}}}]);