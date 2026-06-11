const { defineConfig } = require('@vue/cli-service')


// vue与数据存储层交互
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:7788', // 目标地址，请求的后台接口
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
})
