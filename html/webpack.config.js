const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './js/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader'
            }
          ]
        })
      },
      {
        test: /\.html$/,
        use: [ "html-loader" ]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
			filename: "app.css"
		}),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'html/index.html'),
      path: path.resolve(__dirname, 'build'),
      filename: 'index.html',
    }),
  ]
}
