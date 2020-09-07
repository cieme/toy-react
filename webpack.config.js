const path = require('path');
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
  optimization: {
    minimize: false
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
          plugins: [['@babel/plugin-transform-react-jsx', {pragma:'createElement'}]]
        }
      }
    }]
  },
};
module.exports = config