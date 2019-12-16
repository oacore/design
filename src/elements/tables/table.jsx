import React from 'react'

const Table = React.forwardRef(
  ({ children, tag: Tag = 'table', ...restProps }, ref) => (
    <Tag ref={ref} {...restProps}>
      {children}
    </Tag>
  )
)

export default Table
