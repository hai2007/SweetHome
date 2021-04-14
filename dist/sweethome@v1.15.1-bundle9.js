(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{149:function(a,c,e){var p=e(150);"string"==typeof p&&(p=[[a.i,p,""]]),p.locals&&(a.exports=p.locals);(0,e(2).default)("data-quickpaper-364cd5ce",p,!0)},150:function(a,c,e){c=a.exports=e(1)(!1);var p=e(6)(e(151));c.push([a.i,"\n    .box-sizing {\n        height: 300px;\n        background-image: url("+p+");\n        background-repeat: no-repeat;\n        background-position: center center;\n        background-size: contain;\n    }\n",""])},151:function(a,c,e){a.exports=e.p+"dist/box-sizing.jpg"},169:function(a,c,e){"use strict";e.r(c);var p=e(36),d={methods:{doScroll:function(a){window.location.href=(window.location.href+"").replace(/\?fixed=.*$/,"")+"?fixed="+a,Object(p.a)(document.getElementById("root"),0)}},mounted:function(){Object(p.a)(document.getElementById("root"),0)}};e(149);d.render=function(a){return a("div",{class:"learning-page-view",quickpaper:"","data-quickpaper-364cd5ce":""},[a("ul",{"data-quickpaper-364cd5ce":""},[a("li",{"data-quickpaper-364cd5ce":""},[a("span",{"@click":'doScroll("frame")',"data-quickpaper-364cd5ce":""},["页面结构"])]),a("li",{"data-quickpaper-364cd5ce":""},[a("span",{"@click":'doScroll("label")',"data-quickpaper-364cd5ce":""},["标签分类和说明"]),a("ul",{"data-quickpaper-364cd5ce":""},[a("li",{"data-quickpaper-364cd5ce":""},[a("span",{"@click":'doScroll("label-config")',"data-quickpaper-364cd5ce":""},["配置标签"])]),a("li",{"data-quickpaper-364cd5ce":""},[a("span",{"@click":'doScroll("label-lang")',"data-quickpaper-364cd5ce":""},["语言型标签"])]),a("li",{"data-quickpaper-364cd5ce":""},[a("span",{"@click":'doScroll("label-layout")',"data-quickpaper-364cd5ce":""},["内容或布局元素"])]),a("li",{"data-quickpaper-364cd5ce":""},[a("span",{"@click":'doScroll("label-replace")',"data-quickpaper-364cd5ce":""},["替换元素"])]),a("li",{"data-quickpaper-364cd5ce":""},[a("span",{"@click":'doScroll("label-extend")',"data-quickpaper-364cd5ce":""},["扩展元素"])]),a("li",{"data-quickpaper-364cd5ce":""},[a("span",{"@click":'doScroll("label-end")',"data-quickpaper-364cd5ce":""},["小结"])])])])]),a("div",{class:"doc-view","data-quickpaper-364cd5ce":""},[a("h2",{"data-quickpaper-364cd5ce":""},["HTML:超文本标记语言"]),a("p",{"data-quickpaper-364cd5ce":""},["这是一种用来组织网页内容的标记语言（或数据格式），你可以通过它来配置网页的基本结构（配置和内容），后续的所有操作几乎全部是基于此进行的。"]),a("h3",{id:"fixed-frame","data-quickpaper-364cd5ce":""},["页面结构"]),a("pre",{"q-code":"html",id:"examples1","data-quickpaper-364cd5ce":""},['<!DOCTYPE html>↵<html lang="zh-cn">↵↵    \x3c!-- 页面配置 --\x3e↵    <head>↵        <meta charset="UTF-8">↵        <title>学习HTML</title>↵    </head>↵↵    \x3c!-- 页面内容 --\x3e↵    <body>↵        今天，我们来一起学习HTML!↵    </body>↵↵</html>']),a("button",{"ui-goto-example:editor":"examples1","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["上面是页面基本结构，在",a("span",{class:"important","data-quickpaper-364cd5ce":""},["head标签"]),"中对页面进行配置，在",a("span",{class:"important","data-quickpaper-364cd5ce":""},["body标签"]),"中编辑显示内容。我们建议你记住上面这段代码，这有助于你后续的学习！"]),a("h3",{id:"fixed-label","data-quickpaper-364cd5ce":""},["标签分类和说明"]),a("p",{"data-quickpaper-364cd5ce":""},["从上面的基本结构你就可以看到，不同的标签有不同的功能划分，下面，按照我们的理解对标签进行分类并举一些常用的例子。"]),a("h4",{id:"fixed-label-config","data-quickpaper-364cd5ce":""},["配置标签"]),a("p",{"data-quickpaper-364cd5ce":""},["比如开头说明的标签中大部分都是配置标签，这一部分目前对你不是特别重要，你需要记住下面几个常用的即可："]),a("h5",{"data-quickpaper-364cd5ce":""},["设置网页编码："]),a("pre",{"q-code":"html","data-quickpaper-364cd5ce":""},['<meta charset="UTF-8">']),a("h5",{"data-quickpaper-364cd5ce":""},["设置网页标题："]),a("pre",{"q-code":"html","data-quickpaper-364cd5ce":""},["<title>标题</title>"]),a("p",{class:"warn","data-quickpaper-364cd5ce":""},["温馨提示：一定要注意这些标签的位置，下同！"]),a("h4",{id:"fixed-label-lang","data-quickpaper-364cd5ce":""},["语言型标签"]),a("p",{"data-quickpaper-364cd5ce":""},["也就是可以内嵌别的语言的标签，最典型的就是",a("span",{class:"important","data-quickpaper-364cd5ce":""},["sytle标签"]),"和",a("span",{class:"important","data-quickpaper-364cd5ce":""},["script标签"]),"了，一个和css相关，一个和js相关。"]),a("h5",{"data-quickpaper-364cd5ce":""},["sytle标签"]),a("p",{"data-quickpaper-364cd5ce":""},["css用于控制页面的样子（当然是在原有的HTML基础上进行改造，关于css知识后续可以去对应章节学习，这里不用太在意），代码需要写在",a("span",{class:"important","data-quickpaper-364cd5ce":""},["sytle标签"]),"规定的区域。比如我们想让所有的div标签里面的文字变成红色："]),a("pre",{"q-code":"html","data-quickpaper-364cd5ce":""},["<style>↵    div{↵        color:red;↵    }↵</style>"]),a("button",{"ui-goto-example:lazy":"learning_html-style","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["当然，我们也可以把style标签之间的内容写到一个独立的文件中，比如",a("span",{class:"important","data-quickpaper-364cd5ce":""},["style.css"]),"，然后引入："]),a("pre",{"q-code":"html","data-quickpaper-364cd5ce":""},['<link rel="stylesheet" href="style.css">']),a("h5",{"data-quickpaper-364cd5ce":""},["script标签"]),a("p",{"data-quickpaper-364cd5ce":""},["js用于提供页面和用户的交互，代码需要写在",a("span",{class:"important","data-quickpaper-364cd5ce":""},["script标签"]),"规定的区域（关于js部分的代码，你可以先不用太关心）。假设我们现在希望给用户一个弹框提示，代码如下："]),a("pre",{"q-code":"html","data-quickpaper-364cd5ce":""},["<script>↵    alert('温馨提示：你好呀！');↵<\/script>"]),a("button",{"ui-goto-example:lazy":"learning_html-script","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["同样的，我们也可以把script标签之间的内容写入到一个独立的文件中，比如",a("span",{class:"important","data-quickpaper-364cd5ce":""},["script.js"]),"，然后引入："]),a("pre",{"q-code":"html","data-quickpaper-364cd5ce":""},['<script src="script.js"><\/script>']),a("h4",{id:"fixed-label-layout","data-quickpaper-364cd5ce":""},["内容或布局元素"]),a("p",{"data-quickpaper-364cd5ce":""},["这一类标签虽然很多，其实都是一样的，差异主要是由于不同标签的默认样式（比如上面说的文字颜色",a("span",{class:"important","data-quickpaper-364cd5ce":""},["color : red"]),"就是样式）不同导致的，还有就是部分标签有一定的特殊意义，我们来分别说明。"]),a("h5",{"data-quickpaper-364cd5ce":""},["盒子模型"]),a("p",{"data-quickpaper-364cd5ce":""},["在正式开始说明之前，我们有必要简单的说明一下盒子模型。"]),a("div",{class:"box-sizing","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["可以看见，一个元素相当于一个矩形，最里面是内容（content），最外边是边界（border)，内容和边界之间存在一个间距（padding）,而盒子之间也存在一个距离（margin)。"]),a("p",{"data-quickpaper-364cd5ce":""},["盒子还会有两个属性宽和高，来标记这个盒子多大，可以有多种计算方式，你应该记住下面两种计算方式："]),a("ul",{"data-quickpaper-364cd5ce":""},[a("li",{"data-quickpaper-364cd5ce":""},[a("span",{class:"important","data-quickpaper-364cd5ce":""},["标准盒子模型"]),"：这种模型是大部分浏览器默认的模型，计算宽高的时候，只考虑到content的大小。"]),a("li",{"data-quickpaper-364cd5ce":""},[a("span",{class:"important","data-quickpaper-364cd5ce":""},["IE盒子模型"]),"：计算宽高的时候，会把除了margin外的都考虑进去。"])]),a("h5",{"data-quickpaper-364cd5ce":""},["文档流"]),a("p",{"data-quickpaper-364cd5ce":""},["你可以把页面内容中的标签看成一个个盒子（盒子模型-+），默认情况下，按照从左到右，从上往下的顺序排列。而这种排列规则，就叫文档流。"]),a("p",{"data-quickpaper-364cd5ce":""},["下面要说明的这部分标签，他们在文档流中的表现，会有一些差异，记住这些差异是有益的。"]),a("h5",{"data-quickpaper-364cd5ce":""},["div + span + p"]),a("p",{"data-quickpaper-364cd5ce":""},["先来看看",a("span",{class:"important","data-quickpaper-364cd5ce":""},["span标签"]),"，举个例子："]),a("pre",{"q-code":"html",id:"examples2","data-quickpaper-364cd5ce":""},["<span>我</span><span>爱</span><span>你</span><span>，</span>↵<span>中</span><span>国</span><span>。</span>"]),a("button",{"ui-goto-example:editor":"examples2","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["是的，和文档流里面说的一样，文字从左往右一个个排列着。那么，如果换成",a("span",{class:"important","data-quickpaper-364cd5ce":""},["div标签"]),"会怎么样？"]),a("pre",{"q-code":"html",id:"examples3","data-quickpaper-364cd5ce":""},["<div>我</div><div>爱</div><div>你</div><div>，</div>↵<div>中</div><div>国</div><div>。</div>"]),a("button",{"ui-goto-example:editor":"examples3","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["此时你会发现，每个文字独立一行。这是不是说文档流是错误的？其实不然，需要说明的是，文档流的规则是，先从左往右排列，可是，如果一行放不下怎么办？下一行呀。"]),a("p",{"data-quickpaper-364cd5ce":""},["不同标签在文档流中占据的位置的大小计算规则不一样，在默认情况下，span占据的宽取决于里面的内容，而div无论里面内容多少，都是占满一行。"]),a("p",{"data-quickpaper-364cd5ce":""},["我们称span这类元素为",a("span",{class:"important","data-quickpaper-364cd5ce":""},["行内元素（inline）"]),"，而称div这类为",a("span",{class:"important","data-quickpaper-364cd5ce":""},["块级元素（block）"]),"。当然，他们的区别不只是上面提到的这些，先记住这一点就可以了，后续我们会慢慢补充的。"]),a("p",{"data-quickpaper-364cd5ce":""},["好了，你可以想接着试试",a("span",{class:"important","data-quickpaper-364cd5ce":""},["p标签"]),"了："]),a("pre",{"q-code":"html",id:"examples4","data-quickpaper-364cd5ce":""},["<p>我</p><p>爱</p><p>你</p><p>，</p>↵<p>中</p><p>国</p><p>。</p>"]),a("button",{"ui-goto-example:editor":"examples4","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["请注意和div的例子对比，我们会发现，它也是一行行排列的，可是每行之间的距离，好像，比较大。"]),a("p",{"data-quickpaper-364cd5ce":""},["首先需要说明的是，p标签默认是块级元素，这很重要。"]),a("p",{"data-quickpaper-364cd5ce":""},["然后，让我们回忆一下刚刚说明的盒子模型，什么会影响不同盒子之间的距离？是的，外边界margin属性。除了元素类型外（block或者inline等），不同的盒子都会有很多默认属性，这同样会影响在文档流中的最终表现。"]),a("p",{"data-quickpaper-364cd5ce":""},["所以，p标签和div相比，就是多了外边距（div的外边距大小默认为0）。"]),a("h5",{"data-quickpaper-364cd5ce":""},["h1 + h2 + h3 + h4 + h5 + h6"]),a("p",{"data-quickpaper-364cd5ce":""},["刚刚提到的标签，好像除了在文档流中的表现有所不同，好像没有别的区别？接下来，我们来看看几个带有一定语义的标签："]),a("pre",{"q-code":"html",id:"examples5","data-quickpaper-364cd5ce":""},["<h1>一级标题</h1>↵<h2>二级标题</h2>↵<h3>三级标题</h3>↵<h4>四级标题</h4>↵<h5>五级标题</h5>↵<h6>六级标题</h6>"]),a("button",{"ui-goto-example:editor":"examples5","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["可以看见，他们应该是",a("span",{class:"important","data-quickpaper-364cd5ce":""},["块级元素（block）"]),"，所以一行行排列的，并且外边距margin还不为0，然后就是，好像文字大小不一样。"]),a("p",{"data-quickpaper-364cd5ce":""},["再强调一下，不同标签有很多默认属性（后续会说明如何修改），这一类都可以归结到文档流中最终呈现的效果不同的理解上去。"]),a("p",{"data-quickpaper-364cd5ce":""},["而在这里，h1~h6标签更重要的意义体现在其本身的意义，比如一篇文章的题目用h1，每个段落的标题用h2等，虽然使用别的标签可能最终在页面上显示的效果是一样的，可是使用h1~h6更有语义，别人看一眼（看源码的时候）就知道是一个标题等。"]),a("p",{"data-quickpaper-364cd5ce":""},["除此之外，还有很多，比如导航nav、页脚footer、页眉header等，不用一下子都记住，用的多了就记住了。"]),a("h5",{"data-quickpaper-364cd5ce":""},["ul + ol + li"]),a("p",{"data-quickpaper-364cd5ce":""},["前面提到的标签都是一个个独立的，相互之间并没有联系。如果我们有一段文字，需要说明有那些常见的水果，可以试试这样写："]),a("pre",{"q-code":"html",id:"examples6","data-quickpaper-364cd5ce":""},["<h2>常见的水果</h2>↵<ul>↵    <li>苹果</li>↵    <li>梨子</li>↵    <li>橘子</li>↵</ul>"]),a("button",{"ui-goto-example:editor":"examples6","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["其实和使用div或span可以达到同样的效果（不同标签的默认值，都可以通过css进行修改，因此你先无视最终的渲染效果），但是，使用上面的形式会更容易理解不同标签之间的关系，这很重要。"]),a("p",{"data-quickpaper-364cd5ce":""},["好了，让我们把ul换成ol看看："]),a("pre",{"q-code":"html",id:"examples7","data-quickpaper-364cd5ce":""},["<h2>常见的水果</h2>↵<ol>↵    <li>苹果</li>↵    <li>梨子</li>↵    <li>橘子</li>↵</ol>"]),a("button",{"ui-goto-example:editor":"examples7","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["结果所有水果的前面多了一个序号。"]),a("p",{"data-quickpaper-364cd5ce":""},["我们称ol为有序列表，而前面的ul为无序列表。虽然最终渲染效果用谁都一样（借助css来修改默认值），不过，根据不同的内容是否有序来选择，是不是标签的语义就更强了。"]),a("p",{"data-quickpaper-364cd5ce":""},["同样的，除了列表，还有表格table、表单form（这个可能更特殊）等，这类标签包裹的数据之间都具有一定的联系。你不需要一下子记住那么多，慢慢积累就可以了。"]),a("h4",{id:"fixed-label-replace","data-quickpaper-364cd5ce":""},["替换元素"]),a("p",{"data-quickpaper-364cd5ce":""},["我们前面说过，不同的标签都有默认值，所有最终的渲染效果不一样，可是，有一类标签就不一样了，先看个例子："]),a("pre",{"q-code":"html",id:"examples8","data-quickpaper-364cd5ce":""},["<input />"]),a("button",{"ui-goto-example:editor":"examples8","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["是的，你看见了一个可以输入内容的区域，明明我只是写了一个标签呀？"]),a("p",{"data-quickpaper-364cd5ce":""},["我们再看一个例子："]),a("pre",{"q-code":"html",id:"examples9","data-quickpaper-364cd5ce":""},["<img src='https://hai2007.gitee.io/sweethome/dist/keep-study.png' />"]),a("button",{"ui-goto-example:editor":"examples9","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["哇哦，一只好可爱的斑鸠。"]),a("p",{"data-quickpaper-364cd5ce":""},["同样的，这类标签也很多，比如文本域textarea、按钮button等，他们都是为了完成某种特殊功能的。比如这个例子中用到的图片img标签，你通过标签的属性src来告诉它渲染的图片是谁（不同的标签有不同的属性）。"]),a("h4",{id:"fixed-label-extend","data-quickpaper-364cd5ce":""},["扩展元素"]),a("p",{"data-quickpaper-364cd5ce":""},["我把扩展元素分为两类：浏览器内置扩展组件和扩展插件。"]),a("p",{"data-quickpaper-364cd5ce":""},[a("span",{class:"important","data-quickpaper-364cd5ce":""},["浏览器内置扩展组件"]),"中最典型的例子莫过于",a("span",{class:"important","data-quickpaper-364cd5ce":""},["canvas标签"]),"了，这个标签会把其控制的区域变成一个画布，你可以使用该画布提供的方法进行图形的绘制。还是看个简单的例子："]),a("button",{"ui-goto-example:lazy":"learning_html-canvas","data-quickpaper-364cd5ce":""},[]),a("p",{"data-quickpaper-364cd5ce":""},["我们绘制了一个黑色的长方形。当然，可以绘制的足够复杂，不过，这里就点到为止了。"]),a("p",{"data-quickpaper-364cd5ce":""},[a("span",{class:"important","data-quickpaper-364cd5ce":""},["扩展插件"]),"指的是，用于扩展浏览器功能的标签。比如",a("span",{class:"important","data-quickpaper-364cd5ce":""},["object标签"]),"，通过该标签，我们可以和电脑上安装的别的软件进行交互。"]),a("h4",{id:"fixed-label-end","data-quickpaper-364cd5ce":""},["小结"]),a("p",{"data-quickpaper-364cd5ce":""},["我们举这么多例子并不是希望大家都记住这些标签，当然，更不可能让你去记住所有的标签，主要的目的是让你去理解标签。"]),a("p",{"data-quickpaper-364cd5ce":""},["不同的标签肩负着不同的使命，所以以后在遇到一个未知的标签的时候，首先需要去理解，这个标签存在的意义是什么，然后，你就知道，什么时候应该用这个标签，以及怎么用。"])])])};c.default=d},36:function(a,c,e){"use strict";var p=[],d=null,t=e(0),i=e.n(t);c.a=function(a,c){c=c||0,a=a||document.documentElement;var e=i.a.urlFormat(window.location.href).params.fixed;if(e){var t=document.getElementById("fixed-"+e);if(t){var r=t.offsetTop-c,l=a.scrollTop||0;!function(a,c,e){arguments.length<2&&(c=400);var t={timer:function(a,c,e){if(!a)throw new Error("Tick is required!");var d=(new Date).valueOf()+"_"+(1e3*Math.random()).toFixed(0);return p.push({id:d,createTime:new Date,tick:a,duration:c,callback:e}),t.start(),d},start:function(){d||(d=setInterval(t.tick,13))},tick:function(){var a,c,e,d,i,r,l,u=p;for((p=[]).length=0,c=0;c<u.length;c++)a=(i=u[c]).createTime,e=i.tick,r=i.duration,d=i.callback,!1,(l=(+new Date-a)/r)>=1&&!0,e(l=l>1?1:l),l<1&&i.id?p.push(i):d&&d(l);p.length<=0&&t.stop()},stop:function(){d&&(clearInterval(d),d=null)}},i=t.timer((function(c){a(c)}),c,e)}((function(c){a.scrollTop=(r-l)*c+l}),500,(function(){a.scrollTop=r}))}}else a.scrollTop=0}}}]);