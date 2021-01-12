const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                use: "file-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"]
            }
        ]
    }
};