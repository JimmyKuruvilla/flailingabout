const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: ['./src/index.js'],
  devServer: {
    port: 8080,
    hot: true,
    contentBase: path.join(__dirname, 'dist')
  },
  resolve: {
    alias: {
      src: path.resolve('./src'),
      styles: path.resolve('./src/styles'),
      core: path.resolve('./src/core'),
      shared: path.resolve('./src/shared')
    }
  },
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      },
      {
        test: /\.(scss|css)$/,
        oneOf: [
          {
            resourceQuery: /global/,
            use: [
              {
                // creates style nodes from JS strings
                loader: 'style-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                // translates CSS into CommonJS
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                // compiles Sass to CSS
                loader: 'sass-loader',
                options: {
                  outputStyle: 'expanded',
                  sourceMap: true,
                  sourceMapContents: true
                }
              }
            ]
          },
          {
            use: [
              {
                // return text of any file
                loader: 'raw-loader'
              },
              {
                // compiles Sass to CSS
                loader: 'sass-loader',
                options: {
                  outputStyle: 'expanded',
                  sourceMap: true,
                  sourceMapContents: true
                }
              }
            ]
          }
        ]
      },
      {
        // Load all images as base64 encoding if they are smaller than 8192 bytes
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // On development we want to see where the file is coming from, hence we preserve the [path]
              name: '[path][name].[ext]?hash=[hash:20]',
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    })
  ]
};
