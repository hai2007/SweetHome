import QuickPaper from 'quick-paper';

// 兼容文件
import '@hai2007/polyfill/Promise.js';

// 启动界面
let pages = {
    app: () => import('./App.paper'),
    editor: () => import('./pages/editor/index.paper'),
    learning: () => import('./pages/learning/index.paper'),
    "notebook-list": () => import('./pages/notebook/index.paper')
};

// 引入样式
import "@hai2007/style/normalize.css";
import '@hai2007/style/doc-view.css';
import './styles/common.css';
import './styles/doc-view.css';

// 引入公共指令
import './directives/ui-goto-example';

// 引入公共组件
import uiFooter from './components/ui-footer.paper'; QuickPaper.component('uiFooter', uiFooter);

// 调整并刷新
QuickPaper.prototype.reloadPage = url => {
    window.location.href = url;
    setTimeout(() => {
        window.location.reload();
    });
};

// 监听浏览器点击了回退按钮
if (window.addEventListener)
    window.addEventListener("popstate", function (e) {
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
