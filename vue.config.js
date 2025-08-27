const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .type('asset/resource')
      .set('generator', {
        filename: 'assets/images/[name].[hash:8][ext]',
      });
  }
})