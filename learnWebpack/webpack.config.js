const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index:'./src/index.js'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: "/"
    },
    plugins: [new htmlWebpackPlugin({
        title: '开发模式'
    })]
}