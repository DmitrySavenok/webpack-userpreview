'use strict';

const webpack = require('webpack');
const path = require('path');

let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './frontend/app.js',

  output: {
    path:       __dirname + '/public',  // FS-путь к статике
    publicPath: '/', // Web-путь к статике (CDN?)
    filename:   'app.js',
    library:    '[name]'
  },

  watch: process.env.NODE_ENV === 'development',

  devtool: "cheap-module-inline-source-map",

  watch: true,

  module: {
    loaders: [{
      test:    /\.js$/,
      // "a/b/c/frontend/d.js".startWith("a/b/c/frontend")
      include: path.join(__dirname, "frontend"),
      // exclude: '/node_modules/',
      loader:  'babel?presets=es2015'
    }, {
      test: /\.jade$/,
      loader: "jade"
    }, {
      test:    /\.css$/,
      loader:  'style!css' // ?modules
    }]
  },

  plugins: []
};

if (process.env.NODE_ENV === 'production') {

  module.exports.plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
  );

}

