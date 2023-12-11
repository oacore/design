import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

import styles from './styles.css'
import { classNames } from '../../utils'
import Icon from '../../elements/icon'

const DocumentationMembershipNav = ({
  textData,
  setHighlight,
  activeIndex,
  setNavActiveIndex,
}) => {
  const [activeItem, setActiveItem] = useState(null)
  const headerHeight = 56

  const handleClick = (obj, item) => {
    window.location.href = obj.href
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
      {Object.values(textData.navItems).map((item, i) => (
        // eslint-disable-next-line max-len
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions,jsx-a11y/click-events-have-key-events
        <li
          className={classNames.use(styles.siderItem, {
            [styles.hiddenItem]: item.hidden,
            [styles.activeItem]: !activeIndex
              ? activeItem === i
              : activeIndex === i,
          })}
          key={item.item}
          onClick={() => handleClick(item, i)}
        >
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <ReactMarkdown className={styles.siderItemLink}>
            {item.item}
          </ReactMarkdown>
          {activeItem === i || activeIndex === i ? (
            // eslint-disable-next-line react/no-unescaped-entities
            <span className={styles.logo}>
              <Icon src="#active-arrow" />
            </span>
          ) : (
            ''
          )}
        </li>
      ))}
    </ul>
  )
}

export default DocumentationMembershipNav
