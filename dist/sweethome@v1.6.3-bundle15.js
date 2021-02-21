(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{64:function(a,e,p){var i=p(65);"string"==typeof i&&(i=[[a.i,i,""]]),i.locals&&(a.exports=i.locals);(0,p(1).default)("data-quickpaper-1036ef29",i,!0)},65:function(a,e,p){(a.exports=p(0)(!1)).push([a.i,"",""])},84:function(a,e,p){"use strict";p.r(e);var i={};p(64);i.render=function(a){return a("div",{quickpaper:"","data-quickpaper-1036ef29":""},[a("div",{class:"doc-view","data-quickpaper-1036ef29":""},[a("h2",{"data-quickpaper-1036ef29":""},["scss使用文档"]),a("h3",{"data-quickpaper-1036ef29":""},["变量"]),a("p",{"data-quickpaper-1036ef29":""},["scss可以使用变量，就像下面这样，以$开头："]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},["$btn_bgcolor:#222222;↵↵input.btn{↵    background-color:$btn_bgcolor;↵}"]),a("p",{"data-quickpaper-1036ef29":""},["如果变量是用在字符串中，你需要用#{}包裹一下："]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},["$direction:top;↵↵input.btn{↵    margin-#{$direction}:10px;↵}"]),a("h3",{"data-quickpaper-1036ef29":""},["计算"]),a("p",{"data-quickpaper-1036ef29":""},["scss支持的计算使用起来也很简单，就是编程语言类似的样子（不是一定必须的，不过运算符之间留空格是好的习惯）："]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},["div{↵    padding:(14px / 2);↵    right: $var * 10%;↵}"]),a("h3",{"data-quickpaper-1036ef29":""},["嵌套"]),a("p",{"data-quickpaper-1036ef29":""},["个人使用总结，嵌套就两种，分离的和合并的（自己起的名字），合并的比分离的多了一个&，下面分别举例："]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},["/* [分离的]源代码 */↵div{↵    .btn{↵        //Todo↵    }↵}↵/* [分离的]编译后 */↵div .btn{↵    //Todo↵}↵↵/* [合并的]源代码 */↵div{↵    &.btn{↵        //Todo↵    }↵}↵/* [合并的]编译后 */↵div.btn{↵    //Todo↵}"]),a("h3",{"data-quickpaper-1036ef29":""},["继承"]),a("p",{"data-quickpaper-1036ef29":""},["现在有了一个公共的按钮样式："]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},[".btn{↵    /* 按钮的公共样式 */↵}"]),a("p",{"data-quickpaper-1036ef29":""},["你现在要写一个提交按钮，为了在基础按钮基础上开发，你可以写这样的代码："]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},[".btn-submit{↵    @extend .btn;↵    /* 你对提交按钮的特殊样式 */↵}"]),a("h3",{"data-quickpaper-1036ef29":""},["Mixin"]),a("p",{"data-quickpaper-1036ef29":""},["说的简单点就是代码模板预定义："]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},["@mixin bgQuick($url,$bgcolor:red){↵    background-repeat: no-repeat;↵    background-position: center center;↵    background-size: auto auto;↵    background-image:url($url);↵    background-color:$bgcolor;↵}"]),a("p",{"data-quickpaper-1036ef29":""},["使用的时候，传递参数（有缺省值的可以传入也可以不传入）："]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},["div{↵    @include bgQuick('image/smile.png');↵}"]),a("h3",{"data-quickpaper-1036ef29":""},["函数"]),a("p",{"data-quickpaper-1036ef29":""},["函数也很好用，看个例子："]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},["@function double($size) {↵    @return $size * 2;↵}↵↵#sidebar {↵    width: double(5px);↵}"]),a("h3",{"data-quickpaper-1036ef29":""},["if"]),a("p",{"data-quickpaper-1036ef29":""},["scss的@if用not,or,and分别表示非，或，与。"]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},["$flag:1;↵↵div{↵    @if $flag == 1 {↵        //Todo↵    } @else if($flag > 1 and $flag < 10){↵        //Todo↵    } @else {↵        //Todo↵    }↵}"]),a("h3",{"data-quickpaper-1036ef29":""},["for"]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},["@for $i from 0 to $home_nav_num {↵    .nav li:nth-child(#{$i + 1}) {↵        background-position-y: (0 - $i)*70px - 20px;↵    }↵}"]),a("h3",{"data-quickpaper-1036ef29":""},["while"]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},["$i:0;↵↵@while $i <  $home_nav_num {↵    .nav li:nth-child(#{$i + 1}) {↵        background-position-y: (0 - $i)*70px - 20px;↵    }↵}"]),a("h3",{"data-quickpaper-1036ef29":""},["each"]),a("pre",{"q-code":"css","data-quickpaper-1036ef29":""},["@each $i in 1, 2, 3 {↵    .nav li:nth-child(#{$i + 1}) {↵        background-position-y: (0 - $i)*70px - 20px;↵    }↵}"])])])};e.default=i}}]);