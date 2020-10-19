import React from 'react'

import styles from './author.css'

import { classNames } from 'utils'

const List = ({ children, className, ...htmlProps }) => (
  <ol className={classNames.use(styles.list).join(className)} {...htmlProps}>
    {children}
  </ol>
)

const Item = ({ children, href, ...htmlProps }) => {
  const ElementType = href != null ? 'a' : 'span'
  return (
    <li
      itemProp="author"
      itemScope=""
      itemType="https://schema.org/Person"
      {...htmlProps}
    >
      <ElementType href={href} itemprop="name">
        {children}
      </ElementType>
    </li>
  )
}

List.displayName = 'AuthorList'
Item.displayName = 'AuthorList.Item'

List.Item = Item

export default List
export { List, Item }
