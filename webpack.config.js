var path = require('path')
var webpack = require('webpack')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: '[name].js',
		chunkFilename: '[name].chunk.js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					loaders: {
						'scss': 'vue-style-loader!css-loader!sass-loader',
						'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
					}
					// other vue-loader options go here
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|gif|svg|woff|woff2|ttf)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]'
				}
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	devServer: {
		historyApiFallback: true,
		noInfo: true,
		overlay: true,
		proxy: {
			'/api': {
				target: 'http://localhost:7000',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '/api'
				}
			}
		}
	},
	performance: {
		hints: false
	},
	devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
	module.exports.devtool = '#source-map'
	// http://vue-loader.vuejs.org/en/workflow/production.html
	module.exports.plugins = (module.exports.plugins || []).concat([
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename : 'vendor.js',
            minChunks: function (module, count) {
                // 指定范围是js文件来自node_modules
                return (module.resource && /\.js$/.test(module.resource) &&(/node_modules/).test(module.resource));
            }
		}),
		// This plugin must come after the vendor one (because webpack
		// includes runtime into the last chunk)
		new webpack.optimize.CommonsChunkPlugin({
			name: 'runtime',
			filename : 'runtime.js',
			// minChunks: Infinity means that no app modules
			// will be included into this chunk
			minChunks: Infinity,
		}),
		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
			compress: {
				warnings: false
			}
		}),
		new webpack.LoaderOptionsPlugin({
			minimize: true
		})
	])
}
