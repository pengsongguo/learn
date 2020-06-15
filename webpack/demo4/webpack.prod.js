// webpack生产配置文件

const merge = require('webpack-merge');
const common = require('./webpack.common');


module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-module-source-map'
});