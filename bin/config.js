const path = require('path')

const { cosmiconfig } = require('cosmiconfig')

const defaultFilepath = path.resolve(__dirname, '../config.js')
const defaultConfig = {
  icons: [],

  output: {
    path: path.resolve(__dirname, '../lib'),
    publicPath: '/',
    icons: {
      files: null,
      sprite: null,
    },
  },

  svgo: {
    plugins: {
      removeViewBox: false,
      removeDimensions: true,
    },
  },
}

const doc = {
  icons:
    'config.icons should be either string, array or an object { files, path }',
}

const read = async (filepath) => {
  const explorer = cosmiconfig('design')
  if (filepath != null) return explorer.load(filepath)

  let config = await explorer.search()
  if (config == null) config = await explorer.load(defaultFilepath)

  return config
}

const appendExtension = (file, ext) =>
  new RegExp(`${ext}$`).test(file) ? file : `${file}${ext}`

const prepareIcons = (input) => {
  let files
  if (input == null) files = []
  else if (typeof input == 'string') files = [input]
  else if (Array.isArray(input))
    files = [...input.map((f) => appendExtension(f, '.svg'))]
  else if (typeof input == 'object') {
    files = input.files
      .map((f) => appendExtension(f, '.svg'))
      .map((f) => path.resolve(input.path, f))
  } else throw new Error(doc.icons)

  return files
}

const prepareOutput = (output) => {
  const result = {
    ...defaultConfig.output,
    icons: { ...defaultConfig.output.icons },
  }

  if (typeof output == 'string') result.path = output
  else {
    if (output.path) result.path = output.path
    if (output.publicPath) result.publicPath = output.publicPath

    if (typeof output.icons == 'boolean')
      result.icons = { ...defaultConfig.output.icons }
    else if (typeof output.icons == 'string') {
      result.icons = {
        files: /.svg$/.test(output.icons) ? null : output.icons,
        sprite: appendExtension(output.icons, '.svg'),
      }
    } else result.icons = { ...output.icons }

    if (result.icons.files)
      result.icons.files = path.resolve(result.path, result.icons.files)
    if (result.icons.sprite)
      result.icons.sprite = path.resolve(result.path, result.icons.sprite)
  }

  return result
}

const prepare = (config) => {
  const icons = prepareIcons(config.icons)
  const output = prepareOutput(config.output)
  const svgo = { ...defaultConfig.svgo, ...config.svgo }
  return { icons, output, svgo }
}

const load = async (filepath) => {
  const { config: userConfig } = await read(filepath)
  const config = prepare(userConfig)
  return config
}

module.exports = load
