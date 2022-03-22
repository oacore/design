/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import PropTypes from 'prop-types'

import styles from './switch.css'

import { classNames } from 'utils'

const Switch = ({ variant = 'normal', id, isActivated, onChange, label }) => {
  const useStyles = (defaultClass) =>
    classNames.use(defaultClass, {
      [styles[variant]]: variant,
    })
  return (
    <div className={styles.container}>
      <input
        checked={isActivated}
        onChange={onChange}
        type="checkbox"
        id={id}
        className={useStyles(styles.checkbox)}
      />
      <label
        className={classNames.use(useStyles(styles.box), {
          [styles.active]: isActivated,
        })}
        htmlFor={id}
      >
        <span className={useStyles(styles.button)} />
      </label>

      {label && <div className={useStyles(styles.label)}>{label}</div>}
    </div>
  )
}

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  isActivated: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  variant: PropTypes.oneOf(['normal', 'small', 'big']),
}
export default Switch
