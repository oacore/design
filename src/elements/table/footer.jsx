import React from 'react'

/**
 * Empty component for the future purposes.
 */
const Footer = React.forwardRef(
  ({ children, tag: Tag = 'tfoot', ...restProps }, ref) => (
    <Tag ref={ref} {...restProps}>
      {children}
    </Tag>
  )
)

export default Footer
