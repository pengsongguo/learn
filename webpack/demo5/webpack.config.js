const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        filename: '[name]bundle.js',
        path: path.resolve(__dirname, './dist'),
        chunkFilename:'[name].bundle.js'
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
    plugins: [new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '轮播图',
            template: './template.html'
        })],
    devServer: {
        contentBase: './dist'
    },
    devtool: 'cheap-module-eval-source-map'
};