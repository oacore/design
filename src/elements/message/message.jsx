import React from 'react'
import PropTypes from 'prop-types'

import styles from './message.css'

import { classNames } from 'utils'

const Message = React.forwardRef(
  ({ children, className, variant, tag: Tag = 'p', ...restProps }, ref) => (
    <Tag
      ref={ref}
      className={classNames
        .use('message', variant)
        .from(styles)
        .join(className)}
      {...restProps}
    >
      {children}
    </Tag>
  )
)

Message.propTypes = {
  /**
   * Defines color scheme of the message
   */
  variant: PropTypes.oneOf(['success', 'warning', 'danger']),
}

export default Message
