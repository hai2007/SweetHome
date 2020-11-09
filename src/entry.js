import iCrush from 'icrush';

// 启动界面
import App from './App.iCrush';

// 引入基础样式
import "@yelloxing/normalize.css";

window.icrush = new iCrush({

  // 挂载点
  el: document.getElementById('root'),

  // 启动组件
  render: createElement => createElement(App)

});