(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{27:function(n,r,i){"use strict";i.r(r),r.default="<!DOCTYPE html>\r\n<html lang=\"zh-cn\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>百分比之padding</title>\r\n    <style>\r\n        div.inner {\r\n            /* 此时，这个div的 包含块就不是父结点，而是body了 */\r\n            position: absolute;\r\n            background-color: blue;\r\n            padding: 10%;\r\n            width: 100px;\r\n            height: 50px;\r\n            background-clip: content-box;\r\n            border: 1px solid red;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n\r\n    \x3c!-- 可以试试给父div设置  position:relative  改变包含块再试试 --\x3e\r\n    <div style='width:300px;height:100px;border:1px solid green;'>\r\n        <div class='inner'></div>\r\n    </div>\r\n\r\n</body>\r\n\r\n</html>\r\n"}}]);