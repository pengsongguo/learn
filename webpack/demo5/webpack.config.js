const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        index:'./app.js',
        banner1:'./src/banner1/banner1.js',
        banner2:'./src/banner2/banner2.js',
    },
    output: {
        filename: '[name]bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.(scss|sass)$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }]
    },
    plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        title: '轮播图',
        template: './template.html'
    })],
    devServer: {
        contentBase: './dist'
    },
    devtool: 'cheap-module-eval-source-map'
};