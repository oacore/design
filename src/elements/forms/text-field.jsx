import React, { useState } from 'react'
import PropTypes from 'prop-types'

import FormGroup from './group'
import FormLabel from './label'
import FormControl from './control'
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
      size = 'normal',
      labelSrOnly = false,
      // keeping tag being 'div' for the backward consistency temporarily
      tag = 'div',
      placeholder = variant === 'pure' ? label : undefined,
      ...inputProps
    },
    ref
  ) => {
    const controlId = [id, 'control'].join('-')
    const [isTouched, setIsTouched] = useState(false)

    return (
      <FormGroup
        id={id}
        className={classNames
          .use({
            // 'focus' should be applied directly to the control
            [variant]: !['normal'].includes(variant),
            [size]: size !== 'default',
            touched: isTouched,
          })
          .from(styles)
          .join(className)}
        tag={tag}
      >
        <FormControl
          ref={ref}
          id={controlId}
          onBlur={() => !isTouched && setIsTouched(true)}
          aria-invalid={variant === 'error' ? 'true' : 'false'}
          aria-describedby={`${id}-helper`}
          placeholder={placeholder}
          className={classNames.use(isTouched && styles.touched)}
          focus={['error', 'success', 'focus'].includes(variant)}
          {...inputProps}
        />
        {children}
        <span id={`${id}-helper`} className={styles.helper}>
          {helper}
        </span>
        <FormLabel htmlFor={controlId} className={labelSrOnly && 'sr-only'}>
          {label}
        </FormLabel>
      </FormGroup>
    )
  }
)

TextField.propTypes = {
  /**
   * Label for the text field
   */
  label: PropTypes.node.isRequired,
  /**
   * Input's placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Hide label and expose it only for screen readers.
   *
   * **Deprecated**. Use `variant="pure"` instead.
   */
  labelSrOnly: PropTypes.bool,
  /**
   * Size variation. Affects height only.
   */
  size: PropTypes.oneOf(['normal', 'small', 'large']),
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
   * Helper variation. Affects label position and the colour.
   *
   * Avoid using `pure`` with no `placeholder`, prefer to explicitly set it.
   * However, if you don't, the `placeholder`` repeats the label text.
   */
  variant: PropTypes.oneOf(['normal', 'pure', 'focus', 'success', 'error']),
}

export default TextField
