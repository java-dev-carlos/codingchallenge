const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://spacelaunchnow.me/api/3.3.0/launch',
            changeOrigin: true,
        })
    );
};