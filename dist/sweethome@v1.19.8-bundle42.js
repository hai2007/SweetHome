(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{178:function(n,e,a){"use strict";a.r(e);var i=a(0),p=a.n(i),r={data:function(){return{wd:""}},methods:{reLoad:function(n,e){"input"==n&&13!=e.keyCode||this.reloadPage("#/search?wd="+encodeURIComponent(this.wd))},doSearch:function(n){}},mounted:function(){this.setTitle("搜索一下","./src/assets/search.svg"),this.wd=decodeURIComponent(p.a.urlFormat(window.location.href).params.wd||""),this.doSearch(this.wd)}};a(71);r.render=function(n){return n("div",{quickpaper:"","data-quickpaper-76508f16":""},[n("header",{"data-quickpaper-76508f16":""},[n("a",{href:"#/notebook",target:"_blank",class:"home","data-quickpaper-76508f16":""},["今天，你学习了吗？"]),n("div",{class:"search","data-quickpaper-76508f16":""},[n("span",{class:"input","data-quickpaper-76508f16":""},[n("input",{type:"text","@keydown":'reLoad("input")',"q-model":"wd","data-quickpaper-76508f16":""},[])]),n("span",{class:"btn","@click":'reLoad("btn")',"data-quickpaper-76508f16":""},["搜索一下"])])]),n("div",{"data-quickpaper-76508f16":""},[n("ui-dev",{"data-quickpaper-76508f16":""},[])]),n("ui-footer",{"data-quickpaper-76508f16":""},[])])};e.default=r},71:function(n,e,a){var i=a(72);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);(0,a(2).default)("data-quickpaper-76508f16",i,!0)},72:function(n,e,a){e=n.exports=a(1)(!1);var i=a(4)(a(6));e.push([n.i,"/* 顶部 */\n [quickpaper]>header{\n\nposition: fixed;\n\nwidth: 100vw;\n\nheight: 70px;\n\nleft: 0;\n\ntop: 0;\n\nbox-shadow: 1px 2px 5px #e5e5f0;\n\n}\n\n [quickpaper]>header>.home{\n\nheight: 70px;\n\nwidth: 100px;\n\ndisplay: inline-block;\n\nvertical-align: top;\n\nfont-size: 0;\n\nbackground-image: url("+i+");\n\nbackground-repeat: no-repeat;\n\nbackground-position: center center;\n\nbackground-size: auto 80%;\n\n}\n\n [quickpaper]>header>.search{\n\ndisplay: inline-block;\n\nmargin-top: 15px;\n\n}\n\n [quickpaper]>header>.search>span{\n\nheight: 40px;\n\ndisplay: inline-block;\n\nvertical-align: top;\n\n}\n\n [quickpaper]>header>.search>span.btn{\n\nline-height: 40px;\n\nbackground-color: rgb(185 155 110);\n\ncolor: white;\n\npadding: 0 30px;\n\ncursor: pointer;\n\n}\n\n [quickpaper]>header>.search>.input>input{\n\nheight: 100%;\n\nwidth: 480px;\n\nborder: 2px solid rgb(185, 179, 179);\n\nborder-radius: 10px 0 0 10px;\n\noutline: none;\n\nborder-right: none;\n\nfont-size: 20px;\n\npadding: 0 10px;\n\nfont-size: 14px;\n\n}\n\n [quickpaper]>header>.search>.input>input:focus{\n\nborder-color: rgb(185 155 110);\n\n}\n/* 主体 */\n [quickpaper]>div{\n\nmin-height: calc(100vh - 97px);\n\npadding-top: 70px;\n\n}\n",""])}}]);