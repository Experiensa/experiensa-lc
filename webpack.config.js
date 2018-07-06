const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const env = process.env.NODE_ENV;
const EXPERIENSA_ROOT = process.cwd();
const EXPERIENSA_ASSETS = EXPERIENSA_ROOT + '/assets';
const devMode = env !== 'production'
const webpackConfig = {
  mode: 'production',
  entry: {
      admin: './assets/scripts/admin.js',
      main: './assets/scripts/main.js',
      common: [
        'jquery'
      ]
  },
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: '[name].bundle.js',
    //publicPath: '/'
    //publicPath: 'dist/'
    publicPath: env === 'production'?'/wp-content/plugins/experiensa-lc/dist/':'http://localhost/experiensa/wp-content/plugins/experiensa-lc/dist/'
  }, 
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['es2015', 'react', 'stage-2'],
              plugins: ['transform-decorators-legacy']
            }
          }/*,
          {
            loader: 'eslint-loader'
          }*/
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      },
      /*
      {
        test: /\.(png|jpg)$/,
        use:[
            {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        ]
      },
      {
          test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg)$/,
          include: path.resolve(EXPERIENSA_ASSETS),
          loader: 'file-loader',
          options: {
              name: `vendor/[name].[ext]`,
          },
      },
      {
          test: /\.(ttf|eot|woff2?|png|jpe?g|gif|svg)$/,
          include: /node_modules|bower_components/,
          loader: 'file-loader',
          options: {
              name: `vendor/[name].[ext]`,
          },
      },*/
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[hash].[ext]'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',
  'plugins': [
      new CleanWebpackPlugin(['dist']),
      new UglifyJSPlugin({
        sourceMap: true
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].style.css',
        chunkFilename: '[id].style.css',
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  /*optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }*/
};

module.exports = webpackConfig;