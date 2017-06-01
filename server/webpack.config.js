const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './js/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.html$/,
        use: [ "html-loader" ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 8000,
    hot: true
  },
  plugins: [
    new ExtractTextPlugin({
			filename: "app.[hash].css"
		}),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'html', '/index.html'),
      path: path.resolve(__dirname, 'build'),
      filename: 'index.html',
      alwaysWriteToDisk: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
