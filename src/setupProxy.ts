const proxy = require('http-proxy-middleware')

module.exports = function(app: any) {
  app.use(
    proxy.createProxyMiddleware('/api1', {
      target: 'http://localhost:8000',
      changeOrigin: true,
      pathRewrite:{'^/api1':''} 
    }),
    // ...
  )
}