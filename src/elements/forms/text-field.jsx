import React from 'react'
import PropTypes from 'prop-types'

import styles from './text-field.css'

import { classNames } from 'utils'

/**
 * Unique ID generator
 *
 * Based on @gordonbrander's gist.
 * See: https://gist.github.com/gordonbrander/2230317
 *
 * > Math.random should be unique because of its seeding algorithm.
 * > Convert it to base 36 (numbers + letters), and grab the first 9 characters
 * > after the decimal.
 *
 * @return {string}
 */
const generateId = () => Math.random().toString(36).substr(2, 9)

const TextField = React.forwardRef(
  (
    {
      children,
      id = generateId(),
      className,
      label,
      helper,
      variant = 'normal',
      size = 'default',
      tag: Tag = 'div',
      ...inputProps
    },
    ref
  ) => {
    const controlId = [id, 'control'].join('-')

    return (
      <Tag
        id={id}
        className={classNames
          .use('container', {
            [size]: size !== 'default',
            [variant]: variant !== 'normal',
            focus: variant !== 'normal',
          })
          .from(styles)
          .join(className)}
      >
        <input
          ref={ref}
          id={controlId}
          aria-invalid={variant === 'error' ? 'true' : 'false'}
          aria-describedby={`${id}-helper`}
          {...inputProps}
        />
        <label htmlFor={controlId}>{label}</label>
        <span id={`${id}-helper`} className={styles.helper}>
          {helper}
        </span>
      </Tag>
    )
  }
)

TextField.propTypes = {
  /**
   * Label for the text field
   */
  label: PropTypes.node.isRequired,
  /**
   * Size variation. Affects height only.
   */
  size: PropTypes.oneOf(['default', 'small', 'large']),
  /**
   * An ID that will be used to link input and label. It's necessary for
   * accessibility.
   *
   * If not passed, it will be generated automatically using a random string.
   */
  id: PropTypes.string,
  /**
   * Helper message to show bellow the input
   */
  helper: PropTypes.string,
  /**
   * Helper variation. Affects coloUr of inputs
   */
  variant: PropTypes.oneOf(['normal', 'focus', 'success', 'error']),
}

export default TextField
