import React from 'react'

/**
 * Empty component for the future purposes.
 */
const Row = ({ children, tag: Tag = 'tr', ...restProps }) => (
  <Tag {...restProps}>{children}</Tag>
)

export default Row
