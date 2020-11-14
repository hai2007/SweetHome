import iCrush from 'icrush';

// 启动界面
import App from './App.iCrush';

// 引入样式
import "@hai2007/style/normalize.css";
import './styles/common.css';
import './styles/npm.css';

// 引入路由
import routers from './routers/index.js';
iCrush.use(routers);

window.icrush = new iCrush({

    // 挂载点
    el: document.getElementById('root'),

    // 启动组件
    render: createElement => createElement(App)

});
