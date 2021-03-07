export default {
    cssSelector: {
        content: () => import('../pages/notebook/css-selector.paper')
    },
    npm: {
        content: () => import('../pages/notebook/npm.paper')
    },
    RegExp: {
        content: () => import('../pages/notebook/RegExp.paper')
    },
    scss: {
        content: () => import('../pages/notebook/scss.paper')
    },
    terminal: {
        content: () => import('../pages/notebook/terminal.paper')
    },
    nginx: {
        content: () => import('../pages/notebook/nginx.paper'),
    },
    git: {
        content: () => import('../pages/notebook/git.paper'),
    },
    svn: {
        content: () => import('../pages/notebook/svn.paper'),
    }
};
