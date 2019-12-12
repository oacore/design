import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import { classNames } from 'utils'

/**
 * Simple table cell component.
 *
 * Allows to have sticky cells.
 */
const Cell = ({
  children,
  sticky,
  className,
  tag: Tag = 'td',
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

Cell.propTypes = {
  sticky: PropTypes.bool,
}

Cell.defaultProps = {
  sticky: false,
}

export default Cell
