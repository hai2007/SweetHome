(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{151:function(e,n,t){"use strict";t.r(n);t(50);var r=t(0),a=t.n(r),i=t(5),o=null,d={annotation:"#6a9955",insign:"#555",selector:"#1e50b3",attrKey:"#1e83b1",attrValue:"#ac4c1e"},c={text:"#000000",annotation:"#6a9955",insign:"#555",key:"#ff0000",string:"#ac4c1e",funName:"#1e50b3",execName:"#1e83b1"},p={text:"#000000",annotation:"#6a9955",insign:"#555",node:"#1e50b3",attrKey:"#1e83b1",attrValue:"#ac4c1e",css:d,javascript:c},l="<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <title>在线代码演示</title>\n        <style>\n            body{\n                color:red;\n            }\n            body>a{\n                color:blue;\n            }\n        </style>\n    </head>\n    <body>\n        Tips:欢迎使用在线代码演示工具，你可以\n        <a href='https://github.com/hai2007/SweetHome#%E5%9C%A8%E7%BA%BF%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA' target='_blank'>点击此处</a>\n        查看如何使用！\n    </body>\n</html>",s={methods:{doRun:function(){var e=document.getElementById("run-view").contentWindow.document;e.open(),e.write(o.valueOf()),e.close()},doRender:function(e){o=new this.__OpenWebEditor({el:document.getElementById("editor-view"),color:{background:"#ffffff",text:"#170",number:"#888484",edit:"#eaeaf1",cursor:"#ff0000",select:"#6c6cf1"},content:e,shader:["html",p]}),this.doRun()}},mounted:function(){var e=this;this.setTitle("在线代码编辑器","./src/assets/keep-study.png");var n=sessionStorage.getItem("hai2007-sweethome-editor-html-code");if(null==n&&(n=localStorage.getItem("hai2007-sweethome-editor-html-code")),null!=n)sessionStorage.setItem("hai2007-sweethome-editor-html-code",n),localStorage.removeItem("hai2007-sweethome-editor-html-code"),this.doRender(n);else{var t=a.a.urlFormat(window.location.href).params;if("file"in t){var r=i.a[t.file];r?r().then((function(n){e.doRender(n.default)})):(console.error("读取文件地址错误：（404）"+t.file),this.doRender(l))}else"content"in t?this.doRender("no"==t.decode?t.content:decodeURIComponent(t.content)):this.doRender(l)}}};t(52);s.render=function(e){return e("div",{quickpaper:"","data-quickpaper-19a7be87":""},[e("header",{"data-quickpaper-19a7be87":""},["在线代码编辑器",e("span",{"data-quickpaper-19a7be87":""},[e("ui-search",{"data-quickpaper-19a7be87":""},[])])]),e("div",{"data-quickpaper-19a7be87":""},[e("div",{"data-quickpaper-19a7be87":""},[e("div",{class:"title","data-quickpaper-19a7be87":""},["源代码",e("button",{title:"点击运行代码","@click":"doRun()","data-quickpaper-19a7be87":""},["运行"])]),e("div",{class:"content",id:"editor-view","data-quickpaper-19a7be87":""},[])]),e("div",{"data-quickpaper-19a7be87":""},[e("div",{class:"title","data-quickpaper-19a7be87":""},["运行结果"]),e("div",{class:"content","data-quickpaper-19a7be87":""},[e("iframe",{id:"run-view","data-quickpaper-19a7be87":""},[])])])]),e("ui-footer",{"data-quickpaper-19a7be87":""},[])])};n.default=s},50:function(e,n,t){var r=t(51);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t(2).default)("data-quickpaper-0a2fbd26",r,!1)},51:function(e,n,t){(e.exports=t(1)(!1)).push([e.i,"@media screen and (max-width: 800px) {\n    [quickpaper]>div>div {\n        width: calc(100vw - 40px) !important;\n    }\n\n    [quickpaper]>div {\n        height: calc(200vh - 334px) !important;\n        white-space: normal !important;\n    }\n}\n",""])},52:function(e,n,t){var r=t(53);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,t(2).default)("data-quickpaper-19a7be87",r,!0)},53:function(e,n,t){n=e.exports=t(1)(!1);var r=t(6)(t(54));n.push([e.i,"\r\n    /* 页头 */\r\n    header {\r\n        height: 60px;\r\n        line-height: 60px;\r\n        background-color: rgb(82, 91, 0);\r\n        background-image: url("+r+");\r\n        background-position: 30px center;\r\n        background-size: auto 80%;\r\n        background-repeat: no-repeat;\r\n        padding-left: 100px;\r\n        color: white;\r\n        position: relative;\r\n    }\r\n\r\n    header>span {\r\n        float: right;\r\n        padding-right: 10px;\r\n    }\r\n\r\n    /* 内容 */\r\n    [quickpaper]>div {\r\n        height: calc(100vh - 157px);\r\n        padding: 10px;\r\n        white-space: nowrap;\r\n        font-size: 0;\r\n    }\r\n\r\n    [quickpaper]>div>div {\r\n        outline: 1px solid #8c9da5;\r\n        margin: 10px;\r\n        display: inline-block;\r\n        white-space: normal;\r\n        font-size: 16px;\r\n        width: calc(50vw - 30px);\r\n        height: calc(100vh - 197px);\r\n        vertical-align: top;\r\n    }\r\n\r\n    [quickpaper]>div>div>.title {\r\n        border-bottom: 1px solid #8c9da5;\r\n        height: 55px;\r\n        line-height: 55px;\r\n        padding: 0 20px;\r\n        position: relative;\r\n    }\r\n\r\n    [quickpaper]>div>div>.title>button {\r\n        position: absolute;\r\n        right: 10px;\r\n        top: 10px;\r\n        height: 35px;\r\n        line-height: 35px;\r\n        padding: 0 20px;\r\n        background-color: #856f48;\r\n        border: none;\r\n        outline: none;\r\n        color: white;\r\n        cursor: pointer;\r\n    }\r\n\r\n    [quickpaper]>div>div>.content {\r\n        width: 100%;\r\n        height: calc(100% - 55px);\r\n    }\r\n\r\n    [quickpaper]>div>div>.content>iframe {\r\n        width: 100%;\r\n        height: 100%;\r\n        outline: none;\r\n        border: none;\r\n    }\r\n",""])},54:function(e,n,t){e.exports=t.p+"dist/keep-study.png"}}]);