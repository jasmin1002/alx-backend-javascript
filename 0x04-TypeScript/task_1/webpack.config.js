const path = require('path');

module.exports = {
    mode: 'production',
    devtool: 'eval-source-map',
    entry: './js/main.ts',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'main.js',
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
        }],
    }
}