(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{132:function(e,a,t){var c=t(133);"string"==typeof c&&(c=[[e.i,c,""]]),c.locals&&(e.exports=c.locals);(0,t(2).default)("data-quickpaper-38351c50",c,!0)},133:function(e,a,t){(e.exports=t(1)(!1)).push([e.i,"",""])},137:function(e,a,t){"use strict";t.r(a);var c=t(33),r={methods:{doScroll:function(e){window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+e,Object(c.a)(document.getElementById("root"),0)}},mounted:function(){Object(c.a)(document.getElementById("root"),0)}};t(132);r.render=function(e){return e("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-38351c50":""},[e("ul",{"data-quickpaper-38351c50":""},[e("li",{"data-quickpaper-38351c50":""},[e("span",{"@click":'doScroll("html-to-dom")',"data-quickpaper-38351c50":""},["从HTML到DOM树"])]),e("li",{"data-quickpaper-38351c50":""},[e("span",{"@click":'doScroll("dom-tree")',"data-quickpaper-38351c50":""},["访问DOM树"]),e("ul",{"data-quickpaper-38351c50":""},[e("li",{"data-quickpaper-38351c50":""},[e("span",{"@click":'doScroll("dom-tree-search")',"data-quickpaper-38351c50":""},["查找结点"])]),e("li",{"data-quickpaper-38351c50":""},[e("span",{"@click":'doScroll("dom-tree-attr")',"data-quickpaper-38351c50":""},["结点属性和样式"])])])])]),e("div",{class:"doc-view","data-quickpaper-38351c50":""},[e("h2",{"data-quickpaper-38351c50":""},["HTML DOM:定义了访问和操作HTML文档的方法"]),e("h3",{id:"fixed-html-to-dom","data-quickpaper-38351c50":""},["从HTML到DOM树"]),e("p",{"data-quickpaper-38351c50":""},["简单的理解，文档对象模型（DOM）是一个用于访问你写的页面中的HTML元素的一个模型对象，上面提供了很多方法，借助这些方法，你可以很容易的使用js操作页面（比如修改样式，添加或删除结点等）。"]),e("h3",{id:"fixed-dom-tree","data-quickpaper-38351c50":""},["访问DOM树"]),e("h4",{id:"fixed-dom-tree-search","data-quickpaper-38351c50":""},["查找结点"]),e("p",{"data-quickpaper-38351c50":""},["返回带有指定 ID 的元素引用（如果ID有相同的，返回第一个查找到的），其中node可以是document或页面中任意结点："]),e("pre",{"q-code":"","data-quickpaper-38351c50":""},['node.getElementById("id");']),e("p",{"data-quickpaper-38351c50":""},["返回带有指定标签名的所有元素，其中node可以是document或页面中任意结点："]),e("pre",{"q-code":"","data-quickpaper-38351c50":""},['node.getElementsByTagName("tagname");']),e("p",{"data-quickpaper-38351c50":""},["返回所有name属性为指定值的所有元素："]),e("pre",{"q-code":"","data-quickpaper-38351c50":""},['document.getElementsByName("attrname");']),e("h4",{id:"fixed-dom-tree-attr","data-quickpaper-38351c50":""},["结点属性和样式"]),e("p",{"data-quickpaper-38351c50":""},["获取结点的样式："]),e("pre",{"q-code":"","data-quickpaper-38351c50":""},["var styleValue = node.style.styleName;"]),e("p",{"data-quickpaper-38351c50":""},["设置结点的样式："]),e("pre",{"q-code":"","data-quickpaper-38351c50":""},["node.style.styleName = styleValue;"]),e("p",{"data-quickpaper-38351c50":""},["获取结点指定属性的值："]),e("pre",{"q-code":"","data-quickpaper-38351c50":""},["var value = node.getAttribute(key);"]),e("p",{"data-quickpaper-38351c50":""},["设置结点指定属性的值："]),e("pre",{"q-code":"","data-quickpaper-38351c50":""},["node.setAttribute(key, value);"])])])};a.default=r},33:function(e,a,t){"use strict";var c=[],r=null,i=t(0),p=t.n(i);a.a=function(e,a){a=a||0,e=e||document.documentElement;var t=p.a.urlFormat(window.location.href).params.fixed;if(t){var i=document.getElementById("fixed-"+t);if(i){var d=i.offsetTop-a,o=e.scrollTop||0;!function(e,a,t){arguments.length<2&&(a=400);var i={timer:function(e,a,t){if(!e)throw new Error("Tick is required!");var r=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return c.push({id:r,createTime:new Date,tick:e,duration:a,callback:t}),i.start(),r},start:function(){r||(r=setInterval(i.tick,13))},tick:function(){var e,a,t,r,p,d,o,n=c;for((c=[]).length=0,a=0;a<n.length;a++)e=(p=n[a]).createTime,t=p.tick,d=p.duration,r=p.callback,!1,(o=(+new Date-e)/d)>=1&&!0,t(o=o>1?1:o),o<1&&p.id?c.push(p):r&&r(o);c.length<=0&&i.stop()},stop:function(){r&&(clearInterval(r),r=null)}},p=i.timer((function(a){e(a)}),a,t)}((function(a){e.scrollTop=(d-o)*a+o}),500,(function(){e.scrollTop=d}))}}else e.scrollTop=0}}}]);