(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{100:function(a,p,t){var e=t(101);"string"==typeof e&&(e=[[a.i,e,""]]),e.locals&&(a.exports=e.locals);(0,t(2).default)("data-quickpaper-425cfb34",e,!0)},101:function(a,p,t){p=a.exports=t(1)(!1);var e=t(6)(t(102));p.push([a.i,"\n    .prototype {\n        background-image: url("+e+");\n        height: 500px;\n        background-repeat: no-repeat;\n        background-position: center center;\n    }\n",""])},102:function(a,p,t){a.exports=t.p+"dist/prototype-_proto_.png"},168:function(a,p,t){"use strict";t.r(p);var e={};t(100);e.render=function(a){return a("div",{class:"doc-view",quickpaper:"","data-quickpaper-425cfb34":""},[a("h2",{"data-quickpaper-425cfb34":""},["理解prototype和__proto__（继承与原型链）"]),a("div",{class:"prototype","data-quickpaper-425cfb34":""},[]),a("p",{"data-quickpaper-425cfb34":""},["从关系图中可以看出来，ECMAScript中创建一个对象是通过new构造函数实现的，而本质上来说这个对象其实是以构造函数的属性prototype指向的对象为基本模板的，因此新对象的__proto__属性表明了自己来源于谁。"]),a("h3",{"data-quickpaper-425cfb34":""},["prototype"]),a("p",{"data-quickpaper-425cfb34":""},["该属性用来指向创建一个对象的基本模板，默认指向new构造函数，也可以修改，或者通过改属性为新对象添加属性。"]),a("p",{"data-quickpaper-425cfb34":""},["需要注意的是，该属性只有函数才有。"]),a("pre",{"q-code":"","data-quickpaper-425cfb34":""},["//构造函数↵function Clazz(name) {↵    this.name = name;↵}↵↵//创建对象↵var clazz = new Clazz('你好2007');↵↵//通过prototype给对象添加方法↵Clazz.prototype.getName = function () {↵    alert(this.name);↵};↵↵clazz.getName();"]),a("h3",{"data-quickpaper-425cfb34":""},["__proto__"]),a("p",{"data-quickpaper-425cfb34":""},["这个是对象上的属性，比较有意思，因为不是标准中规定的，使用的时候要小心。"]),a("p",{"data-quickpaper-425cfb34":""},["该属性的意思指创建该对象的构造函数的prototype，因此你可以通过对象的该属性修改原型。"]),a("pre",{"q-code":"","data-quickpaper-425cfb34":""},["function Clazz(name) {↵    this.name = name;↵}↵↵var clazz = new Clazz('你好');↵var clazz2 = new Clazz('2007');↵↵//通过__proto__给原型添加方法，这样创建的对象也会有该方法↵clazz2.__proto__.getName = function () {↵    alert(this.name);↵};↵↵clazz.getName();"])])};p.default=e}}]);