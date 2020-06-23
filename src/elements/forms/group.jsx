import React from 'react'

import styles from './styles.css'

import { classNames } from 'utils'

const FormGroup = ({ children, className, tag: Tag = 'p', ...htmlProps }) => (
  <Tag className={classNames.use(styles.group).join(className)} {...htmlProps}>
    {children}
  </Tag>
)

export default FormGroup
