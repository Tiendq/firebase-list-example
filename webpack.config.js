let path = require('path');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    }]
  },
  entry: {
    'index': 'indxe.js',
    'style': 'style.scss'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
};

yarn add -D babel-core babel-eslint babel-jest babel-loader babel-plugin-transform-object-rest-spread babel-preset-react eslint eslint-loader eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react jest prop-types react-dom react react-testing-library webpack webpack-cli webpack-dev-server babel-plugin-transform-class-properties babel-preset-env bootstrap css-loader file-loader mini-css-extract-plugin sass-loader stylelint-scss stylelint-config-recommended-scss
