const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode:'development',
  entry: {
     app: './src/index.js',
     print: './src/print.js'
   },
   devServer: {
     contentBase: './dist'
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Output Management'
     })
   ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader'
         ]
       },
       {
         test: /\.(png|svg|jpg|gif)$/,
         use: [
           'file-loader'
         ]
       }
     ]
   }
};