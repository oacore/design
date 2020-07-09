import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../icon'
import styles from './link.css'

const Link = React.forwardRef(
  ({ children, external = false, ...restProps }, ref) => {
    const ownProps = {}

    if (external) {
      ownProps.target = '_blank'
      ownProps.rel = 'noopener noreferrer'
    }

    return (
      <a ref={ref} {...ownProps} {...restProps}>
        {children}
        {external && (
          <Icon className={styles.icon} src="#open-in-new" aria-hidden />
        )}
      </a>
    )
  }
)

Link.propTypes = {
  href: PropTypes.string,

  /**
   * Indicates whether link is external or not.
   *
   * External links contain additional icon and add additional attributes to
   * the link: `target="_blank" rel="noopener noreferrer"`.
   * See more: [Links to cross-origin destinations are
   * unsafe](https://web.dev/external-anchors-use-rel-noopener/).
   */
  external: PropTypes.bool,
}

Link.defaultProps = {
  external: false,
}

export default Link
