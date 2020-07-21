import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import { classNames } from 'utils'

const Addon = ({
  place,
  className,
  children,
  tag: Tag = 'span',
  ...restProps
}) => (
  <Tag
    className={classNames.use(styles.addon, styles[place]).join(className)}
    {...restProps}
  >
    {children}
  </Tag>
)

Addon.propTypes = {
  place: PropTypes.oneOf(['append', 'prepend']),
}

Addon.defaultProps = {
  place: 'append',
}

export default Addon
