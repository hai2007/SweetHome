(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{47:function(n,r,t){"use strict";t.r(r),r.default="<!DOCTYPE html>\r\n<html lang=\"zh-cn\">\r\n\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <title>DOM操作是异步还是同步</title>\r\n    <style>\r\n        canvas,\r\n        img {\r\n            outline: 1px solid red;\r\n        }\r\n    </style>\r\n</head>\r\n\r\n<body>\r\n    <div id='target'></div>\r\n    <canvas id='canvas'></canvas>\r\n    <script>\r\n\r\n        var template = '<img '\r\n            + 'id=\"img\" '\r\n            + 'width=\"300\" '\r\n            + 'height=\"150\" '\r\n            + 'src=\"data:image/svg+xml;charset=utf-8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><foreignObject '\r\n            + 'width=\\'120\\' '\r\n            + 'height=\\'50\\' '\r\n            + '><body xmlns=\\'http://www.w3.org/1999/xhtml\\'>' +\r\n            '<p>这是一个例子</p>' +\r\n            '</body></foreignObject></svg>\" />';\r\n\r\n        // 第一步，添加到页面\r\n        document.getElementById('target').innerHTML = template;\r\n\r\n        // 第二步：绘制到canvas上\r\n        setTimeout(function () {\r\n            document.getElementById('canvas')\r\n                .getContext('2d')\r\n                .drawImage(document.getElementById('img'), 0, 0);\r\n        }, 0);\r\n\r\n    <\/script>\r\n</body>\r\n\r\n</html>\r\n"}}]);