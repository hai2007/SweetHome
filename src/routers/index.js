import xhtml from '@hai2007/tool/xhtml.js';
import code from './code';
import book from './book';
import notebook from './notebook';
import blog from './blog';

/**
 * 温馨提示：此处只记录主站的路由，别的路由各自管理
 */

let pages = {

    // 主体路由

    home: {
        content: () => import('../pages/home.paper')
    },
    notebook: {
        content: () => import('../pages/notebook.paper')
    },

    // 代码片段
    ...code,

    // 捐款
    Sponsors: {
        content: () => import('../pages/Sponsors.paper')
    },

    // 协议
    license: {
        content: () => import('../pages/license.paper')
    },

    // 在线工具
    tool: {
        content: () => import('../pages/tool.paper')
    },

    // 关于我们
    aboutUS: {
        content: () => import('../pages/aboutUS.paper')
    },

    // 查询笔记
    ...notebook,

    // 博客
    ...blog,

    // 深入了解
    ...book,

    // 默认一级路由

    _default_: "home"
};

export default {
    install(QuickPaper) {
        QuickPaper.prototype.loadRouter = (doback, deep) => {

            let routers = QuickPaper.urlFormat(window.location.href).router, page = pages;
            for (let i = 0; i < deep; i++) {
                page = page[routers[i]] || page[page['_default_']];
            }
            page.content().then(function (data) {
                doback(data.default);
            });

        };

        QuickPaper.prototype.goRouter = (doback, keyArray) => {

            let page = pages, router = "#";
            for (let i = 0; i < keyArray.length; i++) {
                page = page[keyArray[i]] || page[page['_default_']];
                router += "/" + keyArray[i];
            }

            page.content().then(function (data) {
                doback(data.default);
            });

            window.location.href = router;
        };

        QuickPaper.prototype.changeActive = (className, tagetClass) => {

            // 恢复
            let menus = xhtml.find(document.body, el => {
                return xhtml.hasClass(el, className);
            });
            for (let i = 0; i < menus.length; i++) menus[i].setAttribute('active', 'no');

            // 设置
            let menu = xhtml.find(document.body, el => {
                return xhtml.hasClass(el, [className, tagetClass]);
            });
            menu[0].setAttribute('active', 'yes');

        };
    }
};
