"use strict";
let webpack = require('webpack');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  entry: {
    'angular2': [
      'rxjs',
      'reflect-metadata',
      'angular2/core',
      'angular2/router',
      'angular2/http'
    ],
    'app': './app/bootstrap'
  },
  output: {
    path: __dirname + '/build/',
    publicPath: 'build/',
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    extensions: ['', '.ts', '.js', '.css', '.html'],
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'angular2',
      filename: 'angular2.js',
      minChunks: Infinity
    }),
    new CommonsChunkPlugin({
      name: 'common',
      filename: 'common.js'
    })
  ],
  module: {
    loaders: [{
      test: /\.ts$/,
      loader: 'ts-loader'
    }, {
      test: /\.html$/,
      loader: 'html-loader'
    }]
  }
};
