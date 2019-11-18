/* eslint-disable import/no-extraneous-dependencies, prettier/prettier */
const presetEnv = require('postcss-preset-env')

module.exports = {
  map: true,
  plugins: [
    presetEnv(),
  ],
}
