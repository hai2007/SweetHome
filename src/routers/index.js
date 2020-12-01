import $$ from 'image2d';

let pages = {

    // 主体路由

    home: {
        content: () => import('../pages/home.iCrush')
    },
    notebook: {
        content: () => import('../pages/notebook.iCrush')
    },
    tool: {
        content: () => import('../pages/tool.iCrush')
    },
    game: {
        content: () => import('../pages/game.iCrush')
    },

    // 捐款
    Sponsors: {
        content: () => import('../pages/Sponsors.iCrush')
    },

    // 查询笔记

    cssSelector: {
        content: () => import('../pages/notebook/css-selector.iCrush')
    },
    npm: {
        content: () => import('../pages/notebook/npm.iCrush')
    },
    RegExp: {
        content: () => import('../pages/notebook/RegExp.iCrush')
    },
    scss: {
        content: () => import('../pages/notebook/scss.iCrush')
    },
    terminal: {
        content: () => import('../pages/notebook/terminal.iCrush')
    },

    // 深入了解

    webgl: {
        content: () => import('../pages/books/webgl.iCrush')
    },

    // 默认一级路由

    _default_: "home"
};

export default {
    install(iCrush) {
        iCrush.prototype.loadRouter = (doback, deep) => {

            let routers = (window.location.href + "#").split("#")[1].replace(/\?.{0,}$/, '').replace(/^\//, '').replace(/\/$/, '').split('/'), page = pages;
            for (let i = 0; i < deep; i++) {
                page = page[routers[i]] || page[page['_default_']];
            }
            page.content().then(function (data) {
                doback(data.default);
            });

        };

        iCrush.prototype.goRouter = (doback, keyArray) => {

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

        iCrush.prototype.changeActive = (className, tagetClass) => {
            $$('.' + className).attr('active', 'no');
            $$('.' + className + "." + tagetClass).attr('active', 'yes');
        };
    }
};
