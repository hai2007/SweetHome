export default {
    api_css_selector: {
        content: () => import('../pages/api/css/selector.paper')
    },
    api_npm_terminal: {
        content: () => import('../pages/api/npm/terminal.paper')
    },
    api_git_terminal: {
        content: () => import('../pages/api/git/terminal.paper'),
    },
    api_http_status: {
        content: () => import('../pages/api/http/status.paper'),
    }
};
