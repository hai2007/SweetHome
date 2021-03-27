(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{100:function(b,a,p){(b.exports=p(1)(!1)).push([b.i,"",""])},149:function(b,a,p){"use strict";p.r(a);var c={};p(99);c.render=function(b){return b("div",{quickpaper:"","data-quickpaper-bb28bbfc":""},[b("div",{class:"doc-view","data-quickpaper-bb28bbfc":""},[b("h2",{"data-quickpaper-bb28bbfc":""},["RegExp"]),b("h3",{"data-quickpaper-bb28bbfc":""},["正则对象方法"]),b("pre",{"q-code":"","data-quickpaper-bb28bbfc":""},["RegExpObject.exec(string)"]),b("p",{"data-quickpaper-bb28bbfc":""},["检索字符串中指定的值，如果匹配到，返回格式如下： { 0:'匹配的字符串', 1:'匹配的第一个元祖，如果有的话', 2:'以此类推，第二个元祖', ...... index:'匹配文本的第一个字符的位置',↵            input:'输入的匹配的原来字符串', length:'0,1,2,...的个数' } exec如果匹配不到，返回null。"]),b("p",{class:"warn","data-quickpaper-bb28bbfc":""},["重要事项：完成了一次模式匹配之后检索新的字符串前应该手动地把正则对象的lastIndex属性重置为 0。"]),b("pre",{"q-code":"","data-quickpaper-bb28bbfc":""},["RegExpObject.test(string)"]),b("p",{"data-quickpaper-bb28bbfc":""},["检索字符串中指定的值，如果字符串 string 中含有与RegExpObject匹配的文本，则返回 true，否则返回 false。"]),b("h3",{"data-quickpaper-bb28bbfc":""},["字符串对象方法"]),b("pre",{"q-code":"","data-quickpaper-bb28bbfc":""},["stringObject.search(regexp)"]),b("p",{"data-quickpaper-bb28bbfc":""},["检索与正则表达式相匹配的值，返回stringObject中第一个与regexp相匹配的子串的起始位置，如果没有找到返回-1；search()方法不执行全局匹配，它将忽略标志↵            g。它同时忽略regexp的lastIndex属性，并且总是从字符串的开始进行检索，这意味着它总是返回stringObject的第一个匹配的位置。"]),b("pre",{"q-code":"","data-quickpaper-bb28bbfc":""},["stringObject.match(searchvalue|regexp)"]),b("p",{"data-quickpaper-bb28bbfc":""},["找到一个或多个正则表达式的匹配，返回匹配的字符串数组。"]),b("pre",{"q-code":"","data-quickpaper-bb28bbfc":""},["stringObject.replace(regexp|substr,replacement|function)"]),b("p",{"data-quickpaper-bb28bbfc":""},["替换与正则表达式匹配的子串。"]),b("p",{class:"warn","data-quickpaper-bb28bbfc":""},["温馨提示：其中function传递进去的是匹配的字符串，return返回的是最后替换成的，类似管道的写法。"]),b("pre",{"q-code":"","data-quickpaper-bb28bbfc":""},["stringObject.split(separator[,howmany])"]),b("p",{"data-quickpaper-bb28bbfc":""},["把字符串分割为字符串数组，返回切割后的数组。"]),b("h3",{"data-quickpaper-bb28bbfc":""},["零宽断言"]),b("p",{"data-quickpaper-bb28bbfc":""},["零宽，意味者不会返回匹配的字符；断言，就是预测此处是什么。因此这是一种匹配不返回，只是猜测固定位置应该是什么的存在。"]),b("h4",{"data-quickpaper-bb28bbfc":""},["1.匹配目标的后面是exp:(?=exp)"]),b("p",{"data-quickpaper-bb28bbfc":""},["比如现在需要匹配一个单词是以ing结尾的，但是结尾的ing不捕获，可以这样使用："]),b("pre",{"q-code":"","data-quickpaper-bb28bbfc":""},['"name-doing-text-heeeing".match(/([a-z]+(?=ing))/g)']),b("p",{"data-quickpaper-bb28bbfc":""},['返回结果是["do", "heee"]。']),b("h4",{"data-quickpaper-bb28bbfc":""},["2.匹配目标的后面不是exp:(?!exp)"]),b("p",{"data-quickpaper-bb28bbfc":""},["比如现在需要在一个单词里面寻找一些字母，这些字母的下一个字母不可以是e，可以这样使用："]),b("pre",{"q-code":"","data-quickpaper-bb28bbfc":""},['"dream".match(/([a-z]{1}(?!e))/g)']),b("p",{"data-quickpaper-bb28bbfc":""},['返回的结果是["d", "e", "a", "m"]']),b("h3",{"data-quickpaper-bb28bbfc":""},["懒惰限定符"]),b("ul",{"data-quickpaper-bb28bbfc":""},[b("li",{"data-quickpaper-bb28bbfc":""},[b("span",{class:"important","data-quickpaper-bb28bbfc":""},["*?"]),"：重复任意次，但尽可能少重复"]),b("li",{"data-quickpaper-bb28bbfc":""},[b("span",{class:"important","data-quickpaper-bb28bbfc":""},["+?"]),"：重复1次或更多次，但尽可能少重复"]),b("li",{"data-quickpaper-bb28bbfc":""},[b("span",{class:"important","data-quickpaper-bb28bbfc":""},["??"]),"：重复0次或1次，但尽可能少重复"]),b("li",{"data-quickpaper-bb28bbfc":""},[b("span",{class:"important","data-quickpaper-bb28bbfc":""},["{n,m}?"]),"：重复n到m次，但尽可能少重复"]),b("li",{"data-quickpaper-bb28bbfc":""},[b("span",{class:"important","data-quickpaper-bb28bbfc":""},["{n,}?"]),"：重复n次以上，但尽可能少重复"])]),b("h3",{"data-quickpaper-bb28bbfc":""},["捕获分组"]),b("ul",{"data-quickpaper-bb28bbfc":""},[b("li",{"data-quickpaper-bb28bbfc":""},[b("span",{class:"important","data-quickpaper-bb28bbfc":""},["(exp)"]),"：匹配exp,并捕获文本到自动命名的组里"]),b("li",{"data-quickpaper-bb28bbfc":""},[b("span",{class:"important","data-quickpaper-bb28bbfc":""},["(?:exp)"]),"：匹配exp,不捕获匹配的文本，也不给此分组分配组号"])])])])};a.default=c},99:function(b,a,p){var c=p(100);"string"==typeof c&&(c=[[b.i,c,""]]),c.locals&&(b.exports=c.locals);(0,p(2).default)("data-quickpaper-bb28bbfc",c,!0)}}]);