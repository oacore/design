import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import { classNames } from 'utils'

/**
 * Simple table cell component for headings.
 */
const HeadCell = React.forwardRef(
  ({ children, className, sticky, tag: Tag = 'th', ...restProps }, ref) => (
    <Tag
      className={classNames
        .use({ sticky })
        .from(styles)
        .join(className)}
      ref={ref}
      {...restProps}
    >
      {children}
    </Tag>
  )
)

HeadCell.propTypes = {
  sticky: PropTypes.bool,
}

HeadCell.defaultProps = {
  sticky: false,
}

export default HeadCell
