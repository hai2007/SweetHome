import QuickPaper from 'quick-paper';

// 兼容文件
import '@hai2007/polyfill/Promise.js';

// 启动界面
let pages = {
    app: () => import('./App.paper'),
    editor: () => import('./pages/editor.paper')
};

// 引入样式
import "@hai2007/style/normalize.css";
import '@hai2007/style/doc-view.css';
import './styles/common.css';
import './styles/doc-view.css';

// 引入路由
import routers from './routers/index.js';
QuickPaper.use(routers);

// 获取启动页面名称
let pagename = QuickPaper.urlFormat(window.location.href).router[0];

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
