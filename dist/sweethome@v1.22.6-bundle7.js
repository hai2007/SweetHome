(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{193:function(n,e,t){"use strict";t.r(e);t(69);var a=t(0),i=t.n(a),o=t(8),c=null,r={annotation:"#6a9955",insign:"#555",selector:"#1e50b3",attrKey:"#1e83b1",attrValue:"#ac4c1e"},d={text:"#000000",annotation:"#6a9955",insign:"#555",key:"#ff0000",string:"#ac4c1e",funName:"#1e50b3",execName:"#1e83b1"},p={text:"#000000",annotation:"#6a9955",insign:"#555",node:"#1e50b3",attrKey:"#1e83b1",attrValue:"#ac4c1e",css:r,javascript:d},l="<!DOCTYPE html>\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        <title>在线代码演示</title>\n        <style>\n            body{\n                color:red;\n            }\n            body>a{\n                color:blue;\n            }\n        </style>\n    </head>\n    <body>\n        Tips:欢迎使用在线代码演示工具，你可以\n        <a href='https://github.com/hai2007/SweetHome#%E5%9C%A8%E7%BA%BF%E4%BB%A3%E7%A0%81%E6%BC%94%E7%A4%BA' target='_blank'>点击此处</a>\n        查看如何使用！\n    </body>\n</html>",s={methods:{doRun:function(){var n=document.getElementById("run-view").contentWindow.document;n.open(),n.write(c.valueOf()),n.close()},doRender:function(n){c=new this.__OpenWebEditor({el:document.getElementById("editor-view"),color:{background:"#ffffff",text:"#170",number:"#888484",edit:"#eaeaf1",cursor:"#ff0000",select:"#6c6cf1"},content:n,shader:["html",p]}),this.doRun()}},mounted:function(){var n=this;this.setTitle("在线代码编辑器","./src/assets/keep-study.png"),this.setHelpView("none");var e=sessionStorage.getItem("hai2007-sweethome-editor-html-code");if(null==e&&(e=localStorage.getItem("hai2007-sweethome-editor-html-code")),null!=e)sessionStorage.setItem("hai2007-sweethome-editor-html-code",e),localStorage.removeItem("hai2007-sweethome-editor-html-code"),this.doRender(e);else{var t=i.a.urlFormat(window.location.href).params;if("file"in t){var a=o.a[t.file];a?a().then((function(e){n.doRender(e.default)})):(console.error("读取文件地址错误：（404）"+t.file),this.doRender(l))}else"content"in t?this.doRender("no"==t.decode?t.content:decodeURIComponent(t.content)):this.doRender(l)}}};t(71);s.render=function(n){return n("div",{quickpaper:"","data-quickpaper-5bfcf4ba":""},[n("header",{"data-quickpaper-5bfcf4ba":""},["在线代码编辑器",n("span",{"data-quickpaper-5bfcf4ba":""},[n("ui-search",{"data-quickpaper-5bfcf4ba":""},[])])]),n("div",{"data-quickpaper-5bfcf4ba":""},[n("div",{"data-quickpaper-5bfcf4ba":""},[n("div",{class:"title","data-quickpaper-5bfcf4ba":""},["源代码",n("button",{title:"点击运行代码","@click":"doRun()","data-quickpaper-5bfcf4ba":""},["运行"])]),n("div",{class:"content",id:"editor-view","data-quickpaper-5bfcf4ba":""},[])]),n("div",{"data-quickpaper-5bfcf4ba":""},[n("div",{class:"title","data-quickpaper-5bfcf4ba":""},["运行结果"]),n("div",{class:"content","data-quickpaper-5bfcf4ba":""},[n("iframe",{id:"run-view","data-quickpaper-5bfcf4ba":""},[])])])]),n("ui-footer",{"data-quickpaper-5bfcf4ba":""},[])])};e.default=s},60:function(n,e,t){n.exports=t.p+"dist/keep-study.png"},69:function(n,e,t){var a=t(70);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t(2).default)("data-quickpaper-63da2dd9",a,!1)},70:function(n,e,t){(n.exports=t(1)(!1)).push([n.i,"@media screen and (max-width: 800px) {\n    [quickpaper]>div>div {\n        width: calc(100vw - 40px) !important;\n    }\n\n    [quickpaper]>div {\n        height: calc(200vh - 334px) !important;\n        white-space: normal !important;\n    }\n}\n",""])},71:function(n,e,t){var a=t(72);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,t(2).default)("data-quickpaper-5bfcf4ba",a,!0)},72:function(n,e,t){e=n.exports=t(1)(!1);var a=t(5)(t(60));e.push([n.i,"/* 页头 */\n header{\n\nheight: 60px;\n\nline-height: 60px;\n\nbackground-color: rgb(82, 91, 0);\n\nbackground-image: url("+a+");\n\nbackground-position: 30px center;\n\nbackground-size: auto 80%;\n\nbackground-repeat: no-repeat;\n\npadding-left: 100px;\n\ncolor: white;\n\nposition: relative;\n\n}\n\n header>span{\n\nfloat: right;\n\npadding-right: 10px;\n\n}\n/* 内容 */\n [quickpaper]>div{\n\nheight: calc(100vh - 157px);\n\npadding: 10px;\n\nwhite-space: nowrap;\n\nfont-size: 0;\n\n}\n\n [quickpaper]>div>div{\n\noutline: 1px solid #8c9da5;\n\nmargin: 10px;\n\ndisplay: inline-block;\n\nwhite-space: normal;\n\nfont-size: 16px;\n\nwidth: calc(50vw - 30px);\n\nheight: calc(100vh - 197px);\n\nvertical-align: top;\n\n}\n\n [quickpaper]>div>div>.title{\n\nborder-bottom: 1px solid #8c9da5;\n\nheight: 55px;\n\nline-height: 55px;\n\npadding: 0 20px;\n\nposition: relative;\n\n}\n\n [quickpaper]>div>div>.title>button{\n\nposition: absolute;\n\nright: 10px;\n\ntop: 10px;\n\nheight: 35px;\n\nline-height: 35px;\n\npadding: 0 20px;\n\nbackground-color: #856f48;\n\nborder: none;\n\noutline: none;\n\ncolor: white;\n\ncursor: pointer;\n\n}\n\n [quickpaper]>div>div>.content{\n\nwidth: 100%;\n\nheight: calc(100% - 55px);\n\n}\n\n [quickpaper]>div>div>.content>iframe{\n\nwidth: 100%;\n\nheight: 100%;\n\noutline: none;\n\nborder: none;\n\n}\n",""])}}]);