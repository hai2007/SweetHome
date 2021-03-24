(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{138:function(d,a,p){"use strict";p.r(a);var i={};p(93);i.render=function(d){return d("div",{quickpaper:"","data-quickpaper-4d458fd4":""},[d("div",{class:"doc-view","data-quickpaper-4d458fd4":""},[d("h2",{"data-quickpaper-4d458fd4":""},["scss使用文档"]),d("h3",{"data-quickpaper-4d458fd4":""},["变量"]),d("p",{"data-quickpaper-4d458fd4":""},["scss可以使用变量，就像下面这样，以$开头："]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},["$btn_bgcolor:#222222;↵↵input.btn{↵    background-color:$btn_bgcolor;↵}"]),d("p",{"data-quickpaper-4d458fd4":""},["如果变量是用在字符串中，你需要用#{}包裹一下："]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},["$direction:top;↵↵input.btn{↵    margin-#{$direction}:10px;↵}"]),d("h3",{"data-quickpaper-4d458fd4":""},["计算"]),d("p",{"data-quickpaper-4d458fd4":""},["scss支持的计算使用起来也很简单，就是编程语言类似的样子（不是一定必须的，不过运算符之间留空格是好的习惯）："]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},["div{↵    padding:(14px / 2);↵    right: $var * 10%;↵}"]),d("h3",{"data-quickpaper-4d458fd4":""},["嵌套"]),d("p",{"data-quickpaper-4d458fd4":""},["个人使用总结，嵌套就两种，分离的和合并的（自己起的名字），合并的比分离的多了一个&，下面分别举例："]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},["/* [分离的]源代码 */↵div{↵    .btn{↵        //Todo↵    }↵}↵/* [分离的]编译后 */↵div .btn{↵    //Todo↵}↵↵/* [合并的]源代码 */↵div{↵    &.btn{↵        //Todo↵    }↵}↵/* [合并的]编译后 */↵div.btn{↵    //Todo↵}"]),d("h3",{"data-quickpaper-4d458fd4":""},["继承"]),d("p",{"data-quickpaper-4d458fd4":""},["现在有了一个公共的按钮样式："]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},[".btn{↵    /* 按钮的公共样式 */↵}"]),d("p",{"data-quickpaper-4d458fd4":""},["你现在要写一个提交按钮，为了在基础按钮基础上开发，你可以写这样的代码："]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},[".btn-submit{↵    @extend .btn;↵    /* 你对提交按钮的特殊样式 */↵}"]),d("h3",{"data-quickpaper-4d458fd4":""},["Mixin"]),d("p",{"data-quickpaper-4d458fd4":""},["说的简单点就是代码模板预定义："]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},["@mixin bgQuick($url,$bgcolor:red){↵    background-repeat: no-repeat;↵    background-position: center center;↵    background-size: auto auto;↵    background-image:url($url);↵    background-color:$bgcolor;↵}"]),d("p",{"data-quickpaper-4d458fd4":""},["使用的时候，传递参数（有缺省值的可以传入也可以不传入）："]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},["div{↵    @include bgQuick('image/smile.png');↵}"]),d("h3",{"data-quickpaper-4d458fd4":""},["函数"]),d("p",{"data-quickpaper-4d458fd4":""},["函数也很好用，看个例子："]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},["@function double($size) {↵    @return $size * 2;↵}↵↵#sidebar {↵    width: double(5px);↵}"]),d("h3",{"data-quickpaper-4d458fd4":""},["if"]),d("p",{"data-quickpaper-4d458fd4":""},["scss的@if用not,or,and分别表示非，或，与。"]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},["$flag:1;↵↵div{↵    @if $flag == 1 {↵        //Todo↵    } @else if($flag > 1 and $flag < 10){↵        //Todo↵    } @else {↵        //Todo↵    }↵}"]),d("h3",{"data-quickpaper-4d458fd4":""},["for"]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},["@for $i from 0 to $home_nav_num {↵    .nav li:nth-child(#{$i + 1}) {↵        background-position-y: (0 - $i)*70px - 20px;↵    }↵}"]),d("h3",{"data-quickpaper-4d458fd4":""},["while"]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},["$i:0;↵↵@while $i <  $home_nav_num {↵    .nav li:nth-child(#{$i + 1}) {↵        background-position-y: (0 - $i)*70px - 20px;↵    }↵}"]),d("h3",{"data-quickpaper-4d458fd4":""},["each"]),d("pre",{"q-code":"css","data-quickpaper-4d458fd4":""},["@each $i in 1, 2, 3 {↵    .nav li:nth-child(#{$i + 1}) {↵        background-position-y: (0 - $i)*70px - 20px;↵    }↵}"])])])};a.default=i},93:function(d,a,p){var i=p(94);"string"==typeof i&&(i=[[d.i,i,""]]),i.locals&&(d.exports=i.locals);(0,p(1).default)("data-quickpaper-4d458fd4",i,!0)},94:function(d,a,p){(d.exports=p(0)(!1)).push([d.i,"",""])}}]);