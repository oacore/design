import PropTypes from 'prop-types'
import { forwardRef } from 'react'

import Icon from '../icon'
import styles from './link.css'

const Link = forwardRef(
  ({ children, external = false, icon = external, ...restProps }, ref) => {
    const ownProps = {}

    if (external) {
      ownProps.target = '_blank'
      ownProps.rel = 'noopener noreferrer'
    }

    return (
      <a ref={ref} {...ownProps} {...restProps}>
        {children}
        {external && icon && (
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
  /**
   * Indicates whether the external icon should be shown or not.
   * Applies only when link is external and its default
   * reflects external prop.
   */
  icon: PropTypes.bool,
}

export default Link
