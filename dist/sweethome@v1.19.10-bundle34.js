(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{130:function(a,e,p){var f=p(131);"string"==typeof f&&(f=[[a.i,f,""]]),f.locals&&(a.exports=f.locals);(0,p(2).default)("data-quickpaper-00f921fb",f,!0)},131:function(a,e,p){(a.exports=p(1)(!1)).push([a.i,"",""])},205:function(a,e,p){"use strict";p.r(e);var f={};p(130);f.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-00f921fb":""},[a("h2",{"data-quickpaper-00f921fb":""},["正则表达式常用方法和规则整理"]),a("h3",{"data-quickpaper-00f921fb":""},["正则对象方法"]),a("pre",{"q-code":"","data-quickpaper-00f921fb":""},["RegExpObject.exec(string)"]),a("p",{"data-quickpaper-00f921fb":""},["检索字符串中指定的值，如果匹配到，返回格式如下： { 0:'匹配的字符串', 1:'匹配的第一个元祖，如果有的话', 2:'以此类推，第二个元祖', ...... index:'匹配文本的第一个字符的位置',↵        input:'输入的匹配的原来字符串', length:'0,1,2,...的个数' } exec如果匹配不到，返回null。"]),a("p",{class:"warn","data-quickpaper-00f921fb":""},["重要事项：完成了一次模式匹配之后检索新的字符串前应该手动地把正则对象的lastIndex属性重置为 0。"]),a("pre",{"q-code":"","data-quickpaper-00f921fb":""},["RegExpObject.test(string)"]),a("p",{"data-quickpaper-00f921fb":""},["检索字符串中指定的值，如果字符串 string 中含有与RegExpObject匹配的文本，则返回 true，否则返回 false。"]),a("h3",{"data-quickpaper-00f921fb":""},["字符串对象方法"]),a("pre",{"q-code":"","data-quickpaper-00f921fb":""},["stringObject.search(regexp)"]),a("p",{"data-quickpaper-00f921fb":""},["检索与正则表达式相匹配的值，返回stringObject中第一个与regexp相匹配的子串的起始位置，如果没有找到返回-1；search()方法不执行全局匹配，它将忽略标志↵        g。它同时忽略regexp的lastIndex属性，并且总是从字符串的开始进行检索，这意味着它总是返回stringObject的第一个匹配的位置。"]),a("pre",{"q-code":"","data-quickpaper-00f921fb":""},["stringObject.match(searchvalue|regexp)"]),a("p",{"data-quickpaper-00f921fb":""},["找到一个或多个正则表达式的匹配，返回匹配的字符串数组。"]),a("pre",{"q-code":"","data-quickpaper-00f921fb":""},["stringObject.replace(regexp|substr,replacement|function)"]),a("p",{"data-quickpaper-00f921fb":""},["替换与正则表达式匹配的子串。"]),a("p",{class:"warn","data-quickpaper-00f921fb":""},["温馨提示：其中function传递进去的是匹配的字符串，return返回的是最后替换成的，类似管道的写法。"]),a("pre",{"q-code":"","data-quickpaper-00f921fb":""},["stringObject.split(separator[,howmany])"]),a("p",{"data-quickpaper-00f921fb":""},["把字符串分割为字符串数组，返回切割后的数组。"]),a("h3",{"data-quickpaper-00f921fb":""},["零宽断言"]),a("p",{"data-quickpaper-00f921fb":""},["零宽，意味者不会返回匹配的字符；断言，就是预测此处是什么。因此这是一种匹配不返回，只是猜测固定位置应该是什么的存在。"]),a("h4",{"data-quickpaper-00f921fb":""},["匹配目标的后面是exp:(?=exp)"]),a("p",{"data-quickpaper-00f921fb":""},["比如现在需要匹配一个单词是以ing结尾的，但是结尾的ing不捕获，可以这样使用："]),a("pre",{"q-code":"","data-quickpaper-00f921fb":""},['"name-doing-text-heeeing".match(/([a-z]+(?=ing))/g);']),a("p",{"data-quickpaper-00f921fb":""},['返回结果是["do", "heee"]。']),a("h4",{"data-quickpaper-00f921fb":""},["匹配目标的后面不是exp:(?!exp)"]),a("p",{"data-quickpaper-00f921fb":""},["比如现在需要在一个单词里面寻找一些字母，这些字母的下一个字母不可以是e，可以这样使用："]),a("pre",{"q-code":"","data-quickpaper-00f921fb":""},['"dream".match(/([a-z]{1}(?!e))/g);']),a("p",{"data-quickpaper-00f921fb":""},['返回的结果是["d", "e", "a", "m"]']),a("h3",{"data-quickpaper-00f921fb":""},["懒惰限定符"]),a("ol",{"data-quickpaper-00f921fb":""},[a("li",{"data-quickpaper-00f921fb":""},['"*?"【重复任意次，但尽可能少重复】']),a("li",{"data-quickpaper-00f921fb":""},["+?【重复1次或更多次，但尽可能少重复】"]),a("li",{"data-quickpaper-00f921fb":""},["??【重复0次或1次，但尽可能少重复】"]),a("li",{"data-quickpaper-00f921fb":""},["{n,m}?【重复n到m次，但尽可能少重复】"]),a("li",{"data-quickpaper-00f921fb":""},["{n,}?【重复n次以上，但尽可能少重复】"])]),a("h3",{"data-quickpaper-00f921fb":""},["捕获分组"]),a("ol",{"data-quickpaper-00f921fb":""},[a("li",{"data-quickpaper-00f921fb":""},["(exp)【匹配exp,并捕获文本到自动命名的组里】"]),a("li",{"data-quickpaper-00f921fb":""},["(?:exp)【匹配exp,不捕获匹配的文本，也不给此分组分配组号】"])])])};e.default=f}}]);