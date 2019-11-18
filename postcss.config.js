/* eslint-disable import/no-extraneous-dependencies, prettier/prettier */
const presetEnv = require('postcss-preset-env')
const cssModules = require('postcss-modules')

const { cosmiconfigSync } = require('cosmiconfig')

const cssModulesConfig = cosmiconfigSync('cssmodules').search().config

module.exports = {
  map: true,
  plugins: [
    presetEnv(),
    cssModules({
      ...cssModulesConfig,
      getJSON: () => {}
    }),
  ],
}
