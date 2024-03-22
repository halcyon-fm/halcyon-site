/*
 *  filename: webpack.config.js
 *  description: --
 **/

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    home: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpe?g|png|gif|svg|mp4)$/i, 
        exclude: /node_modules/,
        type: 'asset/resource'
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
    ]
  },
  devServer: {
    static: './dist',
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: './home.html',
      favicon: './assets/images/favicon.png',
      template: './templates/index.html',
      chunks: ['home'],
      title: '✦✧  Halcyon ✧✦',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      Components: path.resolve(__dirname, './src/_components'),
      CSS: path.resolve(__dirname, './assets/scss'),
      Fonts: path.resolve(__dirname, './assets/fonts'),
      Images: path.resolve(__dirname, './assets/images'),
    }
  }
};
