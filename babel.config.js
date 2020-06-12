const { cosmiconfigSync } = require('cosmiconfig')

const cssModulesConfig = cosmiconfigSync('cssmodules').search().config

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        shippedProposals: true,
      },
    ],
    '@babel/react',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          utils: './src/utils',
        },
      },
    ],
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-transform-runtime',
    ['css-modules-transform', cssModulesConfig],
  ],
}
