import autoprefixer from 'autoprefixer'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  entry: [
    'babel/polyfill',  // initialize babel/es6 environment first
    './lib/index.js'
  ],
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel?stage=0', exclude: /node_modules/ },  // run through babel with stage 0 (experimental es7) features
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:base64:5]!postcss!cssnext') },  // allow use of CSS4 syntax through postcss plugin system with cssnext
      { test: /\.(jpg|png|gif|svg)$/, loader: 'file?limit=10000' }
    ]
  },
  postcss: [ autoprefixer ],
  plugins: [
    new HtmlWebpackPlugin({
      template: 'node_modules/html-webpack-template/index.html',
      title: 'Bressain Dinkelman Style Demo',
      appMountId: 'app',
      devServer: 'http://localhost:3000'
    }),
    new ExtractTextPlugin(null, 'bundle.css')  // extract all css into a file instead of inlining into the head
  ],
  devServer: {
    port: 3000
  }
}
