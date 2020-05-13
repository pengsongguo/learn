const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    entry: './src/app',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader'
            }]
        },{
            test:/\.(png|svg|jpg|gif)$/,
            use:{
                loader:'file-loader'
            }
        }]
    },
    plugins:[],
    devServer:{

    }
}