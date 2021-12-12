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

            }
        ]
    }
}