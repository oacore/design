import React, { useState, useRouter } from 'react'

import styles from './styles.css'
import { classNames } from '../../utils'

const DocumentationMembershipNav = ({
  textData,
  setHighlight,
  activeIndex,
  setNavActiveIndex,
}) => {
  const [activeItem, setActiveItem] = useState(null)
  const router = useRouter()
  const headerHeight = 56

  const handleClick = (obj, item) => {
    router.push(`${obj.href}`)
    setActiveItem(item)
    setHighlight(+item)
    setNavActiveIndex(null)
    const element = document.getElementById(obj.href.replace('#', ''))
    if (element) {
      const rect = element.getBoundingClientRect()

      window.scrollTo({
        top: rect.top + window.scrollY - headerHeight,
        behavior: 'smooth',
        block: 'center',
      })
    }
  }

  return (
    <ul className={styles.sider}>
      {Object.keys(textData.navItems).map((item, i) => (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
        <li
          className={classNames.use(styles.siderItem, {
            [styles.activeItem]: !activeIndex
              ? activeItem === item
              : activeIndex === i,
          })}
          key={textData.navItems[item].item}
          onClick={() => handleClick(textData.navItems[item], item)}
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles.siderItemLink}>{textData.navItems[item].item}</a>
          {activeItem === item || activeIndex === i ? (
            // eslint-disable-next-line react/no-unescaped-entities
            <span className={styles.logo}>></span>
          ) : (
            ''
          )}
        </li>
      ))}
    </ul>
  )
}

export default DocumentationMembershipNav
