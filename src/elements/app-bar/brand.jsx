import React from 'react'

import styles from './styles.css'

import { classNames } from 'utils'

const Brand = ({ children, className, tag: Tag = 'a', ...restProps }) => (
  <Tag
    className={classNames
      .use('brand')
      .from(styles)
      .join(className)}
    {...restProps}
  >
    {children}
  </Tag>
)

export default Brand
