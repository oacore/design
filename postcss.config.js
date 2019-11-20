/* eslint-disable import/no-extraneous-dependencies, prettier/prettier */
const presetEnv = require('postcss-preset-env')

const calc = require('postcss-calc')
const cssModules = require('postcss-modules')
const stripInlineComments = require('postcss-strip-inline-comments')
const nano = require('cssnano')

const { cosmiconfigSync } = require('cosmiconfig')

const cssModulesConfig = cosmiconfigSync('cssmodules').search().config

module.exports = {
  syntax: 'postcss-scss',
  map: true,
  plugins: [
    stripInlineComments(),
    calc(),
    presetEnv({
      importFrom: 'src/foundation/variables.css',
    }),
    nano({
      preset: ['default', {
        rawCache: false,
        discardComments: false,
        mergeLonghand: false,
        normalizeWhitespace: false,
        svgo: false,
        reduceInitial: false,
        reduceTransforms: false,
      }]
    }),
    cssModules({
      ...cssModulesConfig,
      getJSON: () => {}
    }),
  ],
}
