const path = require('path');

module.exports = {
    entry: './src/index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|.png|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    mode: 'development'
}