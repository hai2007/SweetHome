(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{167:function(a,d,e){var t=e(168);"string"==typeof t&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);(0,e(2).default)("data-quickpaper-6d1a1d94",t,!0)},168:function(a,d,e){(a.exports=e(1)(!1)).push([a.i,"",""])},189:function(a,d,e){"use strict";e.r(d);var t=e(48),p={methods:{doScroll:function(a){window.sweethome_noRefresh=!0,window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+a,Object(t.a)(document.getElementById("root"),0)}},mounted:function(){Object(t.a)(document.getElementById("root"),0)}};e(167);p.render=function(a){return a("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-6d1a1d94":""},[a("ul",{"data-quickpaper-6d1a1d94":""},[a("li",{"data-quickpaper-6d1a1d94":""},[a("span",{"@click":'doScroll("normal")',"data-quickpaper-6d1a1d94":""},["常规使用"]),a("ul",{"data-quickpaper-6d1a1d94":""},[a("li",{"data-quickpaper-6d1a1d94":""},[a("span",{"@click":'doScroll("normal-environment")',"data-quickpaper-6d1a1d94":""},["开发环境搭建"])]),a("li",{"data-quickpaper-6d1a1d94":""},[a("span",{"@click":'doScroll("normal-basic")',"data-quickpaper-6d1a1d94":""},["代码结构"])]),a("li",{"data-quickpaper-6d1a1d94":""},[a("span",{"@click":'doScroll("normal-demo")',"data-quickpaper-6d1a1d94":""},["举例子"]),a("ul",{"data-quickpaper-6d1a1d94":""},[a("li",{"data-quickpaper-6d1a1d94":""},[a("span",{"@click":'doScroll("normal-demo-directive")',"data-quickpaper-6d1a1d94":""},["指令"])])])])])]),a("li",{"data-quickpaper-6d1a1d94":""},[a("span",{"@click":'doScroll("webpack")',"data-quickpaper-6d1a1d94":""},["基于webpack开发"])])]),a("div",{class:"doc-view","data-quickpaper-6d1a1d94":""},[a("h2",{"data-quickpaper-6d1a1d94":""},["Vue:一套用于构建用户界面的渐进式框架"]),a("p",{class:"warn","data-quickpaper-6d1a1d94":""},["温馨提示：下面的内容是基于Vue2进行测试的，如果有改变会进行说明。"]),a("h3",{id:"fixed-normal","data-quickpaper-6d1a1d94":""},["常规使用"]),a("h4",{id:"fixed-normal-environment","data-quickpaper-6d1a1d94":""},["开发环境搭建"]),a("p",{"data-quickpaper-6d1a1d94":""},["引入Vue非常简单，只需要在我们的页面引入下面这行代码即可："]),a("pre",{"q-code":"html","data-quickpaper-6d1a1d94":""},['<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.js"><\/script>']),a("h4",{id:"fixed-normal-basic","data-quickpaper-6d1a1d94":""},["代码结构"]),a("pre",{"q-code":"html","data-quickpaper-6d1a1d94":""},["<div id='root'>↵    <input type=\"text\" v-bind:value='info'>↵</div>↵<script>↵    window.vm = new Vue({↵        el: document.getElementById('root'),↵        data: function () {↵            return {↵                info: \"一个简单的例子\"↵            };↵        }↵    });↵<\/script>"]),a("p",{"data-quickpaper-6d1a1d94":""},["运行的结果是：在页面出现一个输入框，输入框的内容是",a("span",{class:"warn","data-quickpaper-6d1a1d94":""},['"一个简单的例子"']),"。"]),a("p",{"data-quickpaper-6d1a1d94":""},["其实，Vue框架就是一个对象，通过",a("span",{class:"warn","data-quickpaper-6d1a1d94":""},["el配置项"]),"来确定管理的范围，然后这个范围里面的内容就可以按照",a("span",{class:"warn","data-quickpaper-6d1a1d94":""},["Vue的规则"]),"来开发了。"]),a("p",{"data-quickpaper-6d1a1d94":""},[]),a("h4",{id:"fixed-normal-demo","data-quickpaper-6d1a1d94":""},["举例子"]),a("h5",{id:"fixed-normal-demo-directive","data-quickpaper-6d1a1d94":""},["指令"]),a("p",{"data-quickpaper-6d1a1d94":""},['上面我们在Vue对象里面定义的data配置项，通过v-bind和输入框关联起来了，输入框的值会和data中的info值保持一致，这样的一个"东西"我们就称之为',a("span",{class:"important","data-quickpaper-6d1a1d94":""},["指令"]),"。"]),a("p",{"data-quickpaper-6d1a1d94":""},["现在，我们把上面的例子HTML部分稍微改造一下："]),a("pre",{"q-code":"html","data-quickpaper-6d1a1d94":""},["<div id='root'>↵    <input type=\"text\" v-bind:value='info'>↵    <input type=\"text\" v-bind:value='info'>↵</div>"]),a("p",{"data-quickpaper-6d1a1d94":""},["是的，页面出现了两个一模一样的输入框，如果你修改任意一个输入框，另一个输入框的值不会改变，可是，如果你打开控制台执行下面这行代码："]),a("pre",{"q-code":"","data-quickpaper-6d1a1d94":""},["vm.info='控制台修改的数据';"]),a("p",{"data-quickpaper-6d1a1d94":""},["你会发现，两个输入框的值同时变成了",a("span",{class:"warn","data-quickpaper-6d1a1d94":""},["'控制台修改的数据'"]),"。"]),a("p",{"data-quickpaper-6d1a1d94":""},["总结一下就是：数据改变，页面会同步更新，页面改变，数据不会改变。我们称之为",a("span",{class:"important","data-quickpaper-6d1a1d94":""},["单向数据绑定"]),"。"]),a("p",{"data-quickpaper-6d1a1d94":""},["既然有单向的，那就可能会有双向的。再次修改一下HTML部分代码："]),a("pre",{"q-code":"html","data-quickpaper-6d1a1d94":""},["<div id='root'>↵    <input type=\"text\" v-model='info'>↵    <input type=\"text\" v-bind:value='info'>↵</div>"]),a("p",{"data-quickpaper-6d1a1d94":""},["再次运行发现，修改第一个输入框的内容，第二个输入框的内容会跟着改变。也就是：数据改变，页面会同步更新，页面改变，数据也会同步更新。我们称之为",a("span",{class:"important","data-quickpaper-6d1a1d94":""},["双向数据绑定"]),"。"]),a("p",{"data-quickpaper-6d1a1d94":""},["上面，我们介绍了指令v-bind和v-model，可以看出来，指令其实就是数据和页面DOM的一个桥梁。通过指令，我们可以\b在改变数据的时候，间接操作DOM结点。"]),a("p",{"data-quickpaper-6d1a1d94":""},["当然，还有更多满足不同需求的指令，你可以",a("a",{href:"https://cn.vuejs.org/v2/api/#%E6%8C%87%E4%BB%A4",target:"_blank",class:"link","data-quickpaper-6d1a1d94":""},["点击此处"]),"进行学习。"]),a("h3",{id:"fixed-webpack","data-quickpaper-6d1a1d94":""},["基于webpack开发"]),a("p",{"data-quickpaper-6d1a1d94":""},["在更多的情况下，我们是把页面写在",a("span",{class:"warn","data-quickpaper-6d1a1d94":""},["vue文件"]),"中，这样的好处是更加灵活、更好复用。vue的设计思想是：由一个个组件拼接成完整的页面，而这一个个组件，其实就是一个个vue文件。"]),a("p",{"data-quickpaper-6d1a1d94":""},["首先，需要安装必要的Loader和插件来告诉Webpack如何处理vue文件："]),a("pre",{"q-code":"","data-quickpaper-6d1a1d94":""},["npm install vue-style-loader css-loader vue-loader"]),a("p",{"data-quickpaper-6d1a1d94":""},["然后配置webpack："]),a("pre",{"q-code":"","data-quickpaper-6d1a1d94":""},["// webpack.config.js↵const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;↵module.exports = {↵    entry: ['./index.js'],↵    output: {↵        path: __dirname,↵        filename: 'build.js'↵    },↵    module: {↵        rules: [{↵            test: /\\.vue$/,↵            use: ['vue-loader']↵        },↵        {↵            test: /\\.css$/,↵            use: ['vue-style-loader', 'css-loader']↵        }]↵    },↵    plugins: [↵        new VueLoaderPlugin()↵    ]↵};"]),a("p",{"data-quickpaper-6d1a1d94":""},["我们想使用Vue肯定也是要安装的："]),a("pre",{"q-code":"","data-quickpaper-6d1a1d94":""},["npm install vue@2"]),a("p",{"data-quickpaper-6d1a1d94":""},["当然，我们还需要新增一个vue文件："]),a("pre",{"q-code":"html","data-quickpaper-6d1a1d94":""},['<template>↵    <div>↵        <input type="text" v-model=\'info\'>↵        <input type="text" v-bind:value=\'info\'>↵    </div>↵</template>↵<script>↵    export default {↵        data: function () {↵            return {↵                info: "一个简单的例子"↵            };↵        }↵    };↵<\/script>']),a("p",{"data-quickpaper-6d1a1d94":""},["然后，就可以在index.js中使用Vue了："]),a("pre",{"q-code":"","data-quickpaper-6d1a1d94":""},["// index.js↵import Vue from 'vue';↵import App from './App.vue';↵new Vue({↵    el: document.getElementById('root'),↵    render: createElement => createElement(App)↵});"]),a("p",{"data-quickpaper-6d1a1d94":""},["完整的代码你可以",a("a",{href:"https://github.com/agile-contrib/vue2",target:"_blank",class:"link","data-quickpaper-6d1a1d94":""},["点击此处"]),"进行查看。"])])])};d.default=p},48:function(a,d,e){"use strict";var t=[],p=null,i=e(0),r=e.n(i);d.a=function(a,d){d=d||0,a=a||document.documentElement;var e=r.a.urlFormat(window.location.href).params.fixed;if(e){var i=document.getElementById("fixed-"+e);if(i){var c=i.offsetTop-d,n=a.scrollTop||0;!function(a,d,e){arguments.length<2&&(d=400);var i={timer:function(a,d,e){if(!a)throw new Error("Tick is required!");var p=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return t.push({id:p,createTime:new Date,tick:a,duration:d,callback:e}),i.start(),p},start:function(){p||(p=setInterval(i.tick,13))},tick:function(){var a,d,e,p,r,c,n,u=t;for((t=[]).length=0,d=0;d<u.length;d++)a=(r=u[d]).createTime,e=r.tick,c=r.duration,p=r.callback,!1,(n=(+new Date-a)/c)>=1&&!0,e(n=n>1?1:n),n<1&&r.id?t.push(r):p&&p(n);t.length<=0&&i.stop()},stop:function(){p&&(clearInterval(p),p=null)}},r=i.timer((function(d){a(d)}),d,e)}((function(d){a.scrollTop=(c-n)*d+n}),500,(function(){a.scrollTop=c}))}}else a.scrollTop=0}}}]);