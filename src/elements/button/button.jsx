import React from 'react'
import PropTypes from 'prop-types'

import buttonClassNames from './button.css'

import { classNames } from 'utils'

const Button = React.forwardRef(
  (
    {
      children,
      className,
      variant = 'text',
      tag: Tag = 'button',
      ...restProps
    },
    ref
  ) => (
    <Tag
      ref={ref}
      className={classNames
        .use('button', variant)
        .from(buttonClassNames)
        .join(className)}
      {...restProps}
    >
      {children}
    </Tag>
  )
)

Button.propTypes = {
  variant: PropTypes.oneOf(['text', 'outlined', 'contained']),
}

Button.defaultProps = {
  variant: 'text',
}

export default Button
