var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './app.js',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.css$/,
				loader: "style!css"
			},
			{
				test: /\.((eot|woff|woff2|ttf|svg|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?)$/,
				loader: 'url?limit=30000'
			}
		]
	}
}