(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{137:function(e,t,n){var o=n(138);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(2).default)("data-quickpaper-6d1a1d94",o,!0)},138:function(e,t,n){(e.exports=n(1)(!1)).push([e.i,"",""])},155:function(e,t,n){"use strict";n.r(t);var o=n(38),a={methods:{doScroll:function(e){window.sweethome_noRefresh=!0,window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+e,Object(o.a)(document.getElementById("root"),0)}},mounted:function(){Object(o.a)(document.getElementById("root"),0)}};n(137);a.render=function(e){return e("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-6d1a1d94":""},[e("ul",{"data-quickpaper-6d1a1d94":""},[]),e("div",{class:"doc-view","data-quickpaper-6d1a1d94":""},[e("h2",{"data-quickpaper-6d1a1d94":""},["Vue:一套用于构建用户界面的渐进式框架"])])])};t.default=a},38:function(e,t,n){"use strict";var o=[],a=null,i=n(0),r=n.n(i);t.a=function(e,t){t=t||0,e=e||document.documentElement;var n=r.a.urlFormat(window.location.href).params.fixed;if(n){var i=document.getElementById("fixed-"+n);if(i){var c=i.offsetTop-t,d=e.scrollTop||0;!function(e,t,n){arguments.length<2&&(t=400);var i={timer:function(e,t,n){if(!e)throw new Error("Tick is required!");var a=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return o.push({id:a,createTime:new Date,tick:e,duration:t,callback:n}),i.start(),a},start:function(){a||(a=setInterval(i.tick,13))},tick:function(){var e,t,n,a,r,c,d,u=o;for((o=[]).length=0,t=0;t<u.length;t++)e=(r=u[t]).createTime,n=r.tick,c=r.duration,a=r.callback,!1,(d=(+new Date-e)/c)>=1&&!0,n(d=d>1?1:d),d<1&&r.id?o.push(r):a&&a(d);o.length<=0&&i.stop()},stop:function(){a&&(clearInterval(a),a=null)}},r=i.timer((function(t){e(t)}),t,n)}((function(t){e.scrollTop=(c-d)*t+d}),500,(function(){e.scrollTop=c}))}}else e.scrollTop=0}}}]);