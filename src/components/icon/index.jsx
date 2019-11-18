import React from 'react'
import PropTypes from 'prop-types'

import { icon as iconClassName } from './index.css'

import DownloadIcon from './assets/download.svg'
import OutlineIcon from './assets/outline.svg'
import ThumbnailsIcon from './assets/thumbnails.svg'
import PaperInfoIcon from './assets/paper_info.svg'
import PrintIcon from './assets/print.svg'
import ShareIcon from './assets/share.svg'
import LeftArrowIcon from './assets/left-arrow.svg'
import RightArrowIcon from './assets/right-arrow.svg'
import RotateIcon from './assets/rotate.svg'
import ZoomInIcon from './assets/zoom-in.svg'
import ZoomOutIcon from './assets/zoom-out.svg'
import CoreSymbolIcon from './assets/core-symbol.svg'

const iconMap = {
  'core-symbol': CoreSymbolIcon,
  download: DownloadIcon,
  outline: OutlineIcon,
  thumbnails: ThumbnailsIcon,
  'paper-info': PaperInfoIcon,
  print: PrintIcon,
  share: ShareIcon,
  'left-arrow': LeftArrowIcon,
  'right-arrow': RightArrowIcon,
  'zoom-in': ZoomInIcon,
  'zoom-out': ZoomOutIcon,
  rotate: RotateIcon,
}

const mapNameToModule = name => {
  if (!(name in iconMap)) throw new Error(`Icon ${name} not found`)
  return iconMap[name]
}

const Icon = React.memo(({ iconType }) => {
  const icon = mapNameToModule(iconType)
  return (
    <svg className={iconClassName} viewBox={`${icon.viewBox}`}>
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  )
})

Icon.propTypes = {
  /** The name of a icon */
  iconType: PropTypes.oneOf(Object.keys(iconMap)).isRequired,
}

export default Icon
