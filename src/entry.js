import QuickPaper from 'quick-paper';

// 启动界面
import App from './App.paper';

// 引入样式
import "@hai2007/style/normalize.css";
import '@hai2007/style/doc-view.css';
import './styles/common.css';
import './styles/doc-view.css';

// 引入路由
import routers from './routers/index.js';
QuickPaper.use(routers);

window.quickPaper = new QuickPaper({

    // 挂载点
    el: document.getElementById('root'),

    // 启动组件
    render: createElement => createElement(App)

});
