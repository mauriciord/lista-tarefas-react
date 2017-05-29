const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
    vendor: [
      'react',
      'react-dom',
      'react-router-dom'
    ]
  },

  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    path: resolve(__dirname, 'public'),
    publicPath: '/lista-tarefas-react/'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                modules: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]__[hash:base64:5]',
                url: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            },
            {
              loader: "sass-loader"
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin('css/styles.[chunkhash].css'),
    new InlineManifestWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),
    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        removeComments: true
      },
      template: './src/index.html'
    }),
  ]
};