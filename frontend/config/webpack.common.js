// eslint-env node, amd
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(process.cwd(), 'dist')
  },
  plugins: [
    new CleanWebpackPlugin([ '../dist' ], { allowExternal: true }),
    new FaviconsWebpackPlugin('./src/images/favicon.png'),
    new HTMLWebpackPlugin({
      title: 'Wolfox Tutorial',
      meta: { viewport: 'width=device-width, initial-scale=1' }
    })
  ],
  module: {
    rules: [{
      test: /\.(png|svg|jpg|gif)$/,
      use: [ 'file-loader' ]
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: { presets: [ '@babel/preset-env' ] }
      }
    }]
  }
}
