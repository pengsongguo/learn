
const merge = require('webpack-merge');
const commmon = require('./webpack.common');

module.exports = merge(commmon, {
    mode: "development",
    devServer: {
        contentBase: './dist'
    },
    devtool: "cheap-module-eval-source-map",
});