import React from 'react'

import styles from './styles.css'

import { classNames } from 'utils'

const Item = ({ children, className, tag: Tag = 'div', ...restProps }) => (
  <Tag
    className={classNames
      .use('item')
      .from(styles)
      .join(className)}
    {...restProps}
  >
    {children}
  </Tag>
)

export default Item
