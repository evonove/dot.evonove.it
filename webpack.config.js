const webpack = require('webpack');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require('path');

const extractSass = new ExtractTextPlugin({
    filename: "main.css"
});

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, 'site/static/'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
            loader: "css-loader"
        }, {
            loader: "sass-loader"
        }],
        fallback: "style-loader"
      })
    }]
  },
  plugins: [
    extractSass
  ]
}
