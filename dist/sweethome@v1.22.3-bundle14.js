(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{178:function(a,i,e){var r=e(179);"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);(0,e(2).default)("data-quickpaper-3a425a1b",r,!0)},179:function(a,i,e){(a.exports=e(1)(!1)).push([a.i,"",""])},205:function(a,i,e){"use strict";e.r(i);var r=e(59),p={methods:{doScroll:function(a){window.sweethome_noRefresh=!0,window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+a,Object(r.a)(document.getElementById("root"),0)}},mounted:function(){Object(r.a)(document.getElementById("root"),0)}};e(178);p.render=function(a){return a("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-3a425a1b":""},[a("ul",{"data-quickpaper-3a425a1b":""},[a("li",{"data-quickpaper-3a425a1b":""},[a("span",{"@click":'doScroll("grammar")',"data-quickpaper-3a425a1b":""},["语法"]),a("ul",{"data-quickpaper-3a425a1b":""},[a("li",{"data-quickpaper-3a425a1b":""},[a("span",{"@click":'doScroll("grammar-var")',"data-quickpaper-3a425a1b":""},["变量和数据类型"])]),a("li",{"data-quickpaper-3a425a1b":""},[a("span",{"@click":'doScroll("grammar-line")',"data-quickpaper-3a425a1b":""},["语句"]),a("ul",{"data-quickpaper-3a425a1b":""},[a("li",{"data-quickpaper-3a425a1b":""},[a("span",{"@click":'doScroll("grammar-line-if")',"data-quickpaper-3a425a1b":""},["条件语句"])]),a("li",{"data-quickpaper-3a425a1b":""},[a("span",{"@click":'doScroll("grammar-line-switch")',"data-quickpaper-3a425a1b":""},["switch语句"])]),a("li",{"data-quickpaper-3a425a1b":""},[a("span",{"@click":'doScroll("grammar-line-for")',"data-quickpaper-3a425a1b":""},["for循环"])]),a("li",{"data-quickpaper-3a425a1b":""},[a("span",{"@click":'doScroll("grammar-line-while")',"data-quickpaper-3a425a1b":""},["while循环"])]),a("li",{"data-quickpaper-3a425a1b":""},[a("span",{"@click":'doScroll("grammar-line-break-continue")',"data-quickpaper-3a425a1b":""},["break和continue"])])])]),a("li",{"data-quickpaper-3a425a1b":""},[a("span",{"@click":'doScroll("grammar-function")',"data-quickpaper-3a425a1b":""},["函数"])])])])]),a("div",{class:"doc-view","data-quickpaper-3a425a1b":""},[a("h2",{"data-quickpaper-3a425a1b":""},["JavaScript:一门Web端编程语言"]),a("p",{"data-quickpaper-3a425a1b":""},["这是ECMAScript语言在浏览器端的实现，理解这点很重要，前者是规范，后者是实现，这也就意味着除了浏览器端，别的地方理论上也可以写类似js的代码，不过，和浏览器相关的API可能无法使用。"]),a("h3",{id:"fixed-grammar","data-quickpaper-3a425a1b":""},["语法"]),a("h4",{id:"fixed-grammar-var","data-quickpaper-3a425a1b":""},["变量和数据类型"]),"定义一个变量非常简单，就像这样：",a("pre",{"q-code":"","data-quickpaper-3a425a1b":""},["var temp;"]),a("p",{"data-quickpaper-3a425a1b":""},["由于js是弱类型语言，所以和别的语言不同的是，定义的变量可以被赋予任何值。"]),a("p",{"data-quickpaper-3a425a1b":""},["不过，这并不是说js的变量没有类型。js的类型可以分为两大类：基本类型和引用数据类型。"]),a("ul",{"data-quickpaper-3a425a1b":""},[a("li",{"data-quickpaper-3a425a1b":""},[a("span",{class:"important","data-quickpaper-3a425a1b":""},["基本类型"]),"：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol"]),a("li",{"data-quickpaper-3a425a1b":""},[a("span",{class:"important","data-quickpaper-3a425a1b":""},["引用数据类型"]),"：对象(Object)、数组(Array)、函数(Function)"])]),a("p",{class:"warn","data-quickpaper-3a425a1b":""},["温馨提示：Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。"]),a("h4",{id:"fixed-grammar-line","data-quickpaper-3a425a1b":""},["语句"]),a("h5",{id:"fixed-grammar-line-if","data-quickpaper-3a425a1b":""},["条件语句"]),a("ul",{"data-quickpaper-3a425a1b":""},[a("li",{"data-quickpaper-3a425a1b":""},[a("span",{class:"important","data-quickpaper-3a425a1b":""},["if 语句"]),"：只有当指定条件为 true 时，使用该语句来执行代码"]),a("li",{"data-quickpaper-3a425a1b":""},[a("span",{class:"important","data-quickpaper-3a425a1b":""},["if...else 语句"]),"：当条件为 true 时执行代码，当条件为 false 时执行其他代码"]),a("li",{"data-quickpaper-3a425a1b":""},[a("span",{class:"important","data-quickpaper-3a425a1b":""},["if...else if....else 语句"]),"：使用该语句来选择多个代码块之一来执行"])]),a("h5",{id:"fixed-grammar-line-switch","data-quickpaper-3a425a1b":""},["switch语句"]),a("pre",{"q-code":"","data-quickpaper-3a425a1b":""},["switch(n)↵{↵    case 1:↵        执行代码块 1↵        break;↵    case 2:↵        执行代码块 2↵        break;↵    default:↵        与 case 1 和 case 2 不同时执行的代码↵}"]),a("p",{"data-quickpaper-3a425a1b":""},["需要注意的是，switch中使用的是",a("span",{class:"important","data-quickpaper-3a425a1b":""},["==="]),"来判断的。"]),a("h5",{id:"fixed-grammar-line-for","data-quickpaper-3a425a1b":""},["for循环"]),a("ul",{"data-quickpaper-3a425a1b":""},[a("li",{"data-quickpaper-3a425a1b":""},[a("span",{class:"important","data-quickpaper-3a425a1b":""},["for"]),"：循环代码块一定的次数"]),a("li",{"data-quickpaper-3a425a1b":""},[a("span",{class:"important","data-quickpaper-3a425a1b":""},["for/in"]),"： 循环遍历对象的属性"])]),a("h5",{id:"fixed-grammar-line-while","data-quickpaper-3a425a1b":""},["while循环"]),a("ul",{"data-quickpaper-3a425a1b":""},[a("li",{"data-quickpaper-3a425a1b":""},[a("span",{class:"important","data-quickpaper-3a425a1b":""},["while"]),"：当指定的条件为 true 时循环指定的代码块"]),a("li",{"data-quickpaper-3a425a1b":""},[a("span",{class:"important","data-quickpaper-3a425a1b":""},["do/while"]),"：同样当指定的条件为 true 时循环指定的代码块"])]),a("h5",{id:"fixed-grammar-line-break-continue","data-quickpaper-3a425a1b":""},["break和continue"]),a("p",{"data-quickpaper-3a425a1b":""},["break表示终止循环，continue表示结束本次循环。"]),a("h4",{id:"fixed-grammar-function","data-quickpaper-3a425a1b":""},["函数"]),a("pre",{"q-code":"","data-quickpaper-3a425a1b":""},["function 函数名称(参数){↵    // 里面写语句↵}"]),a("p",{"data-quickpaper-3a425a1b":""},["需要特别说明的是，对于用",a("span",{class:"important","data-quickpaper-3a425a1b":""},["var"]),"定义的变量，只有全局和函数会出现新的作用域，不存在块作用域。"])])])};i.default=p},59:function(a,i,e){"use strict";var r=[],p=null,t=e(0),c=e.n(t);i.a=function(a,i){i=i||0,a=a||document.documentElement;var e=c.a.urlFormat(window.location.href).params.fixed;if(e){var t=document.getElementById("fixed-"+e);if(t){var n=t.offsetTop-i,l=a.scrollTop||0;!function(a,i,e){arguments.length<2&&(i=400);var t={timer:function(a,i,e){if(!a)throw new Error("Tick is required!");var p=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return r.push({id:p,createTime:new Date,tick:a,duration:i,callback:e}),t.start(),p},start:function(){p||(p=setInterval(t.tick,13))},tick:function(){var a,i,e,p,c,n,l,d=r;for((r=[]).length=0,i=0;i<d.length;i++)a=(c=d[i]).createTime,e=c.tick,n=c.duration,p=c.callback,!1,(l=(+new Date-a)/n)>=1&&!0,e(l=l>1?1:l),l<1&&c.id?r.push(c):p&&p(l);r.length<=0&&t.stop()},stop:function(){p&&(clearInterval(p),p=null)}},c=t.timer((function(i){a(i)}),i,e)}((function(i){a.scrollTop=(n-l)*i+l}),500,(function(){a.scrollTop=n}))}}else a.scrollTop=0}}}]);