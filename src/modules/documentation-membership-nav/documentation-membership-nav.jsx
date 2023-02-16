import React, { useState } from 'react'

import styles from './styles.css'
import { classNames } from '../../utils'
import activeArrow from '../../../public/icons/active-arrow.svg'

const DocumentationMembershipNav = ({ textData, setHighlight, activeIndex, setNavActiveIndex, }) => {
  const [activeItem, setActiveItem] = useState(null)

  const handleClick = (obj, item) => {
    setActiveItem(item)
    setHighlight(+item)
    setNavActiveIndex(null)
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
            [styles.activeItem]: !activeIndex
              ? activeItem === item
              : activeIndex === i,
          })}
          key={textData.navItems[item].item}
          onClick={() => handleClick(textData.navItems[item], item)}
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className={styles.siderItemLink}>{textData.navItems[item].item}</a>
          {activeItem === item || activeIndex === i  ? (
            <img src={activeArrow} alt="Logo" className={styles.logo} />
          ) : (
            ''
          )}
        </li>
      ))}
    </ul>
  )
}

export default DocumentationMembershipNav
