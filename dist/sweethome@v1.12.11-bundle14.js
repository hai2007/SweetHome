(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{104:function(a,e,t){var i=t(105);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,t(1).default)("data-quickpaper-fad0444e",i,!0)},105:function(a,e,t){(a.exports=t(0)(!1)).push([a.i,"",""])},117:function(a,e,t){"use strict";t.r(e);var i=t(20),n={methods:{doScroll:function(a){window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+a,Object(i.a)(document.getElementById("root"),0)}},mounted:function(){Object(i.a)(document.getElementById("root"),0)}};t(104);n.render=function(a){return a("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-fad0444e":""},[a("ul",{"data-quickpaper-fad0444e":""},[a("li",{"data-quickpaper-fad0444e":""},[a("span",{"@click":'doScroll("frame")',"data-quickpaper-fad0444e":""},["页面结构"])]),a("li",{"data-quickpaper-fad0444e":""},[a("span",{"@click":'doScroll("label")',"data-quickpaper-fad0444e":""},["标签分类和说明"])])]),a("div",{class:"doc-view","data-quickpaper-fad0444e":""},[a("h2",{"data-quickpaper-fad0444e":""},["HTML:超文本标记语言"]),a("p",{"data-quickpaper-fad0444e":""},[]),a("h3",{id:"fixed-frame","data-quickpaper-fad0444e":""},["页面结构"]),a("p",{"data-quickpaper-fad0444e":""},[]),a("h3",{id:"fixed-label","data-quickpaper-fad0444e":""},["标签分类和说明"]),a("p",{"data-quickpaper-fad0444e":""},[])])])};e.default=n},20:function(a,e,t){"use strict";var i=[],n=null,c=t(2),r=t.n(c);e.a=function(a,e){e=e||0,a=a||document.documentElement;var t=r.a.urlFormat(window.location.href).params.fixed;if(t){var c=document.getElementById("fixed-"+t);if(c){var o=c.offsetTop-e,d=a.scrollTop||0;!function(a,e,t){arguments.length<2&&(e=400);var c={timer:function(a,e,t){if(!a)throw new Error("Tick is required!");var n=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return i.push({id:n,createTime:new Date,tick:a,duration:e,callback:t}),c.start(),n},start:function(){n||(n=setInterval(c.tick,13))},tick:function(){var a,e,t,n,r,o,d,l=i;for((i=[]).length=0,e=0;e<l.length;e++)a=(r=l[e]).createTime,t=r.tick,o=r.duration,n=r.callback,!1,(d=(+new Date-a)/o)>=1&&!0,t(d=d>1?1:d),d<1&&r.id?i.push(r):n&&n(d);i.length<=0&&c.stop()},stop:function(){n&&(clearInterval(n),n=null)}},r=c.timer((function(e){a(e)}),e,t)}((function(e){a.scrollTop=(o-d)*e+d}),500,(function(){a.scrollTop=o}))}}else a.scrollTop=0}}}]);