(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{105:function(a,p,e){var r=e(106);"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);(0,e(2).default)("data-quickpaper-57f04478",r,!0)},106:function(a,p,e){(a.exports=e(1)(!1)).push([a.i,"",""])},140:function(a,p,e){"use strict";e.r(p);var r={};e(105);r.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-57f04478":""},[a("h2",{"data-quickpaper-57f04478":""},["关于webpack的loader和plug一些理解"]),a("p",{"data-quickpaper-57f04478":""},["为了更好的说明，我们开发了一个类似的简化版本的前端框架",a("a",{href:"https://github.com/hai2007/quick-paper",target:"_blank",class:"link","data-quickpaper-57f04478":""},["Quick Paper"]),"(",a("a",{href:"https://hai2007.gitee.io/quick-paper/",target:"_blank",class:"link",style:"padding:0;","data-quickpaper-57f04478":""},["文档"]),")↵        来帮助你理解一些细节。因此在开始之前，让我们先大致了解一下此项目的结构，方便后续描述。"]),a("h3",{"data-quickpaper-57f04478":""},["Loader和执行顺序"]),a("p",{"data-quickpaper-57f04478":""},["对于我们用于学习的项目",a("a",{href:"https://github.com/hai2007/quick-paper",target:"_blank",class:"link","data-quickpaper-57f04478":""},["Quick Paper"]),"而言，我们是把代码整合到文件.paper中去，文件结构大致如下："]),a("pre",{"q-code":"html","data-quickpaper-57f04478":""},["<template>↵    \x3c!-- 页面的元素在这里 --\x3e↵</template>↵<script>↵    // 逻辑控制代码在这里↵    export default {↵↵    };↵<\/script>↵<style>↵    /* 在这里编辑样式代码 */↵</style>"]),a("p",{"data-quickpaper-57f04478":""},["你想，我们使用webpack打包项目的时候，他是不可能认识.paper文件的，当然就无法知道如何解析上面这份文件了，而开发一个loader用以解析上面的文件，就是这里要说明的。"]),a("h4",{"data-quickpaper-57f04478":""},["loader"]),a("p",{"data-quickpaper-57f04478":""},["在说明loader之前，我们先要看看我们编辑的.paper是如何被我们使用的。因为如何使用就决定了我们需要如何解析。"]),a("p",{"data-quickpaper-57f04478":""},["和vue类似，先假设我们有一个App.paper文件："]),a("pre",{"q-code":"","data-quickpaper-57f04478":""},["import App from './App.paper';↵new QuickPaper({↵    render:createElement => createElement(App),↵    // ...↵});"]),a("p",{"data-quickpaper-57f04478":""},["因为render里面只记录了",a("span",{class:"warn","data-quickpaper-57f04478":""},["页面内容"]),"，可是.paper文件里面可是记录了",a("span",{class:"warn","data-quickpaper-57f04478":""},["页面内容"]),"+",a("span",{class:"warn","data-quickpaper-57f04478":""},["逻辑控制"]),"+",a("span",{class:"warn","data-quickpaper-57f04478":""},["页面样式"]),"的。其余的内容怎么办？"]),a("pre",{"q-code":"","data-quickpaper-57f04478":""},["// 导入js [逻辑控制]↵import script from './${filename}?QuickPaper&type=script&lang=js&hash=${id}&';↵↵// 导入css [页面样式]↵import './${filename}?QuickPaper&type=style&lang=css&hash=${id}&';↵↵script.render=${code};↵↵// [页面内容]↵export default script;"]),a("p",{"data-quickpaper-57f04478":""},["可以看出来，",a("span",{class:"warn","data-quickpaper-57f04478":""},["页面内容"]),"直接默认导出后给render配置项即可，别的内容因为新增了导入语句，会触发对应的loader进行解析，也就是说，这里其实可以分为两步："]),a("ul",{"data-quickpaper-57f04478":""},[a("li",{"data-quickpaper-57f04478":""},["第一步：对于未考虑到的内容执行新的导入语句，触发对应的loader解析"]),a("li",{"data-quickpaper-57f04478":""},["第二步：导出render需要的内容"])]),a("h4",{"data-quickpaper-57f04478":""},["style-loader"]),a("p",{"data-quickpaper-57f04478":""},["比如",a("span",{class:"warn","data-quickpaper-57f04478":""},["页面样式"]),"部分的导入语句："]),a("pre",{"q-code":"","data-quickpaper-57f04478":""},["import './${filename}?QuickPaper&type=style&lang=css&hash=${id}&';"]),a("p",{"data-quickpaper-57f04478":""},["我们是如何让webpack知道这是一个样式文件，并且是使用css还是scss或别的loader来解析的，这属于插件需要说明的部分。在此之前，我们还需要先说明一下样式loader的工作原理。"]),a("h5",{"data-quickpaper-57f04478":""},["为什么样式loader比较特殊？"]),a("p",{"data-quickpaper-57f04478":""},["根据返回值类型，可以把loader分成两种：一种是返回js代码（也就是一个模块的代码，有类似module.export语句）的loader，一个是不能作为最左边loader的其他loader(比如返回一个CSS字符串)。"]),a("p",{"data-quickpaper-57f04478":""},["我们来看看我们webpack里面是如何配置css的loader的："]),a("pre",{"q-code":"","data-quickpaper-57f04478":""},["{↵    test: /\\.css$/,↵    loader: ['quick-paper/style-loader/index.js', 'css-loader', 'postcss-loader']↵}"]),a("p",{"data-quickpaper-57f04478":""},["这里的重点是css-loader，他属于第一种，返回js代码的loader，对于我们自定义的",a("span",{class:"important","data-quickpaper-57f04478":""},["'quick-paper/style-loader/index.js'"]),"而言，如果让loader按照从右往左的顺序执行，很难拿到真正的css代码。"]),a("h5",{"data-quickpaper-57f04478":""},["执行顺序（loader和picth）"]),a("p",{"data-quickpaper-57f04478":""},["在说明如何解决上个问题前，我们需要先说明一下loader的picth和执行顺序。"]),a("p",{"data-quickpaper-57f04478":""},["比如上面配置的三个loader而言，执行顺序分为Pitch阶段和Normal阶段（可以理解为loader本身的行为）："]),a("ul",{"data-quickpaper-57f04478":""},[a("li",{"data-quickpaper-57f04478":""},[a("span",{class:"important","data-quickpaper-57f04478":""},["Pitch阶段"]),"：",a("span",{class:"block","data-quickpaper-57f04478":""},["'quick-paper/style-loader/index.js'"]),"->",a("span",{class:"block","data-quickpaper-57f04478":""},["'css-loader'"]),"->",a("span",{class:"block","data-quickpaper-57f04478":""},["'postcss-loader'"])]),a("li",{"data-quickpaper-57f04478":""},[a("span",{class:"important","data-quickpaper-57f04478":""},["Normal阶段"]),"：",a("span",{class:"block","data-quickpaper-57f04478":""},["'postcss-loader'"]),"->",a("span",{class:"block","data-quickpaper-57f04478":""},["'css-loader'"]),"->",a("span",{class:"block","data-quickpaper-57f04478":""},["'quick-paper/style-loader/index.js'"])])]),a("p",{"data-quickpaper-57f04478":""},["有一个特点是，在",a("span",{class:"important","data-quickpaper-57f04478":""},["Pitch阶段"]),"，如果某个loader有返回值，就会停止后续执行。"]),a("p",{class:"warn","data-quickpaper-57f04478":""},["温馨提示：停止执行的意思是，在其右边的loader，包括自己都执行完毕了（Pitch阶段和Normal阶段都结束了），返回的值会返回给前一个loader(Normal阶段)！"]),a("h5",{"data-quickpaper-57f04478":""},["如何实现？"]),a("p",{"data-quickpaper-57f04478":""},["这里，我们就可以借助给",a("span",{class:"important","data-quickpaper-57f04478":""},["'quick-paper/style-loader/index.js'"]),"设置一个有返回值的Pitch来实现。"]),a("p",{"data-quickpaper-57f04478":""},["看看代码结构："]),a("pre",{"q-code":"","data-quickpaper-57f04478":""},["// quick-paper/style-loader/index.js↵↵const loaderApi = () => { };↵loaderApi.pitch = function (remainingRequest) {↵↵    // request = \"\"!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/src/in...↵    let request = loaderUtils.stringifyRequest(this, '!!' + remainingRequest)↵↵    return `↵↵        // 获取真正的css内容↵        var content = require(' + request + ');↵        // 然后调用方法添加到页面中生效↵        require('./addStylesClient.js')(content);↵    `;↵};↵module.exports = loaderApi;"]),a("p",{"data-quickpaper-57f04478":""},["我们在",a("span",{class:"important","data-quickpaper-57f04478":""},["'quick-paper/style-loader/index.js'"]),"中定义了Picth方法，在此方法里面，返回了一个js字符串，项目运行的时候会运行这段字符串，这段字符串的意义就是调用样式loader获取真正的css后，运行",a("span",{class:"warn","data-quickpaper-57f04478":""},["addStylesClient.js"]),"方法使得在页面生效。"]),a("p",{class:"warn","data-quickpaper-57f04478":""},["温馨提示：关于addStylesClient.js方法请直接查看项目源码，很容易读懂，给样式添加hash值让scope生效，就是这个方法里。"]),a("h3",{"data-quickpaper-57f04478":""},["插件的作用和一些技巧"]),a("p",{"data-quickpaper-57f04478":""},["我们这里来解释一下，一个.paper文件拆分以后，如何让对应的loader来进行解析。"]),a("h4",{"data-quickpaper-57f04478":""},["插件的执行时机"]),a("p",{"data-quickpaper-57f04478":""},["首先需要理解，什么是插件？"]),a("p",{"data-quickpaper-57f04478":""},["你可以这样理解：如果说loader帮助webpack获得解析更多类型文件，那插件就是一个打杂工，前者有专门的分工，后者是在特殊情况下帮助，而不是针对某个文件。"]),a("p",{"data-quickpaper-57f04478":""},["比如你可以在每次打包前调用一个查看删除上次打包的结果，或者在打包失败的时候重置一些参数，或者是别的一些操作等。"]),a("h4",{"data-quickpaper-57f04478":""},["如何实现？"]),a("p",{"data-quickpaper-57f04478":""},["那么，我们这里需要插件干什么？"]),a("p",{"data-quickpaper-57f04478":""},["别忘了我们的需求是（拿css举例子），如果遇到："]),a("pre",{"q-code":"","data-quickpaper-57f04478":""},["import './${filename}?QuickPaper&type=style&lang=css&hash=${id}&';"]),a("p",{"data-quickpaper-57f04478":""},["这样的导入语句，我们工具lang=css发现是一个样式文件，应该交给专门解析css的loader处理，当然，我们可以主动修改webpack的配置："]),a("pre",{"q-code":"","data-quickpaper-57f04478":""},["{↵    test: /type=style&lang=css/,↵    loader: ['quick-paper/style-loader/index.js', 'css-loader', 'postcss-loader']↵}"]),a("p",{"data-quickpaper-57f04478":""},["可是，为了更简单，我们可以通过插件，在每次打包前对loader配置进行修改（当然，也包括js等相关项），如此，便实现了。"])])};p.default=r}}]);