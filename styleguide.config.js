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
      name: 'Foundation',
      content: 'src/foundation/README.md',
    },
    {
      name: 'Elements',
      components: 'src/elements/**/*.{js,jsx,ts,tsx}',
    },
  ],
  theme: {
    color: {
      link: '#b75400',
      linkHover: '#924300',
    },
  },

  ignore: [
    '**/__tests__/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/*.spec.{js,jsx,ts,tsx}',
    '**/*.d.ts',
    '**/index.{js,jsx,ts,tsx}',
  ],

  styleguideDir: 'public',

  assetsDir: 'lib/assets',
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
