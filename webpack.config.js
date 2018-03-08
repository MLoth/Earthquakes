const path = require('path');

module.exports = {
    entry: './src/script/index.js',
    output: {
        filename: 'app.min.js',
        path: path.resolve( __dirname, 'dist/script' )
    },
	devServer: {
		contentBase: path.join( __dirname, 'dist' )
	},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};