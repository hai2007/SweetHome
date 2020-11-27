import iCrush from 'icrush';
import WSCode from 'wscode';
import prettify from 'wscode-prettify';
import $$ from 'image2d';

//  代码显示指令

iCrush.directive('uiCode', {
    inserted: (el, binding) => {
        let code = el.innerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'); el.style.maxHeight = '500px'; let wscode = new WSCode({
            // 编辑器挂载点
            el,
            // 初始化文本
            content: code,
            // 着色方法
            shader: prettify,
            // 是否只读
            readonly: binding.type != 'editor',
            // 设置颜色
            color: {
                background: "rgb(239, 235, 234)",
                /*编辑器背景*/
                text: "#000000",
                /*文本颜色*/
                number: "#888484",
                /*行号颜色*/
                edit: "#eaeaf1",
                /*编辑行背景色*/
                cursor: "#ff0000",
                /*光标颜色*/
                select: "gray",
                /*选择背景*/
            },
            // 是否隐藏行号
            // 如果只有一行，就不显示行号(编辑界面一定显示)
            noLineNumber: !/\n/.test(code) && binding.type != 'editor'
        });
        // 添加复制按钮
        $$('<span class="copy-btn" title="复制到剪切板">复制<span></span></span>').prependTo(el).bind('click', () => {
            wscode.terminal('ctrl+a').terminal('ctrl+c');
        }).css({
            position: "absolute",
            right: "10px",
            top: "10px",
            border: "none",
            outline: 0,
            padding: "4px 10px",
            transition: "0.2s",
            "font-size": "12px",
            cursor: "pointer",
            "z-index": 0,
            "line-height": '20px'
        });
    }
});
