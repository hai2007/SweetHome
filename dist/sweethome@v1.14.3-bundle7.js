(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(n,e,t){"use strict";t.r(e);t(47);var a=t(0),i=t.n(a),o=t(5),r=null,c={annotation:"#6a9955",insign:"#555",selector:"#1e50b3",attrKey:"#1e83b1",attrValue:"#ac4c1e"},d={text:"#000000",annotation:"#6a9955",insign:"#555",key:"#ff0000",string:"#ac4c1e",funName:"#1e50b3",execName:"#1e83b1"},p={text:"#000000",annotation:"#6a9955",insign:"#555",node:"#1e50b3",attrKey:"#1e83b1",attrValue:"#ac4c1e",css:c,javascript:d},l="<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <title>在线代码演示</title>\n        <style>\n            body{\n                color:red;\n            }\n            body>a{\n                color:blue;\n            }\n        </style>\n    </head>\n    <body>\n        Tips:欢迎使用在线代码演示工具，你可以\n        <a href='https://github.com/hai2007/SweetHome#%E5%9C%A8%E7%BA%BF%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA' target='_blank'>点击此处</a>\n        查看如何使用！\n    </body>\n</html>",s={methods:{doRun:function(){var n=document.getElementById("run-view").contentWindow.document;n.open(),n.write(r.valueOf()),n.close()},doRender:function(n){r=new this.__OpenWebEditor({el:document.getElementById("editor-view"),color:{background:"#ffffff",text:"#170",number:"#888484",edit:"#eaeaf1",cursor:"#ff0000",select:"#6c6cf1"},content:n,shader:["html",p]}),this.doRun()}},mounted:function(){var n=this;this.setTitle("在线代码编辑器","./src/assets/keep-study.png");var e=sessionStorage.getItem("hai2007-sweethome-editor-html-code");if(null==e&&(e=localStorage.getItem("hai2007-sweethome-editor-html-code")),null!=e)sessionStorage.setItem("hai2007-sweethome-editor-html-code",e),localStorage.removeItem("hai2007-sweethome-editor-html-code"),this.doRender(e);else{var t=i.a.urlFormat(window.location.href).params;if("file"in t){var a=o.a[t.file];a?a().then((function(e){n.doRender(e.default)})):(console.error("读取文件地址错误：（404）"+t.file),this.doRender(l))}else"content"in t?this.doRender("no"==t.decode?t.content:decodeURIComponent(t.content)):this.doRender(l)}}};t(49);s.render=function(n){return n("div",{quickpaper:"","data-quickpaper-5bfcf4ba":""},[n("header",{"data-quickpaper-5bfcf4ba":""},["在线代码编辑器",n("a",{href:"#/home",target:"_blank","data-quickpaper-5bfcf4ba":""},[n("span",{"data-quickpaper-5bfcf4ba":""},["返回主站"])])]),n("div",{"data-quickpaper-5bfcf4ba":""},[n("div",{"data-quickpaper-5bfcf4ba":""},[n("div",{class:"title","data-quickpaper-5bfcf4ba":""},["源代码",n("button",{title:"点击运行代码","@click":"doRun()","data-quickpaper-5bfcf4ba":""},["运行"])]),n("div",{class:"content",id:"editor-view","data-quickpaper-5bfcf4ba":""},[])]),n("div",{"data-quickpaper-5bfcf4ba":""},[n("div",{class:"title","data-quickpaper-5bfcf4ba":""},["运行结果"]),n("div",{class:"content","data-quickpaper-5bfcf4ba":""},[n("iframe",{id:"run-view","data-quickpaper-5bfcf4ba":""},[])])])]),n("ui-footer",{"data-quickpaper-5bfcf4ba":""},[])])};e.default=s},47:function(n,e,t){var a=t(48);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t(2).default)("data-quickpaper-63da2dd9",a,!1)},48:function(n,e,t){(n.exports=t(1)(!1)).push([n.i,"@media screen and (max-width: 800px) {\n    [quickpaper]>div>div {\n        width: calc(100vw - 40px) !important;\n    }\n\n    [quickpaper]>div {\n        height: calc(200vh - 334px) !important;\n        white-space: normal !important;\n    }\n}\n",""])},49:function(n,e,t){var a=t(50);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t(2).default)("data-quickpaper-5bfcf4ba",a,!0)},50:function(n,e,t){e=n.exports=t(1)(!1);var a=t(6)(t(51));e.push([n.i,"\n    /* 页头 */\n    header {\n        height: 60px;\n        line-height: 60px;\n        background-color: rgb(82, 91, 0);\n        background-image: url("+a+");\n        background-position: 30px center;\n        background-size: auto 80%;\n        background-repeat: no-repeat;\n        padding-left: 100px;\n        color: white;\n        position: relative;\n    }\n\n    header>a {\n        float: right;\n        padding-right: 15px;\n    }\n\n    header>a>span {\n        color: rgb(4, 0, 0);\n        font-size: 12px;\n        background-color: rgb(255, 255, 255);\n        padding: 5px;\n        vertical-align: top;\n    }\n\n    header>a>span:hover {\n        text-decoration: underline;\n    }\n\n    /* 内容 */\n    [quickpaper]>div {\n        height: calc(100vh - 157px);\n        padding: 10px;\n        white-space: nowrap;\n        font-size: 0;\n    }\n\n    [quickpaper]>div>div {\n        outline: 1px solid #8c9da5;\n        margin: 10px;\n        display: inline-block;\n        white-space: normal;\n        font-size: 16px;\n        width: calc(50vw - 30px);\n        height: calc(100vh - 197px);\n        vertical-align: top;\n    }\n\n    [quickpaper]>div>div>.title {\n        border-bottom: 1px solid #8c9da5;\n        height: 55px;\n        line-height: 55px;\n        padding: 0 20px;\n        position: relative;\n    }\n\n    [quickpaper]>div>div>.title>button {\n        position: absolute;\n        right: 10px;\n        top: 10px;\n        height: 35px;\n        line-height: 35px;\n        padding: 0 20px;\n        background-color: #856f48;\n        border: none;\n        outline: none;\n        color: white;\n        cursor: pointer;\n    }\n\n    [quickpaper]>div>div>.content {\n        width: 100%;\n        height: calc(100% - 55px);\n    }\n\n    [quickpaper]>div>div>.content>iframe {\n        width: 100%;\n        height: 100%;\n        outline: none;\n        border: none;\n    }\n",""])},51:function(n,e,t){n.exports=t.p+"dist/keep-study.png"}}]);