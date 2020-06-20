const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [new htmlWebpackPlugin({
        template: './template.html'
    }), new CleanWebpackPlugin()],
    devServer: {
        contentBase: './dist'
    },
    optimization: {
        splitChunks: {}
    }
};