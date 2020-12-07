import PropTypes from 'prop-types'

import styles from './chip.css'

import { classNames } from 'utils'

const Chip = ({ children, className, variant = 'text', ...htmlProps }) => (
  <span
    className={classNames.use(
      styles.chip,
      variant === 'contained' && styles.contained,
      className
    )}
    {...htmlProps}
  >
    {children}
  </span>
)

Chip.propTypes = {
  variant: PropTypes.oneOf(['text', 'contained']),
}

export default Chip
