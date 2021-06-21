(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{29:function(n,t,e){"use strict";e.r(t),t.default="<!DOCTYPE html>\n<html lang=\"zh-cn\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <title>DOM操作是异步还是同步</title>\n    <style>\n        canvas,\n        img {\n            outline: 1px solid red;\n        }\n    </style>\n</head>\n\n<body>\n    <div id='target'></div>\n    <canvas id='canvas'></canvas>\n    <script>\n\n        var template = '<img '\n            + 'id=\"img\" '\n            + 'width=\"300\" '\n            + 'height=\"150\" '\n            + 'src=\"data:image/svg+xml;charset=utf-8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><foreignObject '\n            + 'width=\\'120\\' '\n            + 'height=\\'50\\' '\n            + '><body xmlns=\\'http://www.w3.org/1999/xhtml\\'>' +\n            '<p>这是一个例子</p>' +\n            '</body></foreignObject></svg>\" />';\n\n        // 第一步，添加到页面\n        document.getElementById('target').innerHTML = template;\n\n        // 第二步：绘制到canvas上\n        setTimeout(function () {\n            document.getElementById('canvas')\n                .getContext('2d')\n                .drawImage(document.getElementById('img-no'), 0, 0);\n        }, 0);\n\n    <\/script>\n</body>\n\n</html>\n"}}]);