export default {
    webpack: {
        content: () => import('../pages/books/webpack/index.paper'),
        before: {
            content: () => import('../pages/books/webpack/before.paper'),
        },
        loader: {
            content: () => import('../pages/books/webpack/loader.paper'),
        },
        plug: {
            content: () => import('../pages/books/webpack/plug.paper'),
        },
        _default_: "before"
    }
};
