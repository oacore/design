import React from 'react'

import Icon from '../icon'
import styles from './logo.css'

import { classNames } from 'utils'

const Logo = React.memo(
  ({
    children = 'CORE',
    className,
    src = '#core-symbol',
    alt = 'CORE',
    tag: Tag = 'span',
    ...restProps
  }) => (
    <Tag className={classNames.use(styles.logo, className)} {...restProps}>
      <Icon src={src} alt={alt} className={styles.logoIcon} />
      <span>{children}</span>
    </Tag>
  )
)

export default Logo
