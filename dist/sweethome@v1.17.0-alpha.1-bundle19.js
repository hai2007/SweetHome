(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{148:function(n,e,a){"use strict";a.r(e);var i=a(0),p=a.n(i),r={data:function(){return{wd:""}},methods:{reLoad:function(n,e){"input"==n&&13!=e.keyCode||this.reloadPage("#/search?wd="+this.wd)},doSearch:function(n){setTimeout((function(){alert("你查询的关键字是["+n+"]，功能开发中，敬请期待！")}),100)}},mounted:function(){this.setTitle("搜索一下","./src/assets/search.svg"),this.wd=decodeURIComponent(p.a.urlFormat(window.location.href).params.wd),this.doSearch(this.wd)}};a(62);r.render=function(n){return n("div",{quickpaper:"","data-quickpaper-76508f16":""},[n("header",{"data-quickpaper-76508f16":""},[n("a",{href:"#/notebook",target:"_blank",class:"home","data-quickpaper-76508f16":""},["今天，你写代码了吗？"]),n("div",{class:"search","data-quickpaper-76508f16":""},[n("span",{class:"input","data-quickpaper-76508f16":""},[n("input",{type:"text","@keydown":'reLoad("input")',"q-model":"wd","data-quickpaper-76508f16":""},[])]),n("span",{class:"btn","@click":'reLoad("btn")',"data-quickpaper-76508f16":""},["搜索一下"])])]),n("div",{"data-quickpaper-76508f16":""},[]),n("ui-footer",{"data-quickpaper-76508f16":""},[])])};e.default=r},41:function(n,e,a){n.exports=a.p+"dist/girl-hai2007.png"},62:function(n,e,a){var i=a(63);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,a(2).default)("data-quickpaper-76508f16",i,!0)},63:function(n,e,a){e=n.exports=a(1)(!1);var i=a(6)(a(41));e.push([n.i,"\n    /* 顶部 */\n\n    [quickpaper]>header {\n        position: fixed;\n        width: 100vw;\n        height: 70px;\n        left: 0;\n        top: 0;\n        box-shadow: 1px 2px 5px #e5e5f0;\n    }\n\n    [quickpaper]>header>.home {\n        height: 70px;\n        width: 100px;\n        display: inline-block;\n        vertical-align: top;\n        font-size: 0;\n        background-image: url("+i+");\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-size: auto 80%;\n    }\n\n    [quickpaper]>header>.search {\n        display: inline-block;\n        margin-top: 15px;\n    }\n\n    [quickpaper]>header>.search>span {\n        height: 40px;\n        display: inline-block;\n        vertical-align: top;\n    }\n\n    [quickpaper]>header>.search>span.btn {\n        line-height: 40px;\n        background-color: rgb(185 155 110);\n        color: white;\n        padding: 0 30px;\n        cursor: pointer;\n    }\n\n    [quickpaper]>header>.search>.input>input {\n        height: 100%;\n        width: 480px;\n        border: 2px solid rgb(185, 179, 179);\n        border-radius: 10px 0 0 10px;\n        outline: none;\n        border-right: none;\n        font-size: 20px;\n        padding: 0 10px;\n    }\n\n    [quickpaper]>header>.search>.input>input:focus {\n        border-color: rgb(185 155 110);\n    }\n\n    /* 主体 */\n\n    [quickpaper]>div {\n        min-height: calc(100vh - 97px);\n        padding-top: 70px;\n    }\n",""])}}]);