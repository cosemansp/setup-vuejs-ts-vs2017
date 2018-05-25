const path = require('path')

module.exports = {
    // make sure we use VueJS with template compiler
    // this is required to startup specific component with window.startApp
    configureWebpack: {
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
        }
    },

};
