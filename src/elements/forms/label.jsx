import React, { forwardRef } from 'react'

import styles from './styles.css'

import { classNames } from 'utils'

const FormLabel = ({ children, className, htmlFor, ...htmlProps }, ref) => (
  <label
    ref={ref}
    className={classNames.use(styles.label).join(className)}
    htmlFor={htmlFor}
    {...htmlProps}
  >
    {children}
  </label>
)

export default forwardRef(FormLabel)