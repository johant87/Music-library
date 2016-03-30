var path = require('path');
var webpack = require('webpack');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: [
    // necessary for hot reloading with IE:
    'eventsource-polyfill',
    // listen to code updates emitted by hot middleware:
    'webpack-hot-middleware/client',
    // your code:
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
        {
          test: /\.jsx?/,
          loaders: ['babel'],
          include: path.join(__dirname, 'src')
        },
        { test: /\.woff$/,   loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.woff2$/,  loader: "url-loader?limit=10000&minetype=application/font-woff" },
        { test: /\.ttf$/,    loader: "file-loader" },
        { test: /\.eot$/,    loader: "file-loader" },
        { test: /\.svg$/,    loader: "file-loader" },
        { test: /\.png$/,    loader: "file-loader" },
        { test: /\.scss$/,   loader: 'style!css!sass'}
      ]
  }
};
