const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const PATH_BASE_DIR = path.normalize(__dirname)
const PATH_ASSETS_DIR = path.join(PATH_BASE_DIR, 'assets')
const PATH_NODE_MODULES = path.join(PATH_BASE_DIR, 'node_modules')

const PATH_SOURCE_DIR = path.join(PATH_BASE_DIR, 'src')
const PATH_MAIN_JS = path.join(PATH_SOURCE_DIR, 'index.js')
const PATH_DIST_DIR = path.join(PATH_BASE_DIR, 'dist')

module.exports = {
  entry: {
    main: path.resolve(PATH_MAIN_JS),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(PATH_DIST_DIR),
    publicPath: '/',
  },
  devServer: {
    port: 3042,
    historyApiFallback: true,
    overlay: true,
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /.*\.(gif|png|jp(e*)g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 21000,
              name: 'images/[name]_[hash:7].[ext]',
            },
          },
        ],
      },
      // Vendor CSS loader
      // This is necessary to pack third party libraries like antd
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../node_modules'),
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, '../public', 'index.html'),
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
}
