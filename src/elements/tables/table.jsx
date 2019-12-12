import React from 'react'

const Table = ({ children, tag: Tag = 'table', ...restProps }) => (
  <Tag {...restProps}>{children}</Tag>
)

export default Table
