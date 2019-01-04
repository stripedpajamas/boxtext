/**
 * Created by psquicciarini on 5/24/17.
 */

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: './src/main.js'
  },
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.js', '.vue' ]
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre',
        include: [path.resolve('src'), path.resolve('test')]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ['vue-style-loader', 'css-loader']
          }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [path.resolve('src'), path.resolve('test')]
      },
    ]
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};