(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{160:function(e,n,a){"use strict";a.r(n);a(37);var t=a(33),c={data:function(){return{page:null}},methods:{openRouter:function(e,n){var a=this;this.goRouter((function(e){a.page=e,window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+n,Object(t.a)(document.getElementById("root"),44)}),["code",e])}},mounted:function(){var e=this;this.loadRouter((function(n){return e.page=n}),2),this.changeActive("menu-1","code")}};a(89);c.render=function(e){return e("div",{class:"book-menu-view",quickpaper:"","data-quickpaper-6c9fe78c":""},[e("div",{"data-quickpaper-6c9fe78c":""},[e("div",{class:"menu","data-quickpaper-6c9fe78c":""},[e("div",{"@click":'openRouter("angular1","top")',class:"menu-2 angular1","data-quickpaper-6c9fe78c":""},["一、Angular1"]),e("ul",{"data-quickpaper-6c9fe78c":""},[e("li",{"data-quickpaper-6c9fe78c":""},[e("span",{"@click":'openRouter("angular1","view-model")',"data-quickpaper-6c9fe78c":""},["视图和model之间的数据格式化"])]),e("li",{"data-quickpaper-6c9fe78c":""},[e("span",{"@click":'openRouter("angular1","nosync")',"data-quickpaper-6c9fe78c":""},["视图和model数据不同步问题"])]),e("li",{"data-quickpaper-6c9fe78c":""},[e("span",{"@click":'openRouter("angular1","form-validate")',"data-quickpaper-6c9fe78c":""},["表单控制"])])]),e("div",{"@click":'openRouter("vue2","top")',class:"menu-2 vue2","data-quickpaper-6c9fe78c":""},["二、Vue2"]),e("ul",{"data-quickpaper-6c9fe78c":""},[e("li",{"data-quickpaper-6c9fe78c":""},[e("span",{"@click":'openRouter("vue2","components")',"data-quickpaper-6c9fe78c":""},["动态组件"])]),e("li",{"data-quickpaper-6c9fe78c":""},[e("span",{"@click":'openRouter("vue2","nosync")',"data-quickpaper-6c9fe78c":""},["视图和model数据不同步问题"])])])]),e("div",{class:"content","data-quickpaper-6c9fe78c":""},[e("component",{":is":"page","data-quickpaper-6c9fe78c":""},[])])])])};n.default=c},33:function(e,n,a){"use strict";var t=[],c=null,i=a(0),o=a.n(i);n.a=function(e,n){n=n||0,e=e||document.documentElement;var a=o.a.urlFormat(window.location.href).params.fixed;if(a){var i=document.getElementById("fixed-"+a);if(i){var r=i.offsetTop-n,p=e.scrollTop||0;!function(e,n,a){arguments.length<2&&(n=400);var i={timer:function(e,n,a){if(!e)throw new Error("Tick is required!");var c=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return t.push({id:c,createTime:new Date,tick:e,duration:n,callback:a}),i.start(),c},start:function(){c||(c=setInterval(i.tick,13))},tick:function(){var e,n,a,c,o,r,p,u=t;for((t=[]).length=0,n=0;n<u.length;n++)e=(o=u[n]).createTime,a=o.tick,r=o.duration,c=o.callback,!1,(p=(+new Date-e)/r)>=1&&!0,a(p=p>1?1:p),p<1&&o.id?t.push(o):c&&c(p);t.length<=0&&i.stop()},stop:function(){c&&(clearInterval(c),c=null)}},o=i.timer((function(n){e(n)}),n,a)}((function(n){e.scrollTop=(r-p)*n+p}),500,(function(){e.scrollTop=r}))}}else e.scrollTop=0}},37:function(e,n,a){var t=a(38);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,a(2).default)("data-quickpaper-2c7f3315",t,!1)},38:function(e,n,a){(e.exports=a(1)(!1)).push([e.i,".book-menu-view>header {\n    font-size: 30px;\n    padding: 30px 10px;\n    font-weight: 800;\n    border-bottom: 1px solid rgb(173, 168, 168);\n}\n\n.book-menu-view>div {\n    font-size: 0;\n    white-space: nowrap;\n}\n\n.book-menu-view>div>div {\n    white-space: normal;\n    font-size: 14px;\n    display: inline-block;\n    vertical-align: top;\n}\n\n.book-menu-view .menu {\n    width: 260px;\n    padding: 10px;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 70px;\n}\n\n.book-menu-view .menu>div {\n    padding: 10px 0 3px 0;\n    cursor: pointer;\n}\n\n.book-menu-view .menu>div[active='yes'] {\n    color: red;\n}\n\n.book-menu-view .content {\n    width: 740px;\n}\n\n.book-menu-view ul {\n    margin-left: 20px;\n    line-height: 2em;\n}\n\n.book-menu-view li {\n    cursor: pointer;\n}\n",""])},89:function(e,n,a){var t=a(90);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,a(2).default)("data-quickpaper-6c9fe78c",t,!0)},90:function(e,n,a){(e.exports=a(1)(!1)).push([e.i,"",""])}}]);