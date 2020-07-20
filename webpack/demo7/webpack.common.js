const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: "./app.js",
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },

    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: "babel-loader"
        },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: ['file-loader']
            }]
    }
};