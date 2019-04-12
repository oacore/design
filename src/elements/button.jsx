import React from 'react'
import PropTypes from 'prop-types'
import { Button as ReactstrapButton } from 'reactstrap'

const propTypes = {
  accent: PropTypes.oneOf(['primary', 'secondary', 'link']),
}

const defaultProps = {
  accent: 'primary',
}

const Button = ({ children, accent, ...restProps }) => {
  const color = accent === 'secondary' ? 'primary' : accent
  const outline = accent === 'secondary'

  return (
    <ReactstrapButton color={color} outline={outline} {...restProps}>
      {children}
    </ReactstrapButton>
  )
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
