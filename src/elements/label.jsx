import React from 'react'
import PropTypes from 'prop-types'

import labelStyles from './label.css'

import { classNames } from 'utils'

const Label = ({
  children,
  color,
  className,
  tag: Tag = 'mark',
  ...restProps
}) => (
  <Tag
    className={classNames
      .use('label', color !== 'default' && color, className)
      .withModule(labelStyles)}
    {...restProps}
  >
    {children}
  </Tag>
)

Label.propTypes = {
  color: PropTypes.oneOf(['default', 'primary', 'success', 'danger']),
}

Label.defaultProps = {
  color: 'default',
}

export default Label