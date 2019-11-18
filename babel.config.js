/* eslint-disable import/no-extraneous-dependencies */
const { cosmiconfigSync } = require('cosmiconfig')

const cssModulesConfig = cosmiconfigSync('cssmodules').search().config

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        loose: true,
        shippedProposals: true,
        targets: {
          ie: 10,
        },
      },
    ],
    '@babel/react',
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-object-rest-spread',
    ['css-modules-transform', cssModulesConfig],
  ],
}
