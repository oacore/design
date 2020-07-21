import React, { forwardRef } from 'react'

const Form = ({ children, ...restProps }, ref) => (
  <form ref={ref} {...restProps}>
    {children}
  </form>
)

export default forwardRef(Form)
