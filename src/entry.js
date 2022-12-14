import QuickPaper from 'quick-paper';
import pkg from '../package.json';

console.log(
    `%c ${pkg.name} %c ${pkg.version} %c\n\n${pkg.description}\n`,
    'background:#bce05d; padding: 2px; border-radius: 5px 0 0 5px; color: #fff;',
    `background:#bea371; padding: 2px; border-radius: 0 5px 5px 0;  color: #fff;`,
    'background:transparent'
);

// 兼容文件
import '@hai2007/polyfill/Promise.js';

// 启动界面
let pages = {
    app: () => import('./App.paper'),
    editor: () => import('./pages/editor/index.paper'),
    learning: () => import('./pages/learning/index.paper'),
    "notebook-list": () => import('./pages/notebook/index.paper'),
    search: () => import('./pages/search/index.paper'),
    interview: () => import('./pages/interview/index.paper'),

    // 工具
    tool: () => import('./pages/tool/index.paper'),

    // 游戏
    game: () => import('./pages/game/index.paper'),
    "snake-eating": () => import('./pages/game/snake-eating/index.paper'),

    // 应用
    "app-store": () => import('./pages/app/index.paper'),
    excel: () => import('./pages/app/excel/index.paper')

};

// 引入样式
import "@hai2007/style/normalize.css";
import '@hai2007/style/doc-view.css';
import './styles/common.css';
import './styles/doc-view.scss';

// 引入公共指令
import './directives/ui-goto-example';

// 引入公共组件
import uiFooter from './components/ui-footer.paper'; QuickPaper.component('uiFooter', uiFooter);
import uiSearch from './components/ui-search.paper'; QuickPaper.component('uiSearch', uiSearch);
import uiDev from './components/ui-dev.paper'; QuickPaper.component('uiDev', uiDev);

// 跳转并刷新
QuickPaper.prototype.reloadPage = url => {
    window.location.href = url;
    setTimeout(() => {
        window.location.reload();
    });
};

// 打开新页面
QuickPaper.prototype.loadPage = url => {
    let aDom = document.createElement('a');
    aDom.setAttribute('href', url);
    aDom.setAttribute('target', '_blank');
    aDom.click();
};

// 监听浏览器点击了回退按钮
if (window.addEventListener)
    window.addEventListener("hashchange", () => {
        setTimeout(() => {

            // 主动跳转的时候可以控制是否需要刷新
            if (window.sweethome_noRefresh) {
                window.sweethome_noRefresh = false;
            } else {
                window.location.reload();
            }

        });
    }, false);

// 获取启动页面名称
let pagename = QuickPaper.urlFormat(window.location.href).router[0];

QuickPaper.prototype.setTitle = (title, logo) => {

    // 设置标题
    document.getElementsByTagName('title')[0].innerHTML = title;

    // 设置logo
    if (logo)
        document.getElementById('favicon').setAttribute('href', logo);
};

// 设置是否隐藏全部辅助
QuickPaper.prototype.setHelpView = flag => {
    document.getElementById("sub-root").style.display = flag;
};

// 请求页面
(pagename in pages ? pages[pagename] : pages.app)().then(data => {

    // 创建对象
    window.quickPaper = new QuickPaper({

        // 挂载点
        el: document.getElementById('root'),

        // 启动组件
        render: createElement => createElement(data.default)

    });

});

import helper from './helper.paper';

// 启动辅助页面

new QuickPaper({
    el: document.getElementById('sub-root'),
    render: createElement => createElement(helper)
});
