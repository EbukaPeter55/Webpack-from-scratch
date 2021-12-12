const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                //Add our loader(Babel), which does the actual compiling
                use: {
                    loader: 'babel-loader'
                }

            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //Loaders run from right to left
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        })
    ] 
}