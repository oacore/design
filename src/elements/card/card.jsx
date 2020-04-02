import React from 'react'

import styles from './card.css'

import { classNames } from 'utils'

const Card = ({ children, className, tag: Tag = 'div', ...restProps }) => (
  <Tag
    className={classNames.use(styles.container).join(className)}
    {...restProps}
  >
    {children}
  </Tag>
)

export default Card
