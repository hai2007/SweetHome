(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{26:function(n,i,d){"use strict";d.r(i),i.default="<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <title>百分比之padding</title>\n    <style>\n        div.inner {\n            /* 此时，这个div的 包含块就不是父结点，而是body了 */\n            position: absolute;\n            background-color: blue;\n            padding: 10%;\n            width: 100px;\n            height: 50px;\n            background-clip: content-box;\n            border: 1px solid red;\n        }\n    </style>\n</head>\n\n<body>\n\n    \x3c!-- 可以试试给父div设置  position:relative  改变包含块再试试 --\x3e\n    <div style='width:300px;height:100px;border:1px solid green;'>\n        <div class='inner'></div>\n    </div>\n\n</body>\n\n</html>\n"}}]);