const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader','postcss-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader','sass-loader','postcss-loader']
            },
            {
                test:/\.(png|jpg|gif|jpeg)$/i,
                use:'file-loader'
            }
        ]
    }
};