const fs = require('fs').promises
const path = require('path')

const loadConfig = require('../../config')

const escapeString = (s) => s.replace(/"/g, '\\"')
const genrateValue = (stringOrNull) =>
  stringOrNull == null ? 'null' : `"${escapeString(stringOrNull)}"`

// generated with Babel, edited by hand
// variables substituted manually
const generatePublicConfig = ({ publicPath, iconsPublicPath }) => `
"use strict";

/**
 * This file is automatically generated by the binary command running
 * after the package installation based on your configuration file.
 */

var config = {
  publicPath: ${genrateValue(publicPath)},
  iconsPublicPath: ${genrateValue(iconsPublicPath)}
};

exports.__esModule = true;
exports.default = config;
`

const DEFAULT_CONFIG_PATH = path.resolve(__dirname, '../../../lib/config.js')

const run = async ({ outputPath = DEFAULT_CONFIG_PATH } = {}) => {
  const config = await loadConfig()
  const context = {
    publicPath: config.output.publicPath,
    iconsPublicPath: config.output.icons.sprite
      ? path.resolve(
          config.output.publicPath,
          path.relative(config.output.path, config.output.icons.sprite)
        )
      : null,
  }

  const code = generatePublicConfig(context)

  await fs.mkdir(path.dirname(outputPath), { recursive: true })
  await fs.writeFile(outputPath, code)
  console.log(
    `${path.basename(outputPath)} written to ${path.dirname(outputPath)}\n`
  )
}

if (require.main === module) run()

module.exports = run