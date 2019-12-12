import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import { classNames } from 'utils'

/**
 * Simple table cell component for headings.
 */
const HeadCell = ({
  children,
  className,
  sticky,
  tag: Tag = 'th',
  ...restProps
}) => (
  <Tag
    className={classNames
      .use({ sticky })
      .from(styles)
      .join(className)}
    {...restProps}
  >
    {children}
  </Tag>
)

HeadCell.propTypes = {
  sticky: PropTypes.bool,
}

HeadCell.defaultProps = {
  sticky: false,
}

export default HeadCell
