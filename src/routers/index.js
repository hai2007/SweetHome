import $$ from 'image2d';

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

    webgl: {
        content: () => import('../pages/books/webgl.paper')
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
            $$('.' + className).attr('active', 'no');
            $$('.' + className + "." + tagetClass).attr('active', 'yes');
        };
    }
};
