const path = require('path');
const webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry: {
    main: path.resolve(__dirname, 'main.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist.js',
    publicPath: '',

  },
  mode: process.env.NODE_ENV,
  // devtool:"eval-source-map",
  optimization: {
    minimize: false
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        options: {
          modules: true,
        }
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [['@babel/plugin-transform-react-jsx', { pragma: 'createElement' }]]
        }
      }]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    title: "toy react",
    template: path.resolve(__dirname, 'public/index.html'),
    inject: 'body'
  })]
};
if (process.env.NODE_ENV === 'development') {
  config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '',
    compress: true,
    port: 9000,
    overlay: {
      warnings: true,
      errors: true
    },
    open: true,
  }
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = config;
