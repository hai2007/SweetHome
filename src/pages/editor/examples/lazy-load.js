export default {

    // 小课堂
    "learning_html-style": () => import('./learning/html-style.html'),
    "learning_html-script": () => import('./learning/html-script.html'),
    "learning_html-canvas": () => import('./learning/html-canvas.html'),

    // html
    "html_dom-sync": () => import('./html/dom-sync.html'),
    "html_dom-sync#setTimeout": () => import('./html/dom-sync#setTimeout.html'),
    "html_dom-sync#no-dom": () => import('./html/dom-sync#no-dom.html'),

    // style.css
    "style_percent-padding": () => import('./style.css/percent-padding.html'),
    "style_percent-padding#absolute": () => import('./style.css/percent-padding#absolute.html'),
    "style_percent-padding#layout": () => import('./style.css/percent-padding#layout.html'),
    "style_percent-height": () => import('./style.css/percent-height.html'),
    "style_percent-height#value": () => import('./style.css/percent-height#value.html'),
    "style_percent-height#absolute": () => import('./style.css/percent-height#absolute.html'),
    "style_percent-height#value+absolute": () => import('./style.css/percent-height#value+absolute.html'),

    // clunch框架
    "clunch_readme": () => import('./clunch/readme.html'),

};
