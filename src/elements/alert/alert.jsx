import React from 'react'

import Card from '../card'
import styles from './alert.css'

import { classNames } from 'utils'

const Alert = React.memo(({ children, variant }) => (
  <Card
    className={classNames
      .use({
        'alert': true,
        'alert-danger': variant === 'danger',
        'alert-info': variant === 'info',
      })
      .from(styles)}
  >
    {children}
  </Card>
))

const AlertHeader = React.memo(({ children, className }) => (
  <Card className={classNames.use('alert-header').from(styles).join(className)}>
    {children}
  </Card>
))

const AlertContent = React.memo(({ children, className }) => (
  <Card
    className={classNames.use('alert-content').from(styles).join(className)}
  >
    {children}
  </Card>
))

Alert.Header = AlertHeader
Alert.Content = AlertContent

export default Alert
