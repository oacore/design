import React from 'react'

import styles from './styles.css'

import { classNames } from 'utils'

const FormLabel = ({ children, className, htmlFor, ...htmlProps }) => (
  <label
    className={classNames.use(styles.label).join(className)}
    htmlFor={htmlFor}
    {...htmlProps}
  >
    {children}
  </label>
)

export default FormLabel
