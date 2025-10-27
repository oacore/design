// eslint-disable-next-line import/no-unresolved
const { optimize } = require('svgo')

const processOptions = (options = {}) => {
  const plugins = Object.entries(options.plugins || {}).map(([name, flag]) => ({
    name,
    active: flag,
  }))
  return { ...options, plugins }
}

function MySVGO(options = {}) {
  this.options = processOptions(options)
}

// eslint-disable-next-line func-names
MySVGO.prototype.optimize = function (svgString, info = {}) {
  return optimize(svgString, {
    ...this.options,
    path: info.path,
  })
}

module.exports = MySVGO
