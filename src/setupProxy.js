const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    createProxyMiddleware('/api', {
			target: 'http://localhost:8000',
			changeOrigin: true,
			pathRewrite: {'^/api': ''}
		}),
    createProxyMiddleware('/other', {
			target: 'http://localhost:5050',
			changeOrigin: true,
			pathRewrite: {'^/other': ''}
		})
  )
}