import React, { useState } from 'react'
import styles from './documentationNav.css'
import { classNames } from '../../utils'

const DocumentationMembershipNav = ({ textData, setHighlight }) => {
  const [activeItem, setActiveItem] = useState(null)

  const ACTIVE_ARROW = `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
<path d="M8.5 0L7.09 1.41L12.67 7H0.5V9H12.67L7.09 14.59L8.5 16L16.5 8L8.5 0Z" fill="#B75400"/>
</svg>`

  const handleClick = (obj, item) => {
    setActiveItem(item)
    setHighlight(+item)
    const element = document.getElementById(obj.href.replace('#', ''))
    if (element) {
      element?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <ul className={styles.sider}>
      {Object.keys(textData.navItems).map((item) => (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
        <li
          className={classNames.use(styles.siderItem, {
            [styles.activeItem]: activeItem === item,
          })}
          key={textData.navItems[item].item}
          onClick={() => handleClick(textData.navItems[item], item)}
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles.siderItemLink}>{textData.navItems[item].item}</a>
          {activeItem === item ? (
            <img
              src={`data:image/svg+xml,${ACTIVE_ARROW}`}
              alt="Logo"
              className={styles.logo}
            />
          ) : (
            ''
          )}
        </li>
      ))}
    </ul>
  )
}

export default DocumentationMembershipNav
