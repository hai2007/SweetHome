(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{37:function(c,d,a){var t=a(38);"string"==typeof t&&(t=[[c.i,t,""]]),t.locals&&(c.exports=t.locals);(0,a(3).default)("data-icrush-c51dd3c8",t,!0)},38:function(c,d,a){(c.exports=a(2)(!1)).push([c.i,"",""])},48:function(c,d,a){"use strict";a.r(d);var t={};a(37);t.render=function(c){return c("div",{class:"doc-view","data-icrush-c51dd3c8":""},[c("h2",{"data-icrush-c51dd3c8":""},["RegExp"]),c("h3",{"data-icrush-c51dd3c8":""},["正则对象方法"]),c("pre",{"ui-code":"","data-icrush-c51dd3c8":""},["RegExpObject.exec(string)"]),c("p",{"data-icrush-c51dd3c8":""},["检索字符串中指定的值，如果匹配到，返回格式如下： { 0:'匹配的字符串', 1:'匹配的第一个元祖，如果有的话', 2:'以此类推，第二个元祖', ...... index:'匹配文本的第一个字符的位置',↵            input:'输入的匹配的原来字符串', length:'0,1,2,...的个数' } exec如果匹配不到，返回null。"]),c("p",{class:"warn","data-icrush-c51dd3c8":""},["重要事项：完成了一次模式匹配之后检索新的字符串前应该手动地把正则对象的lastIndex属性重置为 0。"]),c("pre",{"ui-code":"","data-icrush-c51dd3c8":""},["RegExpObject.test(string)"]),c("p",{"data-icrush-c51dd3c8":""},["检索字符串中指定的值，如果字符串 string 中含有与RegExpObject匹配的文本，则返回 true，否则返回 false。"]),c("h3",{"data-icrush-c51dd3c8":""},["字符串对象方法"]),c("pre",{"ui-code":"","data-icrush-c51dd3c8":""},["stringObject.search(regexp)"]),c("p",{"data-icrush-c51dd3c8":""},["检索与正则表达式相匹配的值，返回stringObject中第一个与regexp相匹配的子串的起始位置，如果没有找到返回-1；search()方法不执行全局匹配，它将忽略标志↵            g。它同时忽略regexp的lastIndex属性，并且总是从字符串的开始进行检索，这意味着它总是返回stringObject的第一个匹配的位置。"]),c("pre",{"ui-code":"","data-icrush-c51dd3c8":""},["stringObject.match(searchvalue|regexp)"]),c("p",{"data-icrush-c51dd3c8":""},["找到一个或多个正则表达式的匹配，返回匹配的字符串数组。"]),c("pre",{"ui-code":"","data-icrush-c51dd3c8":""},["stringObject.replace(regexp|substr,replacement|function)"]),c("p",{"data-icrush-c51dd3c8":""},["替换与正则表达式匹配的子串。"]),c("p",{class:"warn","data-icrush-c51dd3c8":""},["温馨提示：其中function传递进去的是匹配的字符串，return返回的是最后替换成的，类似管道的写法。"]),c("pre",{"ui-code":"","data-icrush-c51dd3c8":""},["stringObject.split(separator[,howmany])"]),c("p",{"data-icrush-c51dd3c8":""},["把字符串分割为字符串数组，返回切割后的数组。"]),c("h3",{"data-icrush-c51dd3c8":""},["零宽断言"]),c("p",{"data-icrush-c51dd3c8":""},["零宽，意味者不会返回匹配的字符；断言，就是预测此处是什么。因此这是一种匹配不返回，只是猜测固定位置应该是什么的存在。"]),c("h4",{"data-icrush-c51dd3c8":""},["1.匹配目标的后面是exp:(?=exp)"]),c("p",{"data-icrush-c51dd3c8":""},["比如现在需要匹配一个单词是以ing结尾的，但是结尾的ing不捕获，可以这样使用："]),c("pre",{"ui-code":"","data-icrush-c51dd3c8":""},['"name-doing-text-heeeing".match(/([a-z]+(?=ing))/g)']),c("p",{"data-icrush-c51dd3c8":""},['返回结果是["do", "heee"]。']),c("h4",{"data-icrush-c51dd3c8":""},["2.匹配目标的后面不是exp:(?!exp)"]),c("p",{"data-icrush-c51dd3c8":""},["比如现在需要在一个单词里面寻找一些字母，这些字母的下一个字母不可以是e，可以这样使用："]),c("pre",{"ui-code":"","data-icrush-c51dd3c8":""},['"dream".match(/([a-z]{1}(?!e))/g)']),c("p",{"data-icrush-c51dd3c8":""},['返回的结果是["d", "e", "a", "m"]']),c("h3",{"data-icrush-c51dd3c8":""},["懒惰限定符"]),c("ul",{"data-icrush-c51dd3c8":""},[c("li",{"data-icrush-c51dd3c8":""},[c("span",{class:"important","data-icrush-c51dd3c8":""},["*?"]),"：重复任意次，但尽可能少重复"]),c("li",{"data-icrush-c51dd3c8":""},[c("span",{class:"important","data-icrush-c51dd3c8":""},["+?"]),"：重复1次或更多次，但尽可能少重复"]),c("li",{"data-icrush-c51dd3c8":""},[c("span",{class:"important","data-icrush-c51dd3c8":""},["??"]),"：重复0次或1次，但尽可能少重复"]),c("li",{"data-icrush-c51dd3c8":""},[c("span",{class:"important","data-icrush-c51dd3c8":""},["{n,m}?"]),"：重复n到m次，但尽可能少重复"]),c("li",{"data-icrush-c51dd3c8":""},[c("span",{class:"important","data-icrush-c51dd3c8":""},["{n,}?"]),"：重复n次以上，但尽可能少重复"])]),c("h3",{"data-icrush-c51dd3c8":""},["捕获分组"]),c("ul",{"data-icrush-c51dd3c8":""},[c("li",{"data-icrush-c51dd3c8":""},[c("span",{class:"important","data-icrush-c51dd3c8":""},["(exp)"]),"：匹配exp,并捕获文本到自动命名的组里"]),c("li",{"data-icrush-c51dd3c8":""},[c("span",{class:"important","data-icrush-c51dd3c8":""},["(?:exp)"]),"：匹配exp,不捕获匹配的文本，也不给此分组分配组号"])])])};d.default=t}}]);