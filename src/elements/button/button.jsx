import React from 'react'
import PropTypes from 'prop-types'

import buttonClassNames from './button.css'

import { classNames } from 'utils'

const Button = ({
  children,
  className,
  variant,
  tag: Tag = 'button',
  ...restProps
}) => (
  <Tag
    className={classNames
      .use('button', variant, className)
      .withModule(buttonClassNames)}
    {...restProps}
  >
    {children}
  </Tag>
)

Button.propTypes = {
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
}

Button.defaultProps = {
  variant: 'text',
}

export default Button
