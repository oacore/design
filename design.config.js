/**
 * Configuration file for design library.
 * It allows to use svg icons in @oacore/design components and everywhere else.
 *
 * Exported structure should match this scheme:
 *
 * {
 *   icons: <object>{
 *     path: string,         // base path, icons with relative path
 *                           // resolves from it
 *     files: array<string>  // relative/absolute path to each icon
 *   },
 *   output: <object>{
 *     path: string,         // destination folder
 *     publicPath: string,   // the URL where assets are hosted,
 *                           // `output.path` base URL
 *     icons: <object>{
 *       files: string,      // folder where optimised icons are written,
 *                           // absolute or relative to `output.path`
 *       sprite: string,     // sprite file name, absolute or relative
 *                           //to `output.path`
 *     }
 *   }
 * }
 */
const path = require('path')

const isDev = process.env.NODE_ENV !== 'production'

const icons = [
  'alert-circle-outline',
  'check',
  'open-in-new',
  'magnify',
  'menu',
  'window-close',
  'pencil',
  'account',
  'information-outline',
  'office-building',
  path.resolve(__dirname, './assets/core-symbol.svg'),
  path.resolve(__dirname, './assets/writing.svg'),
  path.resolve(__dirname, './assets/jisc-logo.svg'),
  path.resolve(__dirname, './assets/ou-logo.svg'),
  path.resolve(__dirname, './assets/bin.svg'),
]

// icons used in documentation
if (isDev) icons.push('file-check')

const iconsRoot = path.join(
  path.dirname(require.resolve('@mdi/svg/package.json')),
  './svg'
)

const config = {
  icons: {
    path: iconsRoot,
    files: icons,
  },

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
    icons: {
      files: 'icons',
      sprite: 'icons.svg',
    },
  },
}

module.exports = config
