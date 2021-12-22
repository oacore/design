import React from 'react'

import styles from './cookies.css'

import { Button, Link } from 'elements'
import { classNames } from 'utils'

const CookiesPopup = ({ actionItems, onSubmit, ...formProps }) => {
  const setEventId = (cookieName) => {
    let names
    if (cookieName === 'essential_cookies_allowed') {
      names = actionItems.find((actionItem) => actionItem.name === cookieName)
        .name
    } else names = actionItems.map(({ name }) => name)

    return names
  }

  return (
    <div
      className={classNames.use(styles.popup)}
      id="cookies-popup"
      {...formProps}
    >
      <div className={styles.popupBody}>
        <p>We use cookies to improve our website.</p>
        <Link href="/cookies" className={styles.popupLink}>
          Learn more
        </Link>
      </div>
      <div className={styles.popupActions}>
        {actionItems.map(({ title, name }, index) => (
          <Button
            key={name}
            onClick={onSubmit}
            variant={index === 0 ? 'outlined' : 'contained'}
            className={styles.popupButton}
            id={setEventId(name)}
          >
            {title.toLowerCase().includes('essential')
              ? title
              : 'Help improve our service'}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default CookiesPopup
