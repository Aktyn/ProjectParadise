const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {BaseHrefWebpackPlugin} = require('base-href-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
	entry: {
		main: './sources/client/index.tsx',
	},
	output: {
		filename: '[name]-[contenthash].js',
		chunkFilename: '[name]-[contenthash].js',
		path: path.resolve(__dirname, 'dist', 'client'),
		publicPath: '/'
	},
	watch: isDevelopment,
	watchOptions: isDevelopment ? {
  		poll: true,
  		ignored: /node_modules/
	} : undefined,
	mode: isDevelopment ? 'development' : 'production',
	devtool: isDevelopment && "source-map",
	devServer: {
		historyApiFallback: true,
		port: 3000,
		open: true
	},
	resolve: {
		extensions: ['.js', '.json', '.ts', '.tsx'],
	},

	node: {
		fs: "empty"
	},

	optimization: isDevelopment ? undefined : {
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				exclude: 'sw.js',
				uglifyOptions: {
					output: {
						comments: false,
					},
					warnings: false,
					compress: {
						drop_console: true
					},
					ie8: false,
					toplevel: true
				},
			})
		],
		usedExports: true,
		runtimeChunk: 'single',
        moduleIds: 'hashed',
		splitChunks: {
			chunks: 'all',
			maxInitialRequests: Infinity,
			maxAsyncRequests: Infinity,
      		minSize: 10000,
			automaticNameDelimiter: '.',

			cacheGroups: {
				styles: {
					name: false,//'styles',
					test: /\.s?css$/,
					chunks: 'all',
					// minChunks: 1,
					priority: -1,
					reuseExistingChunk: true,
					enforce: true,
				},
				/*vendor: {
					test: /[\\/]node_modules[\\/]/,
		          	name: 'vendors',
		          	chunks: 'all'
				}*/
			}
		},
		concatenateModules: true
	},

	module: {
		rules: [
		    {
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader'
			}, {
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
						options: {
							sourceMap: isDevelopment
						}
					},
					{
						loader: "postcss-loader",
						options: {
							autoprefixer: {
								browsers: 'last 2 versions, > 1%'
							},
							sourceMap: isDevelopment,
							plugins: () => [
								autoprefixer
							]
						},
					},
					{
						loader: 'fast-sass-loader',
						options: {
							sourceMap: isDevelopment
						}
					}
				]
			}, {
				test: /\.(jpe?g|png|gif|svg|ttf|ogg|webp)$/,
				use: [
					{
						loader: "file-loader",
						options: {
							name: '[name].[ext]',
							outputPath: 'assets/',
							useRelativePath: true,
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							mozjpeg: {
								progressive: true,
								quality: 90
							},
							optipng: {
								enabled: true,
							},
							pngquant: {
								quality: '80-90',
								speed: 4
							},
							gifsicle: {
								interlaced: false,
							},
							webp: {
								quality: 95
							}
						}
					}
				]
			}, {
				test: /\.(fs|vs|glsl|txt)$/i,
				use: 'raw-loader',
			}
		],
	},

	plugins: [
		new webpack.DefinePlugin({
			_UPDATE_TIME_: Date.now(),
			_CLIENT_: true
		}),

		new MiniCssExtractPlugin({
			filename: "[name]-styles.css",
			chunkFilename: "[id]-[hash].css"
		}),

		new HtmlWebpackPlugin({
			hash: isDevelopment,
			favicon: './sources/client/img/icons/favicon.png',
			title: 'Project Paradise',
			minify: !isDevelopment,
			template: './sources/client/index.html',
			filename: 'index.html'
		}),

		new BaseHrefWebpackPlugin({ baseHref: '/' }),

        new RobotstxtPlugin({
			policy: [{
				userAgent: "*",
				//allow: "/",
				disallow: ["/admin"],
				crawlDelay: 1,//seconds (useful for sites with huge amount of pages)
			}],
		}),
	]
};
