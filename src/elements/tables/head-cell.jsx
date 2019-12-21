import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import Button from '../button'

import { classNames } from 'utils'

/**
 * Simple table cell component for headings.
 */
const HeadCell = React.forwardRef(
  (
    {
      children,
      className,
      sticky,
      sortable = false,
      order = 'none',
      onClick,
      tag: Tag = 'th',
      ...restProps
    },
    ref
  ) => (
    <Tag
      className={classNames
        .use({
          sticky,
          [styles.headCell]: true,
          [styles.sortable]: sortable,
          [styles.asc]: order === 'ascending',
          [styles.desc]: order === 'descending',
        })
        .from(styles)
        .join(className)}
      ref={ref}
      role="columnheader"
      aria-sort={order}
      {...restProps}
    >
      <Button
        className={classNames.use({ disabled: !sortable }).toString()}
        type="button"
        aria-disabled={!sortable}
        onClick={onClick}
      >
        {children}
      </Button>
    </Tag>
  )
)

HeadCell.propTypes = {
  sticky: PropTypes.bool,
  sortable: PropTypes.bool,
  order: PropTypes.oneOf(['ascending', 'descending', 'none']),
  onClick: PropTypes.oneOf([PropTypes.func, undefined]),
}

HeadCell.defaultProps = {
  order: 'none',
  sortable: false,
  sticky: false,
  onClick: undefined,
}

export default HeadCell
