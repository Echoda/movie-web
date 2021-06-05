const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(createProxyMiddleware('/api', {
        target: 'http://localhost:5008/api',
        pathRewrite: {
            '^/api': '',
        },
        changeOrigin: true,
    }));
};