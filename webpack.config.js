import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
	entry: './src/index.js',
	output: {
		publicPath: 'http://localhost:8080/',
		filename: 'app.min.js',
		path: path.resolve(__dirname, 'dist')
	},
	modules: {
		rules: [
		 // ...baseRules,
		{
			test: /(\.css|\.scss)$/,
			use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: [
					{
						loader: 'css-loader',
						options: {
							sourceMap: true,
							modules: true,
							importLoaders: true,
							localIdentName: '[name]__[local]___[hash:base64:5]'
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: function () {
								return [
								require( 'autoprefixer' )
								];
							}
						}
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						}
					}
				]
			})
		}
	};
