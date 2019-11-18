import React from 'react'
import PropTypes from 'prop-types'

import { icon as iconClassName } from './index.css'

/**
 * The component creates an inline SVG image based on
 * `src` and `alt` attributes.
 */
const Icon = ({ src, alt, ...restProps }) => (
  <svg className={iconClassName} role="img" {...restProps}>
    <title>{alt}</title>
    <use href={src} />
  </svg>
)

Icon.propTypes = {
  /**
   * Icon location
   *
   * It can be either an icon referrence to a sprite, e.g. `#alert`
   * or full icon path for any other icon.
   */
  src: PropTypes.string.isRequired,
  /**
   * Alternative text for accessibility
   */
  alt: PropTypes.string.isRequired,
}

export default Icon
