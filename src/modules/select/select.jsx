import React, { useEffect, useState, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'

import { useInputValue, useOptions } from './hooks'
import styles from './select.css'

import { Form, Icon, Button } from 'elements'
import { classNames, generateId } from 'utils'

const Select = ({
  value,
  onInputChange,
  onOptionSelected,
  className,
  children,
  prependIcon = null,
  tag: Tag = 'div',
  id = generateId(),
  ...restInputProps
}) => {
  // init refs
  const inputRef = useRef(null)

  // indicates whether suggestion menu is shown or not
  const [isInputFocused, setIsInputFocused] = useState(false)

  const hideOptionMenu = useCallback(() => {
    // hide cursor from input field
    inputRef.current.blur()
    // hide suggestions menu
    setIsInputFocused(false)
  }, [])

  const handleOptionSelect = useCallback((optionId) => {
    onOptionSelected(optionId)
    hideOptionMenu()
  }, [])

  // custom select hooks
  const [inputValue, setInputValue] = useInputValue(value, {
    onInputChange,
  })

  const [
    selectMenuRef,
    options,
    activeOptionId,
    setActiveOptionId,
    handleInputKeyEvent,
    handleInputBlurEvent,
  ] = useOptions(children, {
    selectId: id,
    onOptionSelected: handleOptionSelect,
    hideOptionMenu,
  })

  const handleMouseUp = useCallback((event) => {
    // detect if click was made outside of select
    // if so hide suggestion menu
    if (
      inputRef.current?.contains(event.target) ||
      selectMenuRef.current?.contains(event.target)
    )
      return

    hideOptionMenu()
    // reset keyboard position in option menu
    setActiveOptionId(null)
  }, [])

  // attach event listeners
  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp)
    return () => window.removeEventListener('mouseup', handleMouseUp)
  }, [])

  return (
    <Tag
      className={classNames.use(
        styles.selectWrapper,
        isInputFocused && styles.focused,
        className
      )}
    >
      <div className="sr-only" aria-live="assertive">
        {options.length && document.activeElement === inputRef.current
          ? `${options.length} suggestions found, to navigate use up and down arrows`
          : ''}
      </div>
      <Form.Group tag="div">
        {prependIcon && (
          <Form.Addon place="prepend" className={styles.prependIcon}>
            <Icon src={prependIcon} />
          </Form.Addon>
        )}

        <Form.Addon place="append">
          <Button
            className={classNames.use(
              styles.clearOutButton,
              inputValue && styles.show
            )}
            onClick={() => {
              setInputValue('')
              inputRef.current.focus()
            }}
          >
            <Icon src="#window-close" />
          </Button>
        </Form.Addon>
        <Form.Control
          ref={inputRef}
          id={`select-${id}`}
          type="text"
          autoComplete="off"
          role="combobox"
          aria-expanded={Boolean(options.length)}
          aria-owns="suggestion-results"
          aria-autocomplete="both"
          aria-controls={`suggestion-results-${id}`}
          aria-activedescendant={
            activeOptionId
              ? `suggestion-result-${id}-${activeOptionId}`
              : undefined
          }
          value={inputValue}
          onFocus={() => {
            setIsInputFocused(true)
          }}
          onBlur={handleInputBlurEvent}
          onKeyDown={handleInputKeyEvent}
          onChange={(event) => {
            setInputValue(event.target.value)
          }}
          {...restInputProps}
        />
      </Form.Group>
      <ul
        id={`suggestion-results-${id}`}
        className={classNames.use(styles.selectMenu, {
          [styles.show]: isInputFocused,
        })}
        role="listbox"
        ref={selectMenuRef}
      >
        {options}
      </ul>
    </Tag>
  )
}

Select.propTypes = {
  /* Value shown in input field */
  value: PropTypes.string,
  /* Callback function called whenever input changes */
  onInputChange: PropTypes.func,
  /* Callback function called whenever option from menu is selected */
  onOptionSelected: PropTypes.func,
  /* Custom classname applied on select wrapper */
  className: PropTypes.string,
  /* Icon to prepend before input */
  prependIcon: PropTypes.string,
}

Select.defaultProps = {
  prependIcon: null,
}

export default Select
