import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import { classNames } from 'utils'

/**
 * Empty component for the future purposes.
 */
const Head = React.forwardRef(
  ({ children, className, sticky, tag: Tag = 'thead', ...restProps }, ref) => (
    <Tag
      className={classNames
        .use({ sticky })
        .from(styles)
        .join(className)}
      {...restProps}
      ref={ref}
    >
      {children}
    </Tag>
  )
)

Head.propTypes = {
  sticky: PropTypes.bool,
}

Head.defaultProps = {
  sticky: false,
}

export default Head
