const path = require('path')

module.exports = {
  // make sure we use VueJS with template compiler
  // this is required to startup specific component with window.startApp
  configureWebpack: {
    // specify how source maps are generated
    // https://webpack.js.org/configuration/devtool/
    // devtool: 'eval-source-map',
    resolve: {
      alias: {
        // uncomment to use vue with template compiler
        // 'vue$': 'vue/dist/vue.js'
      }
    },
    module: {
      rules: [{
        test: /\.html$/,
        include: [
          path.resolve('src')
        ],
        use: "vue-template-compiler-loader",
      }, ]
    },
    devServer: {
      https: {
        key: '...', // path to key file,
        cert: '...', // path to pem file
      }
    }
  },

};
