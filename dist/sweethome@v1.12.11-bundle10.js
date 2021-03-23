(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{129:function(a,e,t){"use strict";t.r(e);var r=t(20),i={mounted:function(){this.changeActive("menu-2","plug"),Object(r.a)(document.getElementById("root"),44)}};t(82);i.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-6d3af3f3":""},[a("h2",{id:"fixed-top","data-quickpaper-6d3af3f3":""},["三、插件的作用和一些技巧"]),a("p",{"data-quickpaper-6d3af3f3":""},["我们这里来解释一下，一个.paper文件拆分以后，如何让对应的loader来进行解析。"]),a("h3",{id:"fixed-time","data-quickpaper-6d3af3f3":""},["插件的执行时机"]),a("p",{"data-quickpaper-6d3af3f3":""},["首先需要理解，什么是插件？"]),a("p",{"data-quickpaper-6d3af3f3":""},["你可以这样理解：如果说loader帮助webpack获得解析更多类型文件，那插件就是一个打杂工，前者有专门的分工，后者是在特殊情况下帮助，而不是针对某个文件。"]),a("p",{"data-quickpaper-6d3af3f3":""},["比如你可以在每次打包前调用一个查看删除上次打包的结果，或者在打包失败的时候重置一些参数，或者是别的一些操作等。"]),a("h3",{id:"fixed-how","data-quickpaper-6d3af3f3":""},["如何实现？"]),a("p",{"data-quickpaper-6d3af3f3":""},["那么，我们这里需要插件干什么？"]),a("p",{"data-quickpaper-6d3af3f3":""},["别忘了我们的需求是（拿css举例子），如果遇到："]),a("pre",{"q-code":"","data-quickpaper-6d3af3f3":""},["import './${filename}?QuickPaper&type=style&lang=css&hash=${id}&';"]),a("p",{"data-quickpaper-6d3af3f3":""},["这样的导入语句，我们工具lang=css发现是一个样式文件，应该交给专门解析css的loader处理，当然，我们可以主动修改webpack的配置："]),a("pre",{"q-code":"","data-quickpaper-6d3af3f3":""},["{↵    test: /type=style&lang=css/,↵    loader: ['quick-paper/style-loader/index.js', 'css-loader', 'postcss-loader']↵}"]),a("p",{"data-quickpaper-6d3af3f3":""},["可是，为了更简单，我们可以通过插件，在每次打包前对loader配置进行修改（当然，也包括js等相关项），如此，便实现了。"])])};e.default=i},20:function(a,e,t){"use strict";var r=[],i=null,c=t(2),p=t.n(c);e.a=function(a,e){e=e||0,a=a||document.documentElement;var t=p.a.urlFormat(window.location.href).params.fixed;if(t){var c=document.getElementById("fixed-"+t);if(c){var d=c.offsetTop-e,n=a.scrollTop||0;!function(a,e,t){arguments.length<2&&(e=400);var c={timer:function(a,e,t){if(!a)throw new Error("Tick is required!");var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return r.push({id:i,createTime:new Date,tick:a,duration:e,callback:t}),c.start(),i},start:function(){i||(i=setInterval(c.tick,13))},tick:function(){var a,e,t,i,p,d,n,o=r;for((r=[]).length=0,e=0;e<o.length;e++)a=(p=o[e]).createTime,t=p.tick,d=p.duration,i=p.callback,!1,(n=(+new Date-a)/d)>=1&&!0,t(n=n>1?1:n),n<1&&p.id?r.push(p):i&&i(n);r.length<=0&&c.stop()},stop:function(){i&&(clearInterval(i),i=null)}},p=c.timer((function(e){a(e)}),e,t)}((function(e){a.scrollTop=(d-n)*e+n}),500,(function(){a.scrollTop=d}))}}else a.scrollTop=0}},82:function(a,e,t){var r=t(83);"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);(0,t(1).default)("data-quickpaper-6d3af3f3",r,!0)},83:function(a,e,t){(a.exports=t(0)(!1)).push([a.i,"",""])}}]);