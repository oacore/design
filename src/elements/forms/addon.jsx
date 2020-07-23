import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

import { classNames } from 'utils'

const Addon = forwardRef(
  ({ place, className, children, tag: Tag = 'span', ...restProps }, ref) => (
    <Tag
      ref={ref}
      className={classNames.use(styles.addon, styles[place]).join(className)}
      {...restProps}
    >
      {children}
    </Tag>
  )
)

Addon.propTypes = {
  place: PropTypes.oneOf(['append', 'prepend']),
}

Addon.defaultProps = {
  place: 'append',
}

export default Addon
