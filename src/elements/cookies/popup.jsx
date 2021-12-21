import React from 'react'

import styles from './cookies.css'

import { Button, Link } from 'elements'
import { classNames } from 'utils'

const CookiesPopup = ({ onSubmit, ...formProps }) => (
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
      <Button
        onClick={onSubmit}
        variant="outlined"
        className={styles.popupButton}
        id="cookies_accepted"
      >
        Essential cookies only
      </Button>
      <Button
        id="analytics_allowed"
        onClick={onSubmit}
        className={classNames.use(styles.popupButton, styles.popupButtonRevert)}
      >
        Help improve our service
      </Button>
    </div>
  </div>
)

export default CookiesPopup
