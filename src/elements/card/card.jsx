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

const Title = ({ children, className, tag: Tag = 'h1', ...restProps }) => (
  <Tag className={classNames.use(styles.title).join(className)} {...restProps}>
    {children}
  </Tag>
)

const Description = ({ children, className, tag: Tag = 'p', ...restProps }) => (
  <Tag
    className={classNames.use(styles.description).join(className)}
    {...restProps}
  >
    {children}
  </Tag>
)

Card.Title = Title
Card.Description = Description

export default Card
