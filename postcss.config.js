/* eslint-disable import/no-extraneous-dependencies, prettier/prettier */
const presetEnv = require('postcss-preset-env')

const extend = require('postcss-extend')
const calc = require('postcss-calc')
const cssModules = require('postcss-modules')
const nano = require('cssnano')

const { cosmiconfigSync } = require('cosmiconfig')

const cssModulesConfig = cosmiconfigSync('cssmodules').search().config

module.exports = {
  map: true,
  plugins: [
    calc(),
    presetEnv(),
    extend(),
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
