const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: './app',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'production',
    module: {
        rules: []
    },
    plugins: [new htmlWebpackPlugin({
        template: './index.html',
        title: 'tree shaking'
    }), new CleanWebpackPlugin()]
}