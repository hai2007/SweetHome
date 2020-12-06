import iCrush from 'icrush';

// 启动界面
import App from './App.iCrush';

// 引入样式
import "@hai2007/style/normalize.css";
import '@hai2007/style/doc-view.css';
import './styles/common.css';
import './styles/doc-view.css';

// 引入指令
import './directives/ui-code';

// 引入路由
import routers from './routers/index.js';
iCrush.use(routers);

window.icrush = new iCrush({

    // 挂载点
    el: document.getElementById('root'),

    // 启动组件
    render: createElement => createElement(App)

});
