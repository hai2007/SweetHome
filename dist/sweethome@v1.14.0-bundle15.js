(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{128:function(a,e,t){var p=t(129);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,t(2).default)("data-quickpaper-fe4a775e",p,!0)},129:function(a,e,t){(a.exports=t(1)(!1)).push([a.i,"",""])},140:function(a,e,t){"use strict";t.r(e);var p=t(33),i={methods:{doScroll:function(a){window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+a,Object(p.a)(document.getElementById("root"),0)}},mounted:function(){Object(p.a)(document.getElementById("root"),0)}};t(128);i.render=function(a){return a("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-fe4a775e":""},[a("ul",{"data-quickpaper-fe4a775e":""},[a("li",{"data-quickpaper-fe4a775e":""},[a("span",{"@click":'doScroll("guider")',"data-quickpaper-fe4a775e":""},["CSS简介"])]),a("li",{"data-quickpaper-fe4a775e":""},[a("span",{"@click":'doScroll("selector")',"data-quickpaper-fe4a775e":""},["选择器"]),a("ul",{"data-quickpaper-fe4a775e":""},[a("li",{"data-quickpaper-fe4a775e":""},[a("span",{"@click":'doScroll("selector-grammar")',"data-quickpaper-fe4a775e":""},["基本写法"])]),a("li",{"data-quickpaper-fe4a775e":""},[a("span",{"@click":'doScroll("selector-priority")',"data-quickpaper-fe4a775e":""},["如何判定优先级？"])])])]),a("li",{"data-quickpaper-fe4a775e":""},[a("span",{"@click":'doScroll("attribute")',"data-quickpaper-fe4a775e":""},["样式属性举例"]),a("ul",{"data-quickpaper-fe4a775e":""},[a("li",{"data-quickpaper-fe4a775e":""},[a("span",{"@click":'doScroll("attribute-font")',"data-quickpaper-fe4a775e":""},["文字相关"])])])])]),a("div",{class:"doc-view","data-quickpaper-fe4a775e":""},[a("h2",{"data-quickpaper-fe4a775e":""},["CSS:层叠样式表"]),a("p",{"data-quickpaper-fe4a775e":""},["与其说CSS是一门编程语言，不如说CSS是一门配置语言，通过配置的方式来控制页面内容应该长什么样子。不过，这并不意味着这是一门很容易的语言，相反，配置项之间存在的相互影响恰恰导致了上手容易却很难真正掌握的窘境。"]),a("p",{"data-quickpaper-fe4a775e":""},["幸运的是，也恰恰是这一层微妙的关系，或许可以为你理解什么是编程语言带来不一样的思考。"]),a("h3",{id:"fixed-guider","data-quickpaper-fe4a775e":""},["CSS简介"]),a("p",{"data-quickpaper-fe4a775e":""},["简单的理解就是，等html把页面内容组织完成以后，css来控制他们如何显示。"]),a("p",{"data-quickpaper-fe4a775e":""},["具体就牵扯到两方面："]),a("ol",{"data-quickpaper-fe4a775e":""},[a("li",{"data-quickpaper-fe4a775e":""},[a("span",{class:"important","data-quickpaper-fe4a775e":""},["选择谁？"]),"首先需要确定修改哪个标签的样式。"]),a("li",{"data-quickpaper-fe4a775e":""},[a("span",{class:"important","data-quickpaper-fe4a775e":""},["修改什么样式？"]),"确定修改谁以后，需要进一步确定修改该标签的哪个样式。"])]),a("h3",{id:"fixed-selector","data-quickpaper-fe4a775e":""},["选择器"]),a("p",{"data-quickpaper-fe4a775e":""},["选择器的作用就是确定修改哪个标签的样式，你可以",a("a",{href:"#/cssSelector",target:"_blank",class:"link","data-quickpaper-fe4a775e":""},["点击此处"]),"查看所有的选择器。"]),a("h4",{id:"fixed-selector-grammar","data-quickpaper-fe4a775e":""},["基本写法"]),a("pre",{"q-code":"css","data-quickpaper-fe4a775e":""},["选择器 {↵    样式属性1名：值1;↵    ......↵}"]),a("p",{"data-quickpaper-fe4a775e":""},["我们来举个例子："]),a("pre",{"q-code":"html",id:"examples1","data-quickpaper-fe4a775e":""},["<div>↵    我爱你，中国？↵</div>↵<style>↵    div{↵        color:red;↵        font-size:30px;↵    }↵</style>"]),a("button",{"ui-goto-example:editor":"examples1","data-quickpaper-fe4a775e":""},[]),a("p",{"data-quickpaper-fe4a775e":""},["上面，我们选中了div元素，并且设置了此标签的文字颜色为红色，文字大小为30px。"]),a("h4",{id:"fixed-selector-priority","data-quickpaper-fe4a775e":""},["如何判定优先级？"]),a("p",{"data-quickpaper-fe4a775e":""},["选择的情况变了，稍微改造一下代码："]),a("pre",{"q-code":"html",id:"examples2","data-quickpaper-fe4a775e":""},["<div class='text'>↵    我爱你，中国？↵</div>↵<style>↵    .text{↵        color:green;↵    }↵    div{↵        color:red;↵        font-size:30px;↵    }↵</style>"]),a("button",{"ui-goto-example:editor":"examples2","data-quickpaper-fe4a775e":""},[]),a("p",{"data-quickpaper-fe4a775e":""},["我写了两组规则，其实都对文字颜色进行了设置，运行结果可以看到，文字最终显示为绿色。"]),a("p",{"data-quickpaper-fe4a775e":""},["那么，对于上面这种情况，在属性设置重复的情况下，谁会生效，就牵扯到选择器的优先级问题。"]),a("p",{"data-quickpaper-fe4a775e":""},["不同的选择器我们进行了5个等级的定义："]),a("ul",{"data-quickpaper-fe4a775e":""},[a("li",{"data-quickpaper-fe4a775e":""},[a("span",{class:"important","data-quickpaper-fe4a775e":""},["第一等级"]),'：代表内联样式，如style=""，权值为 1000']),a("li",{"data-quickpaper-fe4a775e":""},[a("span",{class:"important","data-quickpaper-fe4a775e":""},["第二等级"]),"：代表id选择器，如#content，权值为0100"]),a("li",{"data-quickpaper-fe4a775e":""},[a("span",{class:"important","data-quickpaper-fe4a775e":""},["第三等级"]),"：代表类，伪类和属性选择器，如.content，权值为0010"]),a("li",{"data-quickpaper-fe4a775e":""},[a("span",{class:"important","data-quickpaper-fe4a775e":""},["第四等级"]),"：代表标签选择器和伪元素选择器，如div、p，权值为0001"]),a("li",{"data-quickpaper-fe4a775e":""},[a("span",{class:"important","data-quickpaper-fe4a775e":""},["第五等级"]),"：通用选择器（*），子选择器（>），和相邻同胞选择器（+）等，权值为0000"])]),a("p",{"data-quickpaper-fe4a775e":""},["现在再来看看刚刚的两个选择器，",a("span",{class:"warn","data-quickpaper-fe4a775e":""},[".text"]),"是类选择器，第三等级，所以是0010，而",a("span",{class:"warn","data-quickpaper-fe4a775e":""},["div"]),"是标签选择器，第四等级，所以是0001，自然",a("span",{class:"warn","data-quickpaper-fe4a775e":""},[".text"]),"优先级更高。"]),a("p",{"data-quickpaper-fe4a775e":""},["上面是单一的选择器，如果一个选择器是复合的，怎么计算权值？举个例子："]),a("pre",{"q-code":"","data-quickpaper-fe4a775e":""},["div.page-view.top"]),a("p",{"data-quickpaper-fe4a775e":""},["可以看到，一个标签选择器和两个类选择器，也就是："]),a("pre",{"q-code":"","data-quickpaper-fe4a775e":""},["0001 + 0010 + 0010 = 0021"]),a("p",{"data-quickpaper-fe4a775e":""},["最后，还要补充一点，如果两个选择器的优先级一样大，后出现的优先级更高。"]),a("h3",{id:"fixed-attribute","data-quickpaper-fe4a775e":""},["样式属性举例"]),a("h4",{id:"fixed-attribute-font","data-quickpaper-fe4a775e":""},["文字相关"]),a("pre",{"q-code":"html",id:"examples3","data-quickpaper-fe4a775e":""},["<div>↵    我爱你，中国！↵</div>↵<style>↵    div{↵        font-size:60px; /*文字大小*/↵        font-family: cursive;/*字体*/↵        font-weight: 800;/*文字粗细程度*/↵        font-style: italic;/*文字类型*/↵        color:pink;/*文字颜色*/↵    }↵</style>"]),a("button",{"ui-goto-example:editor":"examples3","data-quickpaper-fe4a775e":""},[])])])};e.default=i},33:function(a,e,t){"use strict";var p=[],i=null,r=t(0),c=t.n(r);e.a=function(a,e){e=e||0,a=a||document.documentElement;var t=c.a.urlFormat(window.location.href).params.fixed;if(t){var r=document.getElementById("fixed-"+t);if(r){var d=r.offsetTop-e,o=a.scrollTop||0;!function(a,e,t){arguments.length<2&&(e=400);var r={timer:function(a,e,t){if(!a)throw new Error("Tick is required!");var i=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return p.push({id:i,createTime:new Date,tick:a,duration:e,callback:t}),r.start(),i},start:function(){i||(i=setInterval(r.tick,13))},tick:function(){var a,e,t,i,c,d,o,l=p;for((p=[]).length=0,e=0;e<l.length;e++)a=(c=l[e]).createTime,t=c.tick,d=c.duration,i=c.callback,!1,(o=(+new Date-a)/d)>=1&&!0,t(o=o>1?1:o),o<1&&c.id?p.push(c):i&&i(o);p.length<=0&&r.stop()},stop:function(){i&&(clearInterval(i),i=null)}},c=r.timer((function(e){a(e)}),e,t)}((function(e){a.scrollTop=(d-o)*e+o}),500,(function(){a.scrollTop=d}))}}else a.scrollTop=0}}}]);