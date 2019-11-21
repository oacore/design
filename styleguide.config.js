const path = require('path')

module.exports = {
  title: 'CORE Design Engine',
  usageMode: 'expand',
  sections: [
    {
      name: 'Introduction',
      content: './docs/intro.md',
    },
    {
      name: 'Components',
      sections: [
        {
          name: 'Utilities',
          components: ['src/components/icon/index.jsx'],
        },
      ],
    },
  ],
  theme: {
    color: {
      link: '#b75400',
      linkHover: '#924300',
    },
  },

  styleguideDir: 'public',

  assetsDir: 'dist/assets',
  require: [path.join(__dirname, 'src/index.css')],

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: [/node_modules/],
          use: [{ loader: 'babel-loader' }],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
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
  },
}
