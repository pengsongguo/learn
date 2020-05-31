// webpack公共配置文件

const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                use: 'file-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            title: 'Development',
            template: './template.html'
        })
    ],
};