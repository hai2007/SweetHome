import QuickPaper from 'quick-paper';

// 兼容文件
import '@hai2007/polyfill/Promise.js';

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

window.hai2007_sweethome_counterUrl = "https://s05.flagcounter.com/count2/bdd0/bg_FFFFFF/txt_000000/border_CCCCCC/columns_2/maxflags_12/viewers_3/labels_1/pageviews_1/flags_0/percent_0/";

window.quickPaper = new QuickPaper({

    // 挂载点
    el: document.getElementById('root'),

    // 启动组件
    render: createElement => createElement(App)

});
