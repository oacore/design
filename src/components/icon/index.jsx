import React from 'react'
import PropTypes from 'prop-types'

import iconClassNames from './index.css'

import { classNames } from 'utils'
/**
 * The component creates an inline SVG image based on
 * `src` and `alt` attributes.
 */
const Icon = ({ src, alt, className, ...restProps }) => (
  <svg
    className={classNames.use(iconClassNames.icon).join(className)}
    role="img"
    {...restProps}
  >
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
