export default {
    cssSelector: {
        content: () => import('../pages/notebook/css-selector.paper')
    },
    npm: {
        content: () => import('../pages/notebook/npm.paper')
    },
    git: {
        content: () => import('../pages/notebook/git.paper'),
    }
};
