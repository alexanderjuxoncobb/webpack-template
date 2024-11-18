// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    }),
    new webpack.HotModuleReplacementPlugin() // Add HMR plugin
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      }
    ]
  },
  devServer: {
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:5001',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    ],
    client: {
      webSocketURL: {
        hostname: 'localhost',
        pathname: '/ws',
        port: 8080
      }
    },
    hot: true, // Enable HMR here
    watchFiles: ['src/**/*'] // Watches changes in the src folder
  }
}
