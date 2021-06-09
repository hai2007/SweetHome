(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{131:function(a,i,e){var r=e(132);"string"==typeof r&&(r=[[a.i,r,""]]),r.locals&&(a.exports=r.locals);(0,e(2).default)("data-quickpaper-14a4bd4a",r,!0)},132:function(a,i,e){(a.exports=e(1)(!1)).push([a.i,"",""])},152:function(a,i,e){"use strict";e.r(i);var r=e(38),d={methods:{doScroll:function(a){window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+a,Object(r.a)(document.getElementById("root"),0)}},mounted:function(){Object(r.a)(document.getElementById("root"),0)}};e(131);d.render=function(a){return a("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-14a4bd4a":""},[a("ul",{"data-quickpaper-14a4bd4a":""},[a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{"@click":'doScroll("grammar")',"data-quickpaper-14a4bd4a":""},["语法"]),a("ul",{"data-quickpaper-14a4bd4a":""},[a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{"@click":'doScroll("grammar-var")',"data-quickpaper-14a4bd4a":""},["变量和数据类型"])]),a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{"@click":'doScroll("grammar-line")',"data-quickpaper-14a4bd4a":""},["语句"]),a("ul",{"data-quickpaper-14a4bd4a":""},[a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{"@click":'doScroll("grammar-line-if")',"data-quickpaper-14a4bd4a":""},["条件语句"])]),a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{"@click":'doScroll("grammar-line-switch")',"data-quickpaper-14a4bd4a":""},["switch语句"])]),a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{"@click":'doScroll("grammar-line-for")',"data-quickpaper-14a4bd4a":""},["for循环"])]),a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{"@click":'doScroll("grammar-line-while")',"data-quickpaper-14a4bd4a":""},["while循环"])]),a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{"@click":'doScroll("grammar-line-break-continue")',"data-quickpaper-14a4bd4a":""},["break和continue"])])])]),a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{"@click":'doScroll("grammar-function")',"data-quickpaper-14a4bd4a":""},["函数"])])])])]),a("div",{class:"doc-view","data-quickpaper-14a4bd4a":""},[a("h2",{"data-quickpaper-14a4bd4a":""},["JavaScript:一门Web端编程语言"]),a("p",{"data-quickpaper-14a4bd4a":""},["这是ECMAScript语言在浏览器端的实现，理解这点很重要，前者是规范，后者是实现，这也就意味着除了浏览器端，别的地方理论上也可以写类似js的代码，不过，和浏览器相关的API可能无法使用。"]),a("h3",{id:"fixed-grammar","data-quickpaper-14a4bd4a":""},["语法"]),a("h4",{id:"fixed-grammar-var","data-quickpaper-14a4bd4a":""},["变量和数据类型"]),"定义一个变量非常简单，就像这样：",a("pre",{"q-code":"","data-quickpaper-14a4bd4a":""},["var temp;"]),a("p",{"data-quickpaper-14a4bd4a":""},["由于js是弱类型语言，所以和别的语言不同的是，定义的变量可以被赋予任何值。"]),a("p",{"data-quickpaper-14a4bd4a":""},["不过，这并不是说js的变量没有类型。js的类型可以分为两大类：基本类型和引用数据类型。"]),a("ul",{"data-quickpaper-14a4bd4a":""},[a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{class:"important","data-quickpaper-14a4bd4a":""},["基本类型"]),"：字符串（String）、数字(Number)、布尔(Boolean)、对空（Null）、未定义（Undefined）、Symbol"]),a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{class:"important","data-quickpaper-14a4bd4a":""},["引用数据类型"]),"：对象(Object)、数组(Array)、函数(Function)"])]),a("p",{class:"warn","data-quickpaper-14a4bd4a":""},["温馨提示：Symbol 是 ES6 引入了一种新的原始数据类型，表示独一无二的值。"]),a("h4",{id:"fixed-grammar-line","data-quickpaper-14a4bd4a":""},["语句"]),a("h5",{id:"fixed-grammar-line-if","data-quickpaper-14a4bd4a":""},["条件语句"]),a("ul",{"data-quickpaper-14a4bd4a":""},[a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{class:"important","data-quickpaper-14a4bd4a":""},["if 语句"]),"：只有当指定条件为 true 时，使用该语句来执行代码"]),a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{class:"important","data-quickpaper-14a4bd4a":""},["if...else 语句"]),"：当条件为 true 时执行代码，当条件为 false 时执行其他代码"]),a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{class:"important","data-quickpaper-14a4bd4a":""},["if...else if....else 语句"]),"：使用该语句来选择多个代码块之一来执行"])]),a("h5",{id:"fixed-grammar-line-switch","data-quickpaper-14a4bd4a":""},["switch语句"]),a("pre",{"q-code":"","data-quickpaper-14a4bd4a":""},["switch(n)↵{↵    case 1:↵        执行代码块 1↵        break;↵    case 2:↵        执行代码块 2↵        break;↵    default:↵        与 case 1 和 case 2 不同时执行的代码↵}"]),a("p",{"data-quickpaper-14a4bd4a":""},["需要注意的是，switch中使用的是",a("span",{class:"important","data-quickpaper-14a4bd4a":""},["==="]),"来判断的。"]),a("h5",{id:"fixed-grammar-line-for","data-quickpaper-14a4bd4a":""},["for循环"]),a("ul",{"data-quickpaper-14a4bd4a":""},[a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{class:"important","data-quickpaper-14a4bd4a":""},["for"]),"：循环代码块一定的次数"]),a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{class:"important","data-quickpaper-14a4bd4a":""},["for/in"]),"： 循环遍历对象的属性"])]),a("h5",{id:"fixed-grammar-line-while","data-quickpaper-14a4bd4a":""},["while循环"]),a("ul",{"data-quickpaper-14a4bd4a":""},[a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{class:"important","data-quickpaper-14a4bd4a":""},["while"]),"：当指定的条件为 true 时循环指定的代码块"]),a("li",{"data-quickpaper-14a4bd4a":""},[a("span",{class:"important","data-quickpaper-14a4bd4a":""},["do/while"]),"：同样当指定的条件为 true 时循环指定的代码块"])]),a("h5",{id:"fixed-grammar-line-break-continue","data-quickpaper-14a4bd4a":""},["break和continue"]),a("p",{"data-quickpaper-14a4bd4a":""},["break表示终止循环，continue表示结束本次循环。"]),a("h4",{id:"fixed-grammar-function","data-quickpaper-14a4bd4a":""},["函数"]),a("pre",{"q-code":"","data-quickpaper-14a4bd4a":""},["function 函数名称(参数){↵    // 里面写语句↵}"]),a("p",{"data-quickpaper-14a4bd4a":""},["需要特别说明的是，对于用",a("span",{class:"important","data-quickpaper-14a4bd4a":""},["var"]),"定义的变量，只有全局和函数会出现新的作用域，不存在块作用域。"])])])};i.default=d},38:function(a,i,e){"use strict";var r=[],d=null,p=e(0),t=e.n(p);i.a=function(a,i){i=i||0,a=a||document.documentElement;var e=t.a.urlFormat(window.location.href).params.fixed;if(e){var p=document.getElementById("fixed-"+e);if(p){var c=p.offsetTop-i,n=a.scrollTop||0;!function(a,i,e){arguments.length<2&&(i=400);var p={timer:function(a,i,e){if(!a)throw new Error("Tick is required!");var d=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return r.push({id:d,createTime:new Date,tick:a,duration:i,callback:e}),p.start(),d},start:function(){d||(d=setInterval(p.tick,13))},tick:function(){var a,i,e,d,t,c,n,l=r;for((r=[]).length=0,i=0;i<l.length;i++)a=(t=l[i]).createTime,e=t.tick,c=t.duration,d=t.callback,!1,(n=(+new Date-a)/c)>=1&&!0,e(n=n>1?1:n),n<1&&t.id?r.push(t):d&&d(n);r.length<=0&&p.stop()},stop:function(){d&&(clearInterval(d),d=null)}},t=p.timer((function(i){a(i)}),i,e)}((function(i){a.scrollTop=(c-n)*i+n}),500,(function(){a.scrollTop=c}))}}else a.scrollTop=0}}}]);