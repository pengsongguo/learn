// webpack开发环境配置文件

const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
});