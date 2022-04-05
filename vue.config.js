module.exports = {
  outputDir: './build',
  devServer: {
    // proxy: {
    //   '^/api': {
    //     target: 'http://152.136.185.210:5000',
    //     pathRewrite: {
    //       '^/api': ''
    //     },
    //     changeOrigin: true
    //   }
    // }
  },
  transpileDependencies: [],
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      },
      fallback: {
        fs: false,
        crypto: require.resolve("crypto-browserify")
      }
    }
  }
}
