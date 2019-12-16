import React from 'react'

/**
 * Empty component for the future purposes.
 */
const Body = React.forwardRef(
  ({ children, tag: Tag = 'tbody', ...restProps }, ref) => (
    <Tag ref={ref} {...restProps}>
      {children}
    </Tag>
  )
)

export default Body
