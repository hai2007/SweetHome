(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{139:function(a,e,p){var t=p(140);"string"==typeof t&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);(0,p(2).default)("data-quickpaper-5a0ab63b",t,!0)},140:function(a,e,p){(a.exports=p(1)(!1)).push([a.i,"",""])},156:function(a,e,p){"use strict";p.r(e);var t=p(38),c={methods:{doScroll:function(a){window.sweethome_noRefresh=!0,window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+a,Object(t.a)(document.getElementById("root"),0)}},mounted:function(){Object(t.a)(document.getElementById("root"),0)}};p(139);c.render=function(a){return a("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-5a0ab63b":""},[a("ul",{"data-quickpaper-5a0ab63b":""},[a("li",{"data-quickpaper-5a0ab63b":""},[a("span",{"@click":'doScroll("basic")',"data-quickpaper-5a0ab63b":""},["介绍"])]),a("li",{"data-quickpaper-5a0ab63b":""},[a("span",{"@click":'doScroll("config")',"data-quickpaper-5a0ab63b":""},["配置文件"]),a("ul",{"data-quickpaper-5a0ab63b":""},[a("li",{"data-quickpaper-5a0ab63b":""},[a("span",{"@click":'doScroll("config-loader")',"data-quickpaper-5a0ab63b":""},["Loader"])])])])]),a("div",{class:"doc-view","data-quickpaper-5a0ab63b":""},[a("h2",{"data-quickpaper-5a0ab63b":""},["Webpack:前端资源模块化管理和打包工具"]),a("p",{class:"warn","data-quickpaper-5a0ab63b":""},["温馨提示：下面的内容是基于Webpack4进行测试的，如果有改变会进行说明。"]),a("h3",{id:"fixed-basic","data-quickpaper-5a0ab63b":""},["介绍"]),a("p",{"data-quickpaper-5a0ab63b":""},["在开始使用前，我们首先需要安装webpack："]),a("pre",{"q-code":"","data-quickpaper-5a0ab63b":""},["npm install webpack@4 webpack-cli@4"]),a("p",{"data-quickpaper-5a0ab63b":""},["安装完毕以后，就可以使用他帮助我们打包JS代码了。"]),a("p",{"data-quickpaper-5a0ab63b":""},["比如我们现在有个tool.js文件："]),a("pre",{"q-code":"","data-quickpaper-5a0ab63b":""},["// tool.js↵export function doit() {↵    console.log('你好呀！');↵}"]),a("p",{"data-quickpaper-5a0ab63b":""},["我们的项目中希望使用这个tool模块提供的doit方法，\b我们可以这样写："]),a("pre",{"q-code":"","data-quickpaper-5a0ab63b":""},["// index.js↵import {doit} from './tool';↵doit();"]),a("p",{"data-quickpaper-5a0ab63b":""},["可是，浏览器是不支持",a("span",{class:"important","data-quickpaper-5a0ab63b":""},["import"]),"这样引入JS的方式的，怎么办？我们就可以借助webpack把index.js和tool.js打包成一个文件来使用。执行下面命令："]),a("pre",{"q-code":"","data-quickpaper-5a0ab63b":""},["webpack --entry ./index.js"]),a("p",{"data-quickpaper-5a0ab63b":""},["运行完毕之后，你就可以看见一个新的js文件，默认位于",a("span",{class:"warn","data-quickpaper-5a0ab63b":""},["dist/main.js"]),"。"]),a("p",{"data-quickpaper-5a0ab63b":""},["我们可以把新生成的文件在一个空的index.html中引入后，使用浏览器打开运行，这样F12打开控制台看见一个打印语句：",a("span",{class:"warn","data-quickpaper-5a0ab63b":""},['"你好呀！"']),"。我们可以看见，webpack最大的好处是使得我们可以开发前端项目的时候可以模块化。"]),a("h3",{id:"fixed-config","data-quickpaper-5a0ab63b":""},["配置文件"]),a("p",{"data-quickpaper-5a0ab63b":""},["虽然上面通过命令行直接使用webpack也可以指定打包入口等，不过在实际开发中，更多的是使用配置文件的方式。"]),a("pre",{"q-code":"","data-quickpaper-5a0ab63b":""},["// webpack.config.js↵module.exports = {↵    entry: ['./index.js'],↵    output: {↵        path: __dirname,↵        filename: 'build.js'↵    }↵};"]),a("p",{"data-quickpaper-5a0ab63b":""},["上面我们创建了一个配置文件",a("span",{class:"warn","data-quickpaper-5a0ab63b":""},["webpack.config.js"]),"来配置打包入口和出口。然后，执行下面命令："]),a("pre",{"q-code":"","data-quickpaper-5a0ab63b":""},["webpack"]),a("p",{"data-quickpaper-5a0ab63b":""},["运行完毕之后，你就可以看见一个新的js文件，默认位于",a("span",{class:"warn","data-quickpaper-5a0ab63b":""},["build.js"]),"。"]),a("h4",{id:"fixed-config-loader","data-quickpaper-5a0ab63b":""},["Loader"]),a("p",{"data-quickpaper-5a0ab63b":""},["你有没有发现，我们目前为止模块开发中互相调用的文件都是",a("span",{class:"warn","data-quickpaper-5a0ab63b":""},["JS文件"]),"，如果是别的文件，比如",a("span",{class:"warn","data-quickpaper-5a0ab63b":""},["CSS文件"]),"会怎么样？"]),a("pre",{"q-code":"css","data-quickpaper-5a0ab63b":""},["/* index.css */↵body{↵    color:red;↵}"]),a("p",{"data-quickpaper-5a0ab63b":""},["然后，我们引入它："]),a("pre",{"q-code":"","data-quickpaper-5a0ab63b":""},["// index.js↵import './index.css';"]),a("p",{"data-quickpaper-5a0ab63b":""},["再次运行命令",a("span",{class:"warn","data-quickpaper-5a0ab63b":""},["webpack"]),"执行打包后发现报错了："]),a("pre",{"q-code":"","data-quickpaper-5a0ab63b":""},["ERROR in ./index.css 1:4↵Module parse failed: Unexpected token (1:4)↵You may need an appropriate loader to handle this file type,↵currently no loaders are configured to process this file.↵See https://webpack.js.org/concepts#loaders↵> body{↵|   color:red;↵| }↵    @ ./index.js 1:0-21↵    @ multi ./index.js"]),a("p",{"data-quickpaper-5a0ab63b":""},["webpack提示我们，它不认识这个文件，怎么样让它认识？这就是loader的作用了。"]),a("p",{"data-quickpaper-5a0ab63b":""},["首先，我们需要安装依赖的Loader，执行下面的命令："]),a("pre",{"q-code":"","data-quickpaper-5a0ab63b":""},["npm install style-loader css-loader"]),a("p",{"data-quickpaper-5a0ab63b":""},['然后，我们需要在webpack配置文件中进行配置，指明如何"认识"css文件：']),a("pre",{"q-code":"","data-quickpaper-5a0ab63b":""},["module.exports = {↵    entry: ['./index.js'],↵    output: {↵        path: __dirname,↵        filename: 'build.js'↵    },↵    module: {↵        rules: [{↵            test: /\\.css$/,↵            loader: ['style-loader', 'css-loader']↵        }]↵    }↵};"]),a("p",{"data-quickpaper-5a0ab63b":""},["然后，再次运行命令",a("span",{class:"warn","data-quickpaper-5a0ab63b":""},["webpack"]),"执行打包后发现成功了，找一个写了文字的HTML文件引入后在浏览器中运行发现，页面的文字变成了红色。"])])])};e.default=c},38:function(a,e,p){"use strict";var t=[],c=null,i=p(0),r=p.n(i);e.a=function(a,e){e=e||0,a=a||document.documentElement;var p=r.a.urlFormat(window.location.href).params.fixed;if(p){var i=document.getElementById("fixed-"+p);if(i){var d=i.offsetTop-e,o=a.scrollTop||0;!function(a,e,p){arguments.length<2&&(e=400);var i={timer:function(a,e,p){if(!a)throw new Error("Tick is required!");var c=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return t.push({id:c,createTime:new Date,tick:a,duration:e,callback:p}),i.start(),c},start:function(){c||(c=setInterval(i.tick,13))},tick:function(){var a,e,p,c,r,d,o,n=t;for((t=[]).length=0,e=0;e<n.length;e++)a=(r=n[e]).createTime,p=r.tick,d=r.duration,c=r.callback,!1,(o=(+new Date-a)/d)>=1&&!0,p(o=o>1?1:o),o<1&&r.id?t.push(r):c&&c(o);t.length<=0&&i.stop()},stop:function(){c&&(clearInterval(c),c=null)}},r=i.timer((function(e){a(e)}),e,p)}((function(e){a.scrollTop=(d-o)*e+o}),500,(function(){a.scrollTop=d}))}}else a.scrollTop=0}}}]);