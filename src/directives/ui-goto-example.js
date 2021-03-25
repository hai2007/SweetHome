import QuickPaper from 'quick-paper';
import xhtml from '@hai2007/tool/xhtml';

import examples from '../pages/editor/examples/lazy-load';

QuickPaper.directive('uiGotoExample', {

    inserted: function (el, binding) {

        el.innerText = '点击我试一下>>>';

        // 设置按钮样式
        xhtml.setStyles(el, {
            margin: "10px 30px",
            background: "red",
            color: "white",
            padding: "5px 10px",
            border: "none",
            outline: "none",
            cursor: "pointer"
        });

        // 绑定点击事件
        xhtml.bind(el, 'click', () => {

            new Promise(resolve => {

                // 如果内容来自页面编辑器
                if (binding.type == 'editor') {
                    resolve(document.getElementById(binding.exp).__owe__.valueOf());
                }

                // 如果是懒加载的
                else if (binding.type == 'lazy') {
                    examples[binding.exp]().then(data => {
                        resolve(data.default);
                    });
                }

            }).then(data => {
                localStorage.setItem('hai2007-sweethome-editor-html-code', data);
                xhtml.toNode('<a target="_blank" href="#/editor">打开在线代码演示页面</a>').click();
            });

        });

    }

});
