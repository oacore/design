import React, { useState, useEffect, useRef } from 'react'

import styles from './author.css'

import { Button } from 'elements'
import { classNames } from 'utils'

const Item = ({ name, className, ...htmlProps }) => (
  <li
    itemProp="author"
    itemScope=""
    itemType="https://schema.org/Person"
    className={classNames.use(className)}
    {...htmlProps}
  >
    <a
      href={`https://core.ac.uk/search?q=author:(${name})`}
      className={styles.link}
    >
      {name.replace(',', ' ')}
    </a>
  </li>
)

const List = ({ authors, className, ...htmlProps }) => {
  const showMoreRef = useRef(null)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (isExpanded)
      showMoreRef.current.parentElement.nextElementSibling.firstChild.focus()
  }, [isExpanded])

  if (authors.length <= 4) {
    return (
      <ol
        className={classNames.use(styles.list).join(className)}
        {...htmlProps}
      >
        {authors.map((author) => (
          <Item key={author.name} name={author.name} />
        ))}
      </ol>
    )
  }

  return (
    <ol className={classNames.use(styles.list).join(className)} {...htmlProps}>
      <Item aria-setsize={authors.length} name={authors[0].name} />
      <Item aria-setsize={authors.length} name={authors[1].name} />
      <li
        aria-setsize={authors.length}
        className={classNames.use(styles.showMore, isExpanded && styles.hide)}
      >
        <Button
          ref={showMoreRef}
          onFocus={() => {
            setIsExpanded(true)
          }}
          title="Show more authors"
        >
          + {authors.length - 3} more
        </Button>
      </li>
      {authors.slice(2, -1).map((author) => (
        <Item
          aria-setsize={authors.length}
          key={author.name}
          name={author.name}
          className={!isExpanded && styles.hide}
        />
      ))}
      <Item
        aria-setsize={authors.length}
        name={authors[authors.length - 1].name}
      />
    </ol>
  )
}

List.displayName = 'AuthorList'
Item.displayName = 'AuthorList.Item'

List.Item = Item

export default List
export { List, Item }
