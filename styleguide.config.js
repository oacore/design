const path = require('path')

module.exports = {
  title: 'CORE Design Engine',
  usageMode: 'expand',
  pagePerSection: true,
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
      components: 'src/elements/!(table|app-bar)/**/*.{js,jsx,ts,tsx}',
      sections: [
        {
          name: 'App Bar',
          components: () => [
            'src/elements/app-bar/bar.jsx',
            'src/elements/app-bar/brand.jsx',
            'src/elements/app-bar/item.jsx',
          ],
        },
        {
          name: 'Table',
          components: () => [
            'src/elements/table/table.jsx',
            'src/elements/table/head.jsx',
            'src/elements/table/head-cell.jsx',
            'src/elements/table/body.jsx',
            'src/elements/table/row.jsx',
            'src/elements/table/cell.jsx',
            'src/elements/table/body.jsx',
          ],
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
