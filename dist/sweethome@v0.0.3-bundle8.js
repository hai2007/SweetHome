(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{41:function(i,a,d){var r=d(42);"string"==typeof r&&(r=[[i.i,r,""]]),r.locals&&(i.exports=r.locals);(0,d(3).default)("data-icrush-44b24288",r,!0)},42:function(i,a,d){(i.exports=d(2)(!1)).push([i.i,"",""])},48:function(i,a,d){"use strict";d.r(a);var r={};d(41);r.render=function(i){return i("div",{class:"doc-view","data-icrush-44b24288":""},[i("h2",{"data-icrush-44b24288":""},["scss使用文档"]),i("h3",{"data-icrush-44b24288":""},["变量"]),i("p",{"data-icrush-44b24288":""},["scss可以使用变量，就像下面这样，以$开头："]),i("pre",{"ui-code":"","data-icrush-44b24288":""},["$btn_bgcolor:#222222;↵↵input.btn{↵    background-color:$btn_bgcolor;↵}"]),i("p",{"data-icrush-44b24288":""},["如果变量是用在字符串中，你需要用#{}包裹一下："]),i("pre",{"ui-code":"","data-icrush-44b24288":""},["$direction:top;↵↵input.btn{↵    margin-#{$direction}:10px;↵}"]),i("h3",{"data-icrush-44b24288":""},["计算"]),i("p",{"data-icrush-44b24288":""},["scss支持的计算使用起来也很简单，就是编程语言类似的样子（不是一定必须的，不过运算符之间留空格是好的习惯）："]),i("pre",{"ui-code":"","data-icrush-44b24288":""},["div{↵    padding:(14px / 2);↵    right: $var * 10%;↵}"]),i("h3",{"data-icrush-44b24288":""},["嵌套"]),i("p",{"data-icrush-44b24288":""},["个人使用总结，嵌套就两种，分离的和合并的（自己起的名字），合并的比分离的多了一个&，下面分别举例："]),i("pre",{"ui-code":"","data-icrush-44b24288":""},["//[分离的]源代码↵div{↵    .btn{↵        //Todo↵    }↵}↵//[分离的]编译后↵div .btn{↵    //Todo↵}↵↵//[合并的]源代码↵div{↵    &.btn{↵        //Todo↵    }↵}↵//[合并的]编译后↵div.btn{↵    //Todo↵}"]),i("h3",{"data-icrush-44b24288":""},["继承"]),i("p",{"data-icrush-44b24288":""},["现在有了一个公共的按钮样式："]),i("pre",{"ui-code":"","data-icrush-44b24288":""},[".btn{↵    //按钮的公共样式↵}"]),i("p",{"data-icrush-44b24288":""},["你现在要写一个提交按钮，为了在基础按钮基础上开发，你可以写这样的代码："]),i("pre",{"ui-code":"","data-icrush-44b24288":""},[".btn-submit{↵    @extend .btn;↵    //你对提交按钮的特殊样式↵}"]),i("h3",{"data-icrush-44b24288":""},["Mixin"]),i("p",{"data-icrush-44b24288":""},["说的简单点就是代码模板预定义："]),i("pre",{"ui-code":"","data-icrush-44b24288":""},["@mixin bgQuick($url,$bgcolor:red){↵    background-repeat: no-repeat;↵    background-position: center center;↵    background-size: auto auto;↵    background-image:url($url);↵    background-color:$bgcolor;↵}"]),i("p",{"data-icrush-44b24288":""},["使用的时候，传递参数（有缺省值的可以传入也可以不传入）："]),i("pre",{"ui-code":"","data-icrush-44b24288":""},["div{↵    @include bgQuick('image/smile.png');↵}"]),i("h3",{"data-icrush-44b24288":""},["函数"]),i("p",{"data-icrush-44b24288":""},["函数也很好用，看个例子："]),i("pre",{"ui-code":"","data-icrush-44b24288":""},["@function double($size) {↵    @return $size * 2;↵}↵↵#sidebar {↵    width: double(5px);↵}"]),i("h3",{"data-icrush-44b24288":""},["if"]),i("p",{"data-icrush-44b24288":""},["scss的@if用not,or,and分别表示非，或，与。"]),i("pre",{"ui-code":"","data-icrush-44b24288":""},["$flag:1;↵↵div{↵    @if $flag == 1 {↵        //Todo↵    } @else if($flag > 1 and $flag < 10){↵        //Todo↵    } @else {↵        //Todo↵    }↵}"]),i("h3",{"data-icrush-44b24288":""},["for"]),i("pre",{"ui-code":"","data-icrush-44b24288":""},["@for $i from 0 to $home_nav_num {↵    .nav li:nth-child(#{$i + 1}) {↵        background-position-y: (0 - $i)*70px - 20px;↵    }↵}"]),i("h3",{"data-icrush-44b24288":""},["while"]),i("pre",{"ui-code":"","data-icrush-44b24288":""},["$i:0;↵↵@while $i <  $home_nav_num {↵    .nav li:nth-child(#{$i + 1}) {↵        background-position-y: (0 - $i)*70px - 20px;↵    }↵}"]),i("h3",{"data-icrush-44b24288":""},["each"]),i("pre",{"ui-code":"","data-icrush-44b24288":""},["@each $i in 1, 2, 3 {↵    .nav li:nth-child(#{$i + 1}) {↵        background-position-y: (0 - $i)*70px - 20px;↵    }↵}"])])};a.default=r}}]);