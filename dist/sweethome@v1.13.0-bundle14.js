(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{149:function(a,e,t){"use strict";t.r(e);var o=t(32),p={mounted:function(){this.changeActive("menu-2","vue2"),Object(o.a)(document.getElementById("root"),44)}};t(92);p.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-72a54f00":""},[a("h2",{id:"fixed-top","data-quickpaper-72a54f00":""},["二、Vue2"]),a("h3",{id:"fixed-components","data-quickpaper-72a54f00":""},["动态组件"]),a("p",{"data-quickpaper-72a54f00":""},["有时候我们可能需要动态确定一个地方使用哪个组件，比如根据返回的数据确定当前是下拉还是日历组件，那就可以借助这个组件："]),a("pre",{"q-code":"","data-quickpaper-72a54f00":""},['<component v-bind:is="yourComp"></component>']),a("p",{"data-quickpaper-72a54f00":""},["yourComp是什么？就是一个vue组件。我们来说明一种特殊情况。"]),a("pre",{"q-code":"","data-quickpaper-72a54f00":""},["export default {↵    template:'字符串模板'↵}"]),a("p",{"data-quickpaper-72a54f00":""},["上面的内容是写在我们自定义的组件yourComp.js中的，如何导入使用："]),a("pre",{"q-code":"","data-quickpaper-72a54f00":""},['import yourComp from "./yourComp";']),a("p",{"data-quickpaper-72a54f00":""},["像上面那样导入即可被一开始演示的component使用了。可是这样好像也没有什么特别的？"]),a("p",{"data-quickpaper-72a54f00":""},["那我们把yourComp.js文件稍微改造一下："]),a("pre",{"q-code":"","data-quickpaper-72a54f00":""},["export default function (templateData) {↵    return {↵        template: '根据templateData拼接的字符串模板'↵    };↵};"]),a("p",{"data-quickpaper-72a54f00":""},["同样，我们导入后也需要多添加一步进行处理："]),a("pre",{"q-code":"","data-quickpaper-72a54f00":""},['import yourCompFactory from "./yourComp";↵// 第二句可以在任意一个地方执行，包括请求回调中↵yourComp=yourCompFactory(templateData);']),a("p",{"data-quickpaper-72a54f00":""},["看出来了吗？改造以后，我们就可以根据实际需要，动态调整生成的组件。"]),a("h3",{id:"fixed-nosync","data-quickpaper-72a54f00":""},["视图和model数据不同步问题"]),a("p",{"data-quickpaper-72a54f00":""},["有时候在指令里面通过jquery修改了input的数据，不过Vue并不会知道，这时候，你可以通过触发输入框input事件，让Vue发现数据改变了："]),a("pre",{"q-code":"","data-quickpaper-72a54f00":""},['$("input").trigger("input");'])])};e.default=p},32:function(a,e,t){"use strict";var o=[],p=null,r=t(0),i=t.n(r);e.a=function(a,e){e=e||0,a=a||document.documentElement;var t=i.a.urlFormat(window.location.href).params.fixed;if(t){var r=document.getElementById("fixed-"+t);if(r){var n=r.offsetTop-e,u=a.scrollTop||0;!function(a,e,t){arguments.length<2&&(e=400);var r={timer:function(a,e,t){if(!a)throw new Error("Tick is required!");var p=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return o.push({id:p,createTime:new Date,tick:a,duration:e,callback:t}),r.start(),p},start:function(){p||(p=setInterval(r.tick,13))},tick:function(){var a,e,t,p,i,n,u,c=o;for((o=[]).length=0,e=0;e<c.length;e++)a=(i=c[e]).createTime,t=i.tick,n=i.duration,p=i.callback,!1,(u=(+new Date-a)/n)>=1&&!0,t(u=u>1?1:u),u<1&&i.id?o.push(i):p&&p(u);o.length<=0&&r.stop()},stop:function(){p&&(clearInterval(p),p=null)}},i=r.timer((function(e){a(e)}),e,t)}((function(e){a.scrollTop=(n-u)*e+u}),500,(function(){a.scrollTop=n}))}}else a.scrollTop=0}},92:function(a,e,t){var o=t(93);"string"==typeof o&&(o=[[a.i,o,""]]),o.locals&&(a.exports=o.locals);(0,t(2).default)("data-quickpaper-72a54f00",o,!0)},93:function(a,e,t){(a.exports=t(1)(!1)).push([a.i,"",""])}}]);