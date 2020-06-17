import React from 'react'

import { classNames } from '../../utils'
import styles from './styles.css'

const FormControl = ({
  type: controlType,
  children,
  className,
  ...passProps
}) => {
  const Tag = ['select', 'textarea'].includes(controlType)
    ? controlType
    : 'input'
  const type = Tag === 'input' ? controlType : undefined

  return (
    <Tag
      type={type}
      className={classNames.use(styles.control).join(className)}
      {...passProps}
    >
      {children}
    </Tag>
  )
}

export default FormControl
