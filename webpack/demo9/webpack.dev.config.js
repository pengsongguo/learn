const merge = require('webpack-merge');
const common = require('./webpack.common.config');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [new htmlWebpackPlugin({
        title: '',
        template: './template.html'
    }), new CleanWebpackPlugin()]
});