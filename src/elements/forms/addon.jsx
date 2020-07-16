import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import { classNames } from 'utils'

const InputAddon = ({
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

InputAddon.propTypes = {
  place: PropTypes.oneOf(['append', 'prepend']),
}

InputAddon.defaultProps = {
  place: 'append',
}

export default InputAddon
