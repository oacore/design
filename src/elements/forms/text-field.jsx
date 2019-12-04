import React from 'react'
import PropTypes from 'prop-types'

import textFieldClassNames from './text-field.css'

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
const generateId = () =>
  Math.random()
    .toString(36)
    .substr(2, 9)

const TextField = ({
  children,
  id,
  className,
  label,
  size,
  tag: Tag = 'div',
  ...inputProps
}) => {
  const controlId = [id, 'control'].join('-')

  return (
    <Tag
      id={id}
      className={classNames
        // prevents passing 'default' to the class list
        .use('container', { [size]: size !== 'default' }, className)
        .withModule(textFieldClassNames)}
    >
      <input id={controlId} {...inputProps} />
      <label htmlFor={controlId}>{label}</label>
    </Tag>
  )
}

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
}

TextField.defaultProps = {
  size: 'default',
  id: generateId(),
}

export default TextField
