const path = require('path');

module.exports = {
    mode:'production',
    entry: './index',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    }
};