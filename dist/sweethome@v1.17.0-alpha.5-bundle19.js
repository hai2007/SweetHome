(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{154:function(r,n,a){"use strict";a.r(n);var e=a(0),i=a.n(e),p={data:function(){return{wd:""}},methods:{reLoad:function(r,n){"input"==r&&13!=n.keyCode||this.reloadPage("#/search?wd="+this.wd)},doSearch:function(r){}},mounted:function(){this.setTitle("搜索一下","./src/assets/search.svg"),this.wd=decodeURIComponent(i.a.urlFormat(window.location.href).params.wd),this.doSearch(this.wd)}};a(62);p.render=function(r){return r("div",{quickpaper:"","data-quickpaper-fafafb7c":""},[r("header",{"data-quickpaper-fafafb7c":""},[r("a",{href:"#/notebook",target:"_blank",class:"home","data-quickpaper-fafafb7c":""},["今天，你写代码了吗？"]),r("div",{class:"search","data-quickpaper-fafafb7c":""},[r("span",{class:"input","data-quickpaper-fafafb7c":""},[r("input",{type:"text","@keydown":'reLoad("input")',"q-model":"wd","data-quickpaper-fafafb7c":""},[])]),r("span",{class:"btn","@click":'reLoad("btn")',"data-quickpaper-fafafb7c":""},["搜索一下"])])]),r("div",{"data-quickpaper-fafafb7c":""},["此功能目前处于研发阶段，敬请期待！"]),r("ui-footer",{"data-quickpaper-fafafb7c":""},[])])};n.default=p},41:function(r,n,a){r.exports=a.p+"dist/girl-hai2007.png"},62:function(r,n,a){var e=a(63);"string"==typeof e&&(e=[[r.i,e,""]]),e.locals&&(r.exports=e.locals);(0,a(2).default)("data-quickpaper-fafafb7c",e,!0)},63:function(r,n,a){n=r.exports=a(1)(!1);var e=a(6)(a(41));n.push([r.i,"\r\n    /* 顶部 */\r\n\r\n    [quickpaper]>header {\r\n        position: fixed;\r\n        width: 100vw;\r\n        height: 70px;\r\n        left: 0;\r\n        top: 0;\r\n        box-shadow: 1px 2px 5px #e5e5f0;\r\n    }\r\n\r\n    [quickpaper]>header>.home {\r\n        height: 70px;\r\n        width: 100px;\r\n        display: inline-block;\r\n        vertical-align: top;\r\n        font-size: 0;\r\n        background-image: url("+e+");\r\n        background-repeat: no-repeat;\r\n        background-position: center center;\r\n        background-size: auto 80%;\r\n    }\r\n\r\n    [quickpaper]>header>.search {\r\n        display: inline-block;\r\n        margin-top: 15px;\r\n    }\r\n\r\n    [quickpaper]>header>.search>span {\r\n        height: 40px;\r\n        display: inline-block;\r\n        vertical-align: top;\r\n    }\r\n\r\n    [quickpaper]>header>.search>span.btn {\r\n        line-height: 40px;\r\n        background-color: rgb(185 155 110);\r\n        color: white;\r\n        padding: 0 30px;\r\n        cursor: pointer;\r\n    }\r\n\r\n    [quickpaper]>header>.search>.input>input {\r\n        height: 100%;\r\n        width: 480px;\r\n        border: 2px solid rgb(185, 179, 179);\r\n        border-radius: 10px 0 0 10px;\r\n        outline: none;\r\n        border-right: none;\r\n        font-size: 20px;\r\n        padding: 0 10px;\r\n        font-size: 14px;\r\n    }\r\n\r\n    [quickpaper]>header>.search>.input>input:focus {\r\n        border-color: rgb(185 155 110);\r\n    }\r\n\r\n    /* 主体 */\r\n\r\n    [quickpaper]>div {\r\n        min-height: calc(100vh - 97px);\r\n        padding-top: 70px;\r\n        line-height: calc(100vh - 97px);\r\n        text-align: center;\r\n        font-size: 40px;\r\n        color: red;\r\n        font-family: serif;\r\n    }\r\n",""])}}]);