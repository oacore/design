const path = require('path')

const genericNames = require('generic-names')

const NAME_SEPARATOR = '-'

const envToHash = {
  production: '[hash:base64:6]',
  development: '[emoji:4]',

  // Do not append anything if global scope is used
  global: null,
}

const generateHash =
  envToHash[process.env.NODE_ENV] != null
    ? genericNames(envToHash[process.env.NODE_ENV])
    : () => ''

const generateName = (name, filename) => {
  const dirname = path.basename(path.dirname(filename))
  const basename = path.basename(filename).replace(/(\.module)?\.css$/, '')

  const chunks = [dirname]

  // Avoid adding repeated name or a generic name
  if (basename !== dirname && !/^(?:styles?|index)$/.test(basename))
    chunks.push(basename)

  // Avoid duplicating module name with class names that already apply it
  // i.e. avoiding classes like 'button-button-contained'
  // when the file is 'button/styles.css' and the class is 'button-contained'
  if (new RegExp(`${chunks.slice(-1)[0]}\\b`).test(name)) chunks.pop()
  chunks.push(name)

  return chunks.join(NAME_SEPARATOR)
}

module.exports = {
  camelCase: true,

  generateScopedName: (name, filename, css) => {
    const base = generateName(name, filename, css)
    const hash = generateHash(name, filename, css)
    return hash ? [base, hash].join(NAME_SEPARATOR) : base
  },
}
