import $$ from 'image2d';

let pages = {
    home: {
        content: () => import('../pages/home.iCrush')
    },
    notebook: {
        content: () => import('../pages/notebook.iCrush')
    },
    opensource: {
        content: () => import('../pages/opensource.iCrush')
    },
    laboratory: {
        content: () => import('../pages/laboratory.iCrush')
    },
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