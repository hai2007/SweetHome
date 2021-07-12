export default {

    // html
    "notebook_html_dom-sync": {
        content: () => import('../pages/notebook/html/dom-sync.paper')
    },

    // css
    "notebook_css_margin": {
        content: () => import('../pages/notebook/css/margin.paper')
    },
    "notebook_css_overflow-hidden": {
        content: () => import('../pages/notebook/css/overflow-hidden.paper')
    },
    "notebook_css_percent": {
        content: () => import('../pages/notebook/css/percent.paper')
    },
    "notebook_css_vertical-align": {
        content: () => import('../pages/notebook/css/vertical-align.paper')
    },
    "notebook_css_z-index": {
        content: () => import('../pages/notebook/css/z-index.paper')
    },
    "notebook_css_selector": {
        content: () => import('../pages/notebook/css/selector.paper')
    },

    // javascript
    "notebook_js_prototype": {
        content: () => import('../pages/notebook/javascript/prototype.paper')
    },
    "notebook_js_var-up": {
        content: () => import('../pages/notebook/javascript/var-up.paper')
    },
    "notebook_js_regexp": {
        content: () => import('../pages/notebook/javascript/regexp.paper')
    },

    // angular
    "notebook_angular1_directive": {
        content: () => import('../pages/notebook/angular/angular1_directive.paper')
    },

    // vue
    "notebook_vue2_slot": {
        content: () => import('../pages/notebook/vue/vue2_slot.paper')
    },
    "notebook_vue2_vuex3": {
        content: () => import('../pages/notebook/vue/vue2_vuex3.paper')
    },

    // webpack
    "notebook_webpack4_loader-plug": {
        content: () => import('../pages/notebook/webpack/webpack4_loader-plug.paper')
    },

    // 工具
    "notebook_npm_terminal": {
        content: () => import('../pages/notebook/npm/terminal.paper')
    },
    "notebook_git_terminal": {
        content: () => import('../pages/notebook/git/terminal.paper'),
    },

    // http
    "notebook_http_status": {
        content: () => import('../pages/notebook/http/status.paper'),
    }

};
