const path = require('path');

module.exports = {
    entry: './app',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader',{
                    loader: 'css-loader',
                    options: {
                        modules:true
                    }
                },'sass-loader']
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[name].[ext]',
                            outputPath:'imgs/'
                        }
                    }
                ]
            }
        ]
    },
    mode: 'development'
}