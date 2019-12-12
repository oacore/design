import React from 'react'

/**
 * Empty component for the future purposes.
 */
const Body = ({ children, tag: Tag = 'tbody', ...restProps }) => (
  <Tag {...restProps}>{children}</Tag>
)

export default Body
