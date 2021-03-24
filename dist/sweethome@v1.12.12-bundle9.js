(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{132:function(a,e,p){"use strict";p.r(e);var r=p(20),t={mounted:function(){this.changeActive("menu-2","loader"),Object(r.a)(document.getElementById("root"),44)}};p(83);t.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-349002f8":""},[a("h2",{id:"fixed-top","data-quickpaper-349002f8":""},["二、Loader和执行顺序"]),a("p",{"data-quickpaper-349002f8":""},["对于我们用于学习的项目",a("a",{href:"https://github.com/hai2007/quick-paper",target:"_blank",class:"link","data-quickpaper-349002f8":""},["Quick Paper"]),"而言，我们是把代码整合到文件.paper中去，文件结构大致如下："]),a("pre",{"q-code":"html","data-quickpaper-349002f8":""},["<template>↵    \x3c!-- 页面的元素在这里 --\x3e↵</template>↵<script>↵    // 逻辑控制代码在这里↵    export default {↵↵    };↵<\/script>↵<style>↵    /* 在这里编辑样式代码 */↵</style>"]),a("p",{"data-quickpaper-349002f8":""},["你想，我们使用webpack打包项目的时候，他是不可能认识.paper文件的，当然就无法知道如何解析上面这份文件了，而开发一个loader用以解析上面的文件，就是这里要说明的。"]),a("h3",{id:"fixed-loader","data-quickpaper-349002f8":""},["loader"]),a("p",{"data-quickpaper-349002f8":""},["在说明loader之前，我们先要看看我们编辑的.paper是如何被我们使用的。因为如何使用就决定了我们需要如何解析。"]),a("p",{"data-quickpaper-349002f8":""},["和vue类似，先假设我们有一个App.paper文件："]),a("pre",{"q-code":"","data-quickpaper-349002f8":""},["import App from './App.paper';↵new QuickPaper({↵    render:createElement => createElement(App),↵    // ...↵});"]),a("p",{"data-quickpaper-349002f8":""},["因为render里面只记录了",a("span",{class:"warn","data-quickpaper-349002f8":""},["页面内容"]),"，可是.paper文件里面可是记录了",a("span",{class:"warn","data-quickpaper-349002f8":""},["页面内容"]),"+",a("span",{class:"warn","data-quickpaper-349002f8":""},["逻辑控制"]),"+",a("span",{class:"warn","data-quickpaper-349002f8":""},["页面样式"]),"的。其余的内容怎么办？"]),a("pre",{"q-code":"","data-quickpaper-349002f8":""},["// 导入js [逻辑控制]↵import script from './${filename}?QuickPaper&type=script&lang=js&hash=${id}&';↵↵// 导入css [页面样式]↵import './${filename}?QuickPaper&type=style&lang=css&hash=${id}&';↵↵script.render=${code};↵↵// [页面内容]↵export default script;"]),a("p",{"data-quickpaper-349002f8":""},["可以看出来，",a("span",{class:"warn","data-quickpaper-349002f8":""},["页面内容"]),"直接默认导出后给render配置项即可，别的内容因为新增了导入语句，会触发对应的loader进行解析，也就是说，这里其实可以分为两步："]),a("ul",{"data-quickpaper-349002f8":""},[a("li",{"data-quickpaper-349002f8":""},["第一步：对于未考虑到的内容执行新的导入语句，触发对应的loader解析"]),a("li",{"data-quickpaper-349002f8":""},["第二步：导出render需要的内容"])]),a("h3",{id:"fixed-style-loader","data-quickpaper-349002f8":""},["style-loader"]),a("p",{"data-quickpaper-349002f8":""},["比如",a("span",{class:"warn","data-quickpaper-349002f8":""},["页面样式"]),"部分的导入语句："]),a("pre",{"q-code":"","data-quickpaper-349002f8":""},["import './${filename}?QuickPaper&type=style&lang=css&hash=${id}&';"]),a("p",{"data-quickpaper-349002f8":""},["我们是如何让webpack知道这是一个样式文件，并且是使用css还是scss或别的loader来解析的，这属于插件需要说明的部分。在此之前，我们还需要先说明一下样式loader的工作原理。"]),a("h4",{id:"fixed-style-loader-why","data-quickpaper-349002f8":""},["为什么样式loader比较特殊？"]),a("p",{"data-quickpaper-349002f8":""},["根据返回值类型，可以把loader分成两种：一种是返回js代码（也就是一个模块的代码，有类似module.export语句）的loader，一个是不能作为最左边loader的其他loader(比如返回一个CSS字符串)。"]),a("p",{"data-quickpaper-349002f8":""},["我们来看看我们webpack里面是如何配置css的loader的："]),a("pre",{"q-code":"","data-quickpaper-349002f8":""},["{↵    test: /\\.css$/,↵    loader: ['quick-paper/style-loader/index.js', 'css-loader', 'postcss-loader']↵}"]),a("p",{"data-quickpaper-349002f8":""},["这里的重点是css-loader，他属于第一种，返回js代码的loader，对于我们自定义的",a("span",{class:"important","data-quickpaper-349002f8":""},["'quick-paper/style-loader/index.js'"]),"而言，如果让loader按照从右往左的顺序执行，很难拿到真正的css代码。"]),a("h4",{id:"fixed-style-loader-picth","data-quickpaper-349002f8":""},["执行顺序（loader和picth）"]),a("p",{"data-quickpaper-349002f8":""},["在说明如何解决上个问题前，我们需要先说明一下loader的picth和执行顺序。"]),a("p",{"data-quickpaper-349002f8":""},["比如上面配置的三个loader而言，执行顺序分为Pitch阶段和Normal阶段（可以理解为loader本身的行为）："]),a("ul",{"data-quickpaper-349002f8":""},[a("li",{"data-quickpaper-349002f8":""},[a("span",{class:"important","data-quickpaper-349002f8":""},["Pitch阶段"]),"：",a("span",{class:"block","data-quickpaper-349002f8":""},["'quick-paper/style-loader/index.js'"]),"->",a("span",{class:"block","data-quickpaper-349002f8":""},["'css-loader'"]),"->",a("span",{class:"block","data-quickpaper-349002f8":""},["'postcss-loader'"])]),a("li",{"data-quickpaper-349002f8":""},[a("span",{class:"important","data-quickpaper-349002f8":""},["Normal阶段"]),"：",a("span",{class:"block","data-quickpaper-349002f8":""},["'postcss-loader'"]),"->",a("span",{class:"block","data-quickpaper-349002f8":""},["'css-loader'"]),"->",a("span",{class:"block","data-quickpaper-349002f8":""},["'quick-paper/style-loader/index.js'"])])]),a("p",{"data-quickpaper-349002f8":""},["有一个特点是，在",a("span",{class:"important","data-quickpaper-349002f8":""},["Pitch阶段"]),"，如果某个loader有返回值，就会停止后续执行。"]),a("p",{class:"warn","data-quickpaper-349002f8":""},["温馨提示：停止执行的意思是，在其右边的loader，包括自己都执行完毕了（Pitch阶段和Normal阶段都结束了），返回的值会返回给前一个loader(Normal阶段)！"]),a("h4",{id:"fixed-style-loader-how","data-quickpaper-349002f8":""},["如何实现？"]),a("p",{"data-quickpaper-349002f8":""},["这里，我们就可以借助给",a("span",{class:"important","data-quickpaper-349002f8":""},["'quick-paper/style-loader/index.js'"]),"设置一个有返回值的Pitch来实现。"]),a("p",{"data-quickpaper-349002f8":""},["看看代码结构："]),a("pre",{"q-code":"","data-quickpaper-349002f8":""},["// quick-paper/style-loader/index.js↵↵const loaderApi = () => { };↵loaderApi.pitch = function (remainingRequest) {↵↵    // request = \"\"!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/in...↵    let request = loaderUtils.stringifyRequest(this, '!!' + remainingRequest)↵↵    return `↵↵        // 获取真正的css内容↵        var content = require(' + request + ');↵        // 然后调用方法添加到页面中生效↵        require('./addStylesClient.js')(content);↵    `;↵};↵module.exports = loaderApi;"]),a("p",{"data-quickpaper-349002f8":""},["我们在",a("span",{class:"important","data-quickpaper-349002f8":""},["'quick-paper/style-loader/index.js'"]),"中定义了Picth方法，在此方法里面，返回了一个js字符串，项目运行的时候会运行这段字符串，这段字符串的意义就是调用样式loader获取真正的css后，运行",a("span",{class:"warn","data-quickpaper-349002f8":""},["addStylesClient.js"]),"方法使得在页面生效。"]),a("p",{class:"warn","data-quickpaper-349002f8":""},["温馨提示：关于addStylesClient.js方法请直接查看项目源码，很容易读懂，给样式添加hash值让scope生效，就是这个方法里。"])])};e.default=t},20:function(a,e,p){"use strict";var r=[],t=null,c=p(2),i=p.n(c);e.a=function(a,e){e=e||0,a=a||document.documentElement;var p=i.a.urlFormat(window.location.href).params.fixed;if(p){var c=document.getElementById("fixed-"+p);if(c){var s=c.offsetTop-e,d=a.scrollTop||0;!function(a,e,p){arguments.length<2&&(e=400);var c={timer:function(a,e,p){if(!a)throw new Error("Tick is required!");var t=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return r.push({id:t,createTime:new Date,tick:a,duration:e,callback:p}),c.start(),t},start:function(){t||(t=setInterval(c.tick,13))},tick:function(){var a,e,p,t,i,s,d,l=r;for((r=[]).length=0,e=0;e<l.length;e++)a=(i=l[e]).createTime,p=i.tick,s=i.duration,t=i.callback,!1,(d=(+new Date-a)/s)>=1&&!0,p(d=d>1?1:d),d<1&&i.id?r.push(i):t&&t(d);r.length<=0&&c.stop()},stop:function(){t&&(clearInterval(t),t=null)}},i=c.timer((function(e){a(e)}),e,p)}((function(e){a.scrollTop=(s-d)*e+d}),500,(function(){a.scrollTop=s}))}}else a.scrollTop=0}},83:function(a,e,p){var r=p(84);"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);(0,p(1).default)("data-quickpaper-349002f8",r,!0)},84:function(a,e,p){(a.exports=p(0)(!1)).push([a.i,"\n    .block {\n        background-color: cadetblue;\n        color: white;\n        padding: 0 10px;\n        margin: 0 10px;\n    }\n",""])}}]);