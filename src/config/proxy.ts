export default {
  dev: {
    // localhost:8000/api/** -> https://preview.pro.ant.design/api/**
    '/api': {
      // 要代理的地址
      target: 'http://45.125.34.193:8080/',
      // 配置了这个可以从 http 代理到 https
      // 依赖 origin 的功能可能需要这个，比如 cookie
      changeOrigin: true,
      rewrite: (path: string) => path.replace(/^\/api/, '')
    },
  },
};