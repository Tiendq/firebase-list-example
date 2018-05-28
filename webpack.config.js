let path = require('path');

module.exports = {
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      use: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }]
  },
  entry: './index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist'
  }
};
