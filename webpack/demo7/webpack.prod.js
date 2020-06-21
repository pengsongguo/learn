const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');
module.exports = merge(common, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    plugins: [new htmlWebpackPlugin({
        template: './template.html'
    }), new CleanWebpackPlugin()],
    optimization: {
        splitChunks: {
            chunks: "all", // 表示有3种可能值"initial", "async"和"all"。表示引入模块的方式是同步、异步、全部.
            minSize: 30000, // 30kb ,默认大于30kb的包大小的时候才进行代码分割
            // maxSize:50000, // 默认没有此配置，可以不配置，有可能会将一个第三方库再次拆分，不建议配置
            minChunks: 1, // 表示当一个模块被用了多少次的时候才进行分割，默认1次，就进行分割
            maxAsyncRequests: 5, // 同时加载的模块数量，默认是5个。超过5个后，就不会再进行代码分割了（一般不动该配置）
            maxInitialRequests: 3, // 入口文件引入的其他模块，默认3个，超过后不再进行代码分割（一般不动该配置）
            automaticNameDelimiter: '~', // 组和文件名字之间的连接符
            name: true, // 表示cache里面的名字有效（一般不动该配置）
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // 检测引入库是否在 node_modules 目录下,是的话打包出来默认名为 vandors~bundule.js。
                    priority: -10, // 优先级（比如 -10 大于 default 中的 -20），同时满足两个配置的话，优先走优先级高的配置
                    filename: 'vendors.js' // 修改库打包的文件名为 vendors.js
                },
                default: {
                    minChunks: 2,
                    priority: -20, // 优先级（比如 -10 大于 default 中的 -20），同时满足两个配置的话，优先走优先级高的配置
                    reuseExistingChunk: true // 如果一个模块已经被打包过了，再次遇到相同的模块后，直接复用，而不是再次打包
                } // 如果引入的模块不在node_modules里面，走这个属性的配置
            }, // 缓存组，可以将多个库、模块一起进行分析打包到 vendors 或者 default
        }
    }
});