import xhtml from '@hai2007/tool/xhtml.js';

let pages = {

    // 主体路由

    home: {
        content: () => import('../pages/home.paper')
    },
    notebook: {
        content: () => import('../pages/notebook.paper')
    },
    opensource: {
        content: () => import('../pages/opensource.paper')
    },
    blog: {
        content: () => import('../pages/blog.paper')
    },
    game: {
        content: () => import('../pages/game.paper')
    },
    tool: {
        content: () => import('../pages/tool.paper')
    },
    laboratory: {
        content: () => import('../pages/laboratory.paper')
    },

    // 捐款
    Sponsors: {
        content: () => import('../pages/Sponsors.paper')
    },

    // 查询笔记

    cssSelector: {
        content: () => import('../pages/notebook/css-selector.paper')
    },
    npm: {
        content: () => import('../pages/notebook/npm.paper')
    },
    RegExp: {
        content: () => import('../pages/notebook/RegExp.paper')
    },
    scss: {
        content: () => import('../pages/notebook/scss.paper')
    },
    terminal: {
        content: () => import('../pages/notebook/terminal.paper')
    },

    // 深入了解

    webpack: {
        content: () => import('../pages/books/webpack/index.paper')
    },

    // 默认一级路由

    _default_: "home"
};

export default {
    install(QuickPaper) {
        QuickPaper.prototype.loadRouter = (doback, deep) => {

            let routers = (window.location.href + "#").split("#")[1].replace(/\?.{0,}$/, '').replace(/^\//, '').replace(/\/$/, '').split('/'), page = pages;
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
