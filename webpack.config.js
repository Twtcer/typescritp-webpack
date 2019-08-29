let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.ts',
  output: {
    //The output directory as an absolute path.
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
      // Add '.ts' and '.tsx' as a resolvable extension.
      extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader', exclude: /(node_modules)/, }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: path.resolve(path.resolve(__dirname), 'index.html'),
        inject: 'body'
    }),
  ]
}