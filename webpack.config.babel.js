const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const WebpackMonitor = require('webpack-monitor')

const isProduction = process.env.NODE_ENV === 'production'

const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      importLoaders: 1
    }
  },
  {
    loader: 'postcss-loader',
    options: {
      sourceMap: true
    }
  }
]

const cssExtract = ExtractTextPlugin.extract({
  use: cssLoaders,
  fallback: 'vue-style-loader'
})

const scssExtract = ExtractTextPlugin.extract({
  use: cssLoaders.concat('sass-loader'),
  fallback: 'vue-style-loader'
})

const webpackConfig = {
  entry: './app/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'bundle.css',
      disable: !isProduction // extract-text-plugin is not for development.
    }),
    new HtmlPlugin({
      title: 'cheek',
      template: 'app/app.html',
      minify: isProduction ? {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        removeComments: true,
        removeEmptyAttributes: true
      } : false,
      hash: isProduction
    })
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: scssExtract
      }, {
        test: /\.css$/,
        loader: cssExtract
      }, {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': scssExtract,
            'css': cssExtract,
            'js': {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          }
        }
      }, {
        test: /\.(png|jpe?g|gif|svg|ttf|woff2?|eot)$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]?[hash]' }
      }
    ]
  },

  performance: { hints: false },
  resolve: { alias: { vue$: 'vue/dist/vue.esm.js' } },

  devtool: '#inline-source-map',
  devServer: {
    hot: true,
    port: 8888,
    host: '0.0.0.0',
    historyApiFallback: true,
    proxy: { '**': `http://localhost:8081` }
  }
}

if (isProduction) {
  webpackConfig.devtool = '#source-map'
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true
      },
      mangle: true,
      output: {
        comments: false,
        screw_ie8: true
      }
    }),
    new webpack.LoaderOptionsPlugin({ minimize: true }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify('production') }
    }),
    new WebpackMonitor({
      launch: true,
      port: 5050
    })
  ])
}

export default webpackConfig
