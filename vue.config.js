const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin()],
  },
  devServer:{
    // proxy:"http://43.138.87.21:8080"
    proxy:"http://localhost:8080"
  },
  publicPath: './',
})
