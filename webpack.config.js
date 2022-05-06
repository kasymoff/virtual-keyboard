const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: "inline-source-map",
  devServer: {
    static: './dist',
  },
  plugins: 
    [new HtmlWebpackPlugin({
      title: 'Virtual Keyboard',
      favicon: './src/assets/favicon.ico',
      hash: true
    })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      }
    ]
  },
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};