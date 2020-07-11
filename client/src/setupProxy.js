const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
        target: 'http://localhost:5000',
        changeOrigin: true,
    })
);

};
// module.exports = setup({
//     context: __dirname,
//     entry: './app.js',
//     devServer: {
//     proxy: {
//     '/api': 'http://localhost:5000'
//     }
// }
// });