(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{42:function(a,p,i){var t=i(43);"string"==typeof t&&(t=[[a.i,t,""]]),t.locals&&(a.exports=t.locals);(0,i(1).default)("data-quickpaper-fa126620",t,!0)},43:function(a,p,i){(a.exports=i(0)(!1)).push([a.i,"\n    ul>li {\n        list-style-type: inherit;\n    }\n",""])},70:function(a,p,i){"use strict";i.r(p);var t={mounted:function(){this.changeActive("menu-2","before")}};i(42);t.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-fa126620":""},[a("h2",{id:"fixed-top","data-quickpaper-fa126620":""},["一、写在前面"]),a("p",{"data-quickpaper-fa126620":""},["为了更好的说明，我们模仿",a("a",{href:"https://cn.vuejs.org/",target:"_blank",class:"link","data-quickpaper-fa126620":""},["Vue.js"]),"开发了一个类似的简化版本的前端框架",a("a",{href:"https://github.com/hai2007/quick-paper",target:"_blank",class:"link","data-quickpaper-fa126620":""},["Quick Paper"]),"(",a("a",{href:"https://hai2007.gitee.io/quick-paper/",target:"_blank",class:"link",style:"padding:0;","data-quickpaper-fa126620":""},["文档"]),")↵        来帮助你理解一些细节。因此在开始之前，让我们先大致了解一下此项目的结构，方便后续描述。"]),a("p",{class:"warn","data-quickpaper-fa126620":""},["温馨提示：我们推荐你在开始之前去",a("a",{href:"https://github.com/hai2007/quick-paper",target:"_blank",class:"link","data-quickpaper-fa126620":""},["Github"]),"上把此项目clone下来后，对照着源码进行学习！"]),a("h3",{id:"fixed-menu","data-quickpaper-fa126620":""},["目录结构"]),a("p",{"data-quickpaper-fa126620":""},["其实你只需要关注下面四个文件夹："]),a("ol",{"data-quickpaper-fa126620":""},[a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["src"]),"：框架源码；"]),a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["loader"]),"：类似vue-loader，用来解析.paper文件的loader；"]),a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["style-loader"]),"：和上面的一样，只不过这个是用来解析样式文件的（包括.css文件和.paper文件中的style标签部分）；"]),a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["loader-plug"]),"：一些辅助功能，比如校对webpack的一些配置。"])]),a("h3",{id:"fixed-source","data-quickpaper-fa126620":""},["框架源码"]),a("p",{"data-quickpaper-fa126620":""},["接着，我们对源码src部分的目录结构再稍微展开一下（因为我们这里的重点不是源码部分，而是那些loader或plug是如何配置完成一系列解析工作的，因此源码部分就在下面简单的说明就点到为止）。"]),a("ul",{"data-quickpaper-fa126620":""},[a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["core"]),"：框架对象的基础代码",a("ul",{"data-quickpaper-fa126620":""},[a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["global-api"]),"：给框架对象挂载的全局方法"]),a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["instance"]),"：框架对象",a("ul",{"data-quickpaper-fa126620":""},[a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["index.js"]),"：框架对象运行入口"]),a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["init.js"]),"：负责对象的初始化相关工作"]),a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["lifecycle.js"]),"：负责对象的生命周期管理"]),a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["render.js"]),"：对象的渲染启动等方面的任务"])])]),a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["observe"]),"：监听数据改变方法（被框架对象使用）"]),a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["vnode"]),"：虚拟DOM相关代码（被框架对象使用）"])])]),a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["module"]),"：为框架对象扩展内置指令，组件等的地方"]),a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["tools"]),"：一些工具方法，因为复用性和方便管理，集中写在一起"]),a("li",{"data-quickpaper-fa126620":""},[a("span",{class:"important","data-quickpaper-fa126620":""},["index.js"]),"：打包入口文件，也就是这份文件把所有的资源整合成一个完整的框架"])]),a("p",{"data-quickpaper-fa126620":""},["所以从上面的代码就可以看出来，文件",a("a",{class:"important","data-quickpaper-fa126620":""},["src/core/instance/index.js"]),"是对象本身，从这个文件开始看即可！"]),a("p",{"data-quickpaper-fa126620":""},["如果有什么不清楚的，可以去",a("a",{href:"https://github.com/hai2007/quick-paper/issues",class:"link",target:"_blank","data-quickpaper-fa126620":""},["issue"]),"给我们留言。"])])};p.default=t}}]);