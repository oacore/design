import React from 'react'

import styles from './styles.css'

import { classNames } from 'utils'

const FormControl = ({
  type: controlType,
  children,
  className,
  focus,
  ...htmlProps
}) => {
  const Tag = ['select', 'textarea'].includes(controlType)
    ? controlType
    : 'input'
  const type = Tag === 'input' ? controlType : undefined

  return (
    <Tag
      type={type}
      className={classNames
        .use(styles.control, focus && styles.focus)
        .join(className)}
      {...htmlProps}
    >
      {children}
    </Tag>
  )
}

export default FormControl
