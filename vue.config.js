require("babel-polyfill");

module.exports = {
  
  lintOnSave: false,
  runtimeCompiler: true,
  configureWebpack: {
    //Necessary to run npm link https://webpack.js.org/configuration/resolve/#resolve-symlinks
    resolve: {
      symlinks: false
    },
    entry: ["babel-polyfill", './src/main.js']
  },
  transpileDependencies: [
    '@coreui/utils'
  ],
  devServer: {
    proxy: process.env.VUE_APP_API_URL,
    port: 4200,
    // headers: { "Access-Control-Allow-Origin": "*"},
    headers: { "Access-Control-Allow-Origin": true},
  }
}
