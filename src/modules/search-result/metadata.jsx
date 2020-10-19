import React from 'react'

import styles from './metadata.css'

import { classNames } from 'utils'

const List = ({ children, className, ...htmlProps }) => (
  <dl className={classNames.use(styles.list).join(className)} {...htmlProps}>
    {children}
  </dl>
)
const Item = ({
  children,
  label,
  id,
  className,
  itemProp,
  itemScope,
  itemType,
  ...htmlProps
}) => (
  <div
    className={classNames
      .use(styles.group, children == null && styles.empty)
      .join(className)}
    {...htmlProps}
  >
    <dt className={styles.scope} id={`${id}-title`}>
      {label}
    </dt>
    <dd
      className={styles.value}
      aria-labelledby={`${id}-title`}
      {...{ itemProp, itemScope, itemType }}
    >
      {children}
    </dd>
  </div>
)

List.displayName = 'MetadataList'
Item.displayName = `${List.displayName}.Item`

List.Item = Item

export default List
export { List, Item }
