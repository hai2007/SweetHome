export default {
    code: {
        content: () => import('../pages/code/index.paper'),
        angular1: {
            content: () => import('../pages/code/angular1.paper'),
        },
        vue2: {
            content: () => import('../pages/code/vue2.paper'),
        },
        _default_: "angular1"
    }
};
