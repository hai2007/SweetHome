(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{106:function(a,e,t){var i=t(107);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,t(1).default)("data-quickpaper-01d06391",i,!0)},107:function(a,e,t){(a.exports=t(0)(!1)).push([a.i,"",""])},118:function(a,e,t){"use strict";t.r(e);var i=t(20),r={methods:{doScroll:function(a){window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+a,Object(i.a)(document.getElementById("root"),0)}},mounted:function(){Object(i.a)(document.getElementById("root"),0)}};t(106);r.render=function(a){return a("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-01d06391":""},[a("ul",{"data-quickpaper-01d06391":""},[a("li",{"data-quickpaper-01d06391":""},[a("span",{"@click":'doScroll("guider")',"data-quickpaper-01d06391":""},["CSS简介"])]),a("li",{"data-quickpaper-01d06391":""},[a("span",{"@click":'doScroll("selector")',"data-quickpaper-01d06391":""},["选择器"]),a("ul",{"data-quickpaper-01d06391":""},[a("li",{"data-quickpaper-01d06391":""},[a("span",{"@click":'doScroll("selector-grammar")',"data-quickpaper-01d06391":""},["基本写法"])]),a("li",{"data-quickpaper-01d06391":""},[a("span",{"@click":'doScroll("selector-priority")',"data-quickpaper-01d06391":""},["如何判定优先级？"])])])]),a("li",{"data-quickpaper-01d06391":""},[a("span",{"@click":'doScroll("attribute")',"data-quickpaper-01d06391":""},["样式属性举例"])])]),a("div",{class:"doc-view","data-quickpaper-01d06391":""},[a("h2",{"data-quickpaper-01d06391":""},["CSS:层叠样式表"]),a("p",{"data-quickpaper-01d06391":""},["与其说CSS是一门编程语言，不如说CSS是一门配置语言，通过配置的方式来控制页面内容应该长什么样子。不过，这并不意味着这是一门很容易的语言，相反，配置项之间存在的相互影响恰恰导致了上手容易却很难真正掌握的窘境。"]),a("p",{"data-quickpaper-01d06391":""},["幸运的是，也恰恰是这一层微妙的关系，或许可以为你理解什么是编程语言带来不一样的思考。"]),a("h3",{id:"fixed-guider","data-quickpaper-01d06391":""},["CSS简介"]),a("p",{"data-quickpaper-01d06391":""},[]),a("h3",{id:"fixed-selector","data-quickpaper-01d06391":""},["选择器"]),a("p",{"data-quickpaper-01d06391":""},[]),a("h4",{id:"fixed-selector-grammar","data-quickpaper-01d06391":""},["基本写法"]),a("p",{"data-quickpaper-01d06391":""},[]),a("h4",{id:"fixed-selector-priority","data-quickpaper-01d06391":""},["如何判定优先级？"]),a("p",{"data-quickpaper-01d06391":""},[]),a("h3",{id:"fixed-attribute","data-quickpaper-01d06391":""},["样式属性举例"]),a("p",{"data-quickpaper-01d06391":""},[])])])};e.default=r},20:function(a,e,t){"use strict";var i=[],r=null,d=t(2),c=t.n(d);e.a=function(a,e){e=e||0,a=a||document.documentElement;var t=c.a.urlFormat(window.location.href).params.fixed;if(t){var d=document.getElementById("fixed-"+t);if(d){var p=d.offsetTop-e,o=a.scrollTop||0;!function(a,e,t){arguments.length<2&&(e=400);var d={timer:function(a,e,t){if(!a)throw new Error("Tick is required!");var r=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return i.push({id:r,createTime:new Date,tick:a,duration:e,callback:t}),d.start(),r},start:function(){r||(r=setInterval(d.tick,13))},tick:function(){var a,e,t,r,c,p,o,n=i;for((i=[]).length=0,e=0;e<n.length;e++)a=(c=n[e]).createTime,t=c.tick,p=c.duration,r=c.callback,!1,(o=(+new Date-a)/p)>=1&&!0,t(o=o>1?1:o),o<1&&c.id?i.push(c):r&&r(o);i.length<=0&&d.stop()},stop:function(){r&&(clearInterval(r),r=null)}},c=d.timer((function(e){a(e)}),e,t)}((function(e){a.scrollTop=(p-o)*e+o}),500,(function(){a.scrollTop=p}))}}else a.scrollTop=0}}}]);