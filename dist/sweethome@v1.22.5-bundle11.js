(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{195:function(a,i,c){"use strict";c.r(i);var n=c(57),e={methods:{doScroll:function(a){window.sweethome_noRefresh=!0,window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+a,Object(n.a)(document.getElementById("root"),0)}},mounted:function(){this.setTitle("常见面试题","./src/assets/file.png"),Object(n.a)(document.getElementById("root"),0)}};c(81);e.render=function(a){return a("div",{quickpaper:"","data-quickpaper-52b28d76":""},[a("div",{"data-quickpaper-52b28d76":""},[a("div",{class:"content doc-view","data-quickpaper-52b28d76":""},[a("h2",{"data-quickpaper-52b28d76":""},["常见面试题"]),a("p",{"data-quickpaper-52b28d76":""},["这里主要整理一些比较有意思的面试题，提供给日常学习使用，会进行动态的修改（包括删除，如果感觉过时了），你也可以给我们",a("a",{class:"link",href:"https://github.com/hai2007/SweetHome/issues",target:"_blank","data-quickpaper-52b28d76":""},["提建议"]),"哦。"]),a("h3",{id:"fixed-css","@click":'doScroll("css")',class:"canlink","data-quickpaper-52b28d76":""},["CSS"]),a("h3",{id:"fixed-javascript","@click":'doScroll("javascript")',class:"canlink","data-quickpaper-52b28d76":""},["JavaScript"]),a("h3",{id:"fixed-browser","@click":'doScroll("browser")',class:"canlink","data-quickpaper-52b28d76":""},["浏览器"]),a("h3",{id:"fixed-web","@click":'doScroll("web")',class:"canlink","data-quickpaper-52b28d76":""},["服务端和网络"]),a("h3",{id:"fixed-vue","@click":'doScroll("vue")',class:"canlink","data-quickpaper-52b28d76":""},["Vue"]),a("h3",{id:"fixed-react","@click":'doScroll("react")',class:"canlink","data-quickpaper-52b28d76":""},["React"]),a("h3",{id:"fixed-webpack","@click":'doScroll("webpack")',class:"canlink","data-quickpaper-52b28d76":""},["Webpack"]),a("h3",{id:"fixed-algorithm","@click":'doScroll("algorithm")',class:"canlink","data-quickpaper-52b28d76":""},["算法"]),a("h3",{id:"fixed-hybrid","@click":'doScroll("hybrid")',class:"canlink","data-quickpaper-52b28d76":""},["混合开发"]),a("h3",{id:"fixed-optimize","@click":'doScroll("optimize")',class:"canlink","data-quickpaper-52b28d76":""},["性能优化"]),a("h3",{id:"fixed-test","@click":'doScroll("test")',class:"canlink","data-quickpaper-52b28d76":""},["测试"]),a("h3",{id:"fixed-more","@click":'doScroll("more")',class:"canlink","data-quickpaper-52b28d76":""},["更多"])]),a("div",{class:"menu","data-quickpaper-52b28d76":""},[a("ui-search",{"data-quickpaper-52b28d76":""},[]),a("ul",{"data-quickpaper-52b28d76":""},[a("li",{"data-quickpaper-52b28d76":""},[a("span",{"@click":'doScroll("css")',class:"canlink","data-quickpaper-52b28d76":""},["CSS"])]),a("li",{"data-quickpaper-52b28d76":""},[a("span",{"@click":'doScroll("javascript")',class:"canlink","data-quickpaper-52b28d76":""},["JavaScript"])]),a("li",{"data-quickpaper-52b28d76":""},[a("span",{"@click":'doScroll("browser")',class:"canlink","data-quickpaper-52b28d76":""},["浏览器"])]),a("li",{"data-quickpaper-52b28d76":""},[a("span",{"@click":'doScroll("web")',class:"canlink","data-quickpaper-52b28d76":""},["服务端和网络"])]),a("li",{"data-quickpaper-52b28d76":""},[a("span",{"@click":'doScroll("vue")',class:"canlink","data-quickpaper-52b28d76":""},["Vue"])]),a("li",{"data-quickpaper-52b28d76":""},[a("span",{"@click":'doScroll("react")',class:"canlink","data-quickpaper-52b28d76":""},["React"])]),a("li",{"data-quickpaper-52b28d76":""},[a("span",{"@click":'doScroll("webpack")',class:"canlink","data-quickpaper-52b28d76":""},["Webpack"])]),a("li",{"data-quickpaper-52b28d76":""},[a("span",{"@click":'doScroll("algorithm")',class:"canlink","data-quickpaper-52b28d76":""},["算法"])]),a("li",{"data-quickpaper-52b28d76":""},[a("span",{"@click":'doScroll("hybrid")',class:"canlink","data-quickpaper-52b28d76":""},["混合开发"])]),a("li",{"data-quickpaper-52b28d76":""},[a("span",{"@click":'doScroll("optimize")',class:"canlink","data-quickpaper-52b28d76":""},["性能优化"])]),a("li",{"data-quickpaper-52b28d76":""},[a("span",{"@click":'doScroll("test")',class:"canlink","data-quickpaper-52b28d76":""},["测试"])]),a("li",{"data-quickpaper-52b28d76":""},[a("span",{"@click":'doScroll("more")',class:"canlink","data-quickpaper-52b28d76":""},["更多"])])])])]),a("ui-footer",{"data-quickpaper-52b28d76":""},[])])};i.default=e},57:function(a,i,c){"use strict";var n=[],e=null,d=c(0),l=c.n(d);i.a=function(a,i){i=i||0,a=a||document.documentElement;var c=l.a.urlFormat(window.location.href).params.fixed;if(c){var d=document.getElementById("fixed-"+c);if(d){var t=d.offsetTop-i,p=a.scrollTop||0;!function(a,i,c){arguments.length<2&&(i=400);var d={timer:function(a,i,c){if(!a)throw new Error("Tick is required!");var e=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return n.push({id:e,createTime:new Date,tick:a,duration:i,callback:c}),d.start(),e},start:function(){e||(e=setInterval(d.tick,13))},tick:function(){var a,i,c,e,l,t,p,r=n;for((n=[]).length=0,i=0;i<r.length;i++)a=(l=r[i]).createTime,c=l.tick,t=l.duration,e=l.callback,!1,(p=(+new Date-a)/t)>=1&&!0,c(p=p>1?1:p),p<1&&l.id?n.push(l):e&&e(p);n.length<=0&&d.stop()},stop:function(){e&&(clearInterval(e),e=null)}},l=d.timer((function(i){a(i)}),i,c)}((function(i){a.scrollTop=(t-p)*i+p}),500,(function(){a.scrollTop=t}))}}else a.scrollTop=0}},81:function(a,i,c){var n=c(82);"string"==typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);(0,c(2).default)("data-quickpaper-52b28d76",n,!0)},82:function(a,i,c){i=a.exports=c(1)(!1);var n=c(5)(c(15));i.push([a.i,"\n [quickpaper]>div{\n\nmin-width: 1030px;\n\ntext-align: center;\n\npadding: 30px 0;\n\n}\n\n [quickpaper]>div>div{\n\nheight: 100px;\n\ndisplay: inline-block;\n\nvertical-align: top;\n\ntext-align: left;\n\nmargin: 0 15px;\n\n}\n\n [quickpaper]>div>div.content{\n\nwidth: 700px;\n\nbackground-color: #fafafa;\n\nmin-height: calc(100vh - 157px);\n\nheight: 100%;\n\n}\n\n [quickpaper]>div>div.menu{\n\nwidth: 240px;\n\nborder-right: 2px solid #fafafa;\n\nbackground-image: url("+n+");\n\nbackground-repeat: no-repeat;\n\nbackground-position: center 30px;\n\npadding-top: 160px;\n\nheight: 100%;\n\nposition: sticky;\n\ntop: -150px;\n\n}\n\n [quickpaper]>div>div.menu>ul{\n\nmargin-top: 20px;\n\nfont-size: 14px;\n\nfont-weight: 600;\n\ncolor: #000000;\n\n}\n\n [quickpaper]>div>div.menu>ul>li{\n\nlist-style-type: disc;\n\nmargin-left: 20px;\n\n}\n\n [quickpaper]>div>div.menu>ul>li>span{\n\nmargin: 5px 0;\n\ndisplay: inline-block;\n\n}\n",""])}}]);