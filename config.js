const path = require('path')

const icons = [
  'alert-circle',
  'barcode',
  'calendar-check',
  'check-circle',
  'chevron-left', // 'left-arrow',
  'chevron-right', // 'right-arrow',
  'close',
  'cog', // 'settings',
  'database', // 'data', should be probably replaced
  'dots-vertical',
  'download',
  'earth', // 'globe',
  'file', // 'document',
  'file-alert', // 'document-alert',
  'file-check', // 'document-success',
  'format-list-bulleted', // 'outline', differs
  'format-quote-open', // 'cite',
  'help-circle',
  'help-circle-outline',
  'magnify',
  'magnify-minus-outline', // 'zoom-out',
  'magnify-plus-outline', // 'zoom-in',
  'new-box', // 'new',
  'note', // 'paper-info',
  'open-in-new', // 'open',
  'printer', // 'print',
  'puzzle',
  'rotate-left', // 'rotate',
  'share-variant', // 'share', maybe we should use share
  'sort-ascending',
  'sort-descending',
  'speedometer', // 'statistics', differs
  'tune',
  'view-dashboard', // 'dashboard', 'overview'
  'view-grid', // 'thumbnails',
  // 'core-symbol', removed
]

let iconsRoot = null
try {
  iconsRoot = path.join(
    path.dirname(require.resolve('@mdi/svg/package.json')),
    './svg'
  )
} catch (moduleNotFound) {
  // we do not build icons then
}

const config = {
  icons: iconsRoot != null ? { path: iconsRoot, files: icons } : null,

  output: {
    path: path.join(__dirname, 'lib'),
    publicPath: '/',
    icons: {
      files: 'assets/icons',
      sprite: 'assets/icons.svg',
    },
  },
}

module.exports = config
