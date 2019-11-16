const path = require('path')

const PATH_BASE_DIR = path.normalize(__dirname)
const PATH_SOURCE_DIR = path.join(PATH_BASE_DIR, 'src')
const PATH_MAIN_JS = path.join(PATH_SOURCE_DIR, 'index.jsx')
const PATH_DIST_DIR = path.join(PATH_BASE_DIR, 'dist')

module.exports = {
  entry: {
    index: path.resolve(PATH_MAIN_JS),
  },
  output: {
    path: PATH_DIST_DIR,
    filename: 'index.js',
    library: 'Design',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{ loader: 'babel-loader' }],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
          },
          'svgo-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'react',
  },
}
