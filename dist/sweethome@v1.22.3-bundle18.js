(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{186:function(e,a,c){var p=c(187);"string"==typeof p&&(p=[[e.i,p,""]]),p.locals&&(e.exports=p.locals);(0,c(2).default)("data-quickpaper-1c9eb57b",p,!0)},187:function(e,a,c){(e.exports=c(1)(!1)).push([e.i,"",""])},209:function(e,a,c){"use strict";c.r(a);var p=c(59),t={methods:{doScroll:function(e){window.sweethome_noRefresh=!0,window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+e,Object(p.a)(document.getElementById("root"),0)}},mounted:function(){Object(p.a)(document.getElementById("root"),0)}};c(186);t.render=function(e){return e("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-1c9eb57b":""},[e("ul",{"data-quickpaper-1c9eb57b":""},[e("li",{"data-quickpaper-1c9eb57b":""},[e("span",{"@click":'doScroll("basic")',"data-quickpaper-1c9eb57b":""},["介绍"])]),e("li",{"data-quickpaper-1c9eb57b":""},[e("span",{"@click":'doScroll("config")',"data-quickpaper-1c9eb57b":""},["配置文件"]),e("ul",{"data-quickpaper-1c9eb57b":""},[e("li",{"data-quickpaper-1c9eb57b":""},[e("span",{"@click":'doScroll("config-loader")',"data-quickpaper-1c9eb57b":""},["Loader"])])])])]),e("div",{class:"doc-view","data-quickpaper-1c9eb57b":""},[e("h2",{"data-quickpaper-1c9eb57b":""},["Webpack:前端资源模块化管理和打包工具"]),e("p",{class:"warn","data-quickpaper-1c9eb57b":""},["温馨提示：下面的内容是基于Webpack4进行测试的，如果有改变会进行说明。"]),e("h3",{id:"fixed-basic","data-quickpaper-1c9eb57b":""},["介绍"]),e("p",{"data-quickpaper-1c9eb57b":""},["在开始使用前，我们首先需要安装webpack："]),e("pre",{"q-code":"","data-quickpaper-1c9eb57b":""},["npm install webpack@4 webpack-cli@4"]),e("p",{"data-quickpaper-1c9eb57b":""},["安装完毕以后，就可以使用他帮助我们打包JS代码了。"]),e("p",{"data-quickpaper-1c9eb57b":""},["比如我们现在有个tool.js文件："]),e("pre",{"q-code":"","data-quickpaper-1c9eb57b":""},["// tool.js↵export function doit() {↵    console.log('你好呀！');↵}"]),e("p",{"data-quickpaper-1c9eb57b":""},["我们的项目中希望使用这个tool模块提供的doit方法，\b我们可以这样写："]),e("pre",{"q-code":"","data-quickpaper-1c9eb57b":""},["// index.js↵import {doit} from './tool';↵doit();"]),e("p",{"data-quickpaper-1c9eb57b":""},["可是，浏览器是不支持",e("span",{class:"important","data-quickpaper-1c9eb57b":""},["import"]),"这样引入JS的方式的，怎么办？我们就可以借助webpack把index.js和tool.js打包成一个文件来使用。执行下面命令："]),e("pre",{"q-code":"","data-quickpaper-1c9eb57b":""},["webpack --entry ./index.js"]),e("p",{"data-quickpaper-1c9eb57b":""},["运行完毕之后，你就可以看见一个新的js文件，默认位于",e("span",{class:"warn","data-quickpaper-1c9eb57b":""},["dist/main.js"]),"。"]),e("p",{"data-quickpaper-1c9eb57b":""},["我们可以把新生成的文件在一个空的index.html中引入后，使用浏览器打开运行，这样F12打开控制台看见一个打印语句：",e("span",{class:"warn","data-quickpaper-1c9eb57b":""},['"你好呀！"']),"。我们可以看见，webpack最大的好处是使得我们可以开发前端项目的时候可以模块化。"]),e("h3",{id:"fixed-config","data-quickpaper-1c9eb57b":""},["配置文件"]),e("p",{"data-quickpaper-1c9eb57b":""},["虽然上面通过命令行直接使用webpack也可以指定打包入口等，不过在实际开发中，更多的是使用配置文件的方式。"]),e("pre",{"q-code":"","data-quickpaper-1c9eb57b":""},["// webpack.config.js↵module.exports = {↵    entry: ['./index.js'],↵    output: {↵        path: __dirname,↵        filename: 'build.js'↵    }↵};"]),e("p",{"data-quickpaper-1c9eb57b":""},["上面我们创建了一个配置文件",e("span",{class:"warn","data-quickpaper-1c9eb57b":""},["webpack.config.js"]),"来配置打包入口和出口。然后，执行下面命令："]),e("pre",{"q-code":"","data-quickpaper-1c9eb57b":""},["webpack"]),e("p",{"data-quickpaper-1c9eb57b":""},["运行完毕之后，你就可以看见一个新的js文件，默认位于",e("span",{class:"warn","data-quickpaper-1c9eb57b":""},["build.js"]),"。"]),e("h4",{id:"fixed-config-loader","data-quickpaper-1c9eb57b":""},["Loader"]),e("p",{"data-quickpaper-1c9eb57b":""},["你有没有发现，我们目前为止模块开发中互相调用的文件都是",e("span",{class:"warn","data-quickpaper-1c9eb57b":""},["JS文件"]),"，如果是别的文件，比如",e("span",{class:"warn","data-quickpaper-1c9eb57b":""},["CSS文件"]),"会怎么样？"]),e("pre",{"q-code":"css","data-quickpaper-1c9eb57b":""},["/* index.css */↵body{↵    color:red;↵}"]),e("p",{"data-quickpaper-1c9eb57b":""},["然后，我们引入它："]),e("pre",{"q-code":"","data-quickpaper-1c9eb57b":""},["// index.js↵import './index.css';"]),e("p",{"data-quickpaper-1c9eb57b":""},["再次运行命令",e("span",{class:"warn","data-quickpaper-1c9eb57b":""},["webpack"]),"执行打包后发现报错了："]),e("pre",{"q-code":"","data-quickpaper-1c9eb57b":""},["ERROR in ./index.css 1:4↵Module parse failed: Unexpected token (1:4)↵You may need an appropriate loader to handle this file type,↵currently no loaders are configured to process this file.↵See https://webpack.js.org/concepts#loaders↵> body{↵|   color:red;↵| }↵    @ ./index.js 1:0-21↵    @ multi ./index.js"]),e("p",{"data-quickpaper-1c9eb57b":""},["webpack提示我们，它不认识这个文件，怎么样让它认识？这就是loader的作用了。"]),e("p",{"data-quickpaper-1c9eb57b":""},["首先，我们需要安装依赖的Loader，执行下面的命令："]),e("pre",{"q-code":"","data-quickpaper-1c9eb57b":""},["npm install style-loader css-loader"]),e("p",{"data-quickpaper-1c9eb57b":""},['然后，我们需要在webpack配置文件中进行配置，指明如何"认识"css文件：']),e("pre",{"q-code":"","data-quickpaper-1c9eb57b":""},["module.exports = {↵    entry: ['./index.js'],↵    output: {↵        path: __dirname,↵        filename: 'build.js'↵    },↵    module: {↵        rules: [{↵            test: /\\.css$/,↵            loader: ['style-loader', 'css-loader']↵        }]↵    }↵};"]),e("p",{"data-quickpaper-1c9eb57b":""},["然后，再次运行命令",e("span",{class:"warn","data-quickpaper-1c9eb57b":""},["webpack"]),"执行打包后发现成功了，找一个写了文字的HTML文件引入后在浏览器中运行发现，页面的文字变成了红色。"])])])};a.default=t},59:function(e,a,c){"use strict";var p=[],t=null,i=c(0),r=c.n(i);a.a=function(e,a){a=a||0,e=e||document.documentElement;var c=r.a.urlFormat(window.location.href).params.fixed;if(c){var i=document.getElementById("fixed-"+c);if(i){var d=i.offsetTop-a,o=e.scrollTop||0;!function(e,a,c){arguments.length<2&&(a=400);var i={timer:function(e,a,c){if(!e)throw new Error("Tick is required!");var t=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return p.push({id:t,createTime:new Date,tick:e,duration:a,callback:c}),i.start(),t},start:function(){t||(t=setInterval(i.tick,13))},tick:function(){var e,a,c,t,r,d,o,n=p;for((p=[]).length=0,a=0;a<n.length;a++)e=(r=n[a]).createTime,c=r.tick,d=r.duration,t=r.callback,!1,(o=(+new Date-e)/d)>=1&&!0,c(o=o>1?1:o),o<1&&r.id?p.push(r):t&&t(o);p.length<=0&&i.stop()},stop:function(){t&&(clearInterval(t),t=null)}},r=i.timer((function(a){e(a)}),a,c)}((function(a){e.scrollTop=(d-o)*a+o}),500,(function(){e.scrollTop=d}))}}else e.scrollTop=0}}}]);