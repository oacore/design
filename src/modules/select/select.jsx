import React, { useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'

import { useInput, useOptions } from './hooks'
import styles from './select.css'

import { Form, Icon, Button } from 'elements'
import { classNames, generateId } from 'utils'

const Select = ({
  value,
  onInput,
  onChange,
  className,
  children,
  prependIcon = null,
  tag: Tag = 'div',
  id = generateId(),
  ...restInputProps
}) => {
  // custom select hooks
  const [
    inputRef,
    inputData,
    setInputData,
    isInputFocused,
    setIsInputFocused,
  ] = useInput(value, {
    onInput,
    onChange,
  })

  const [
    selectMenuRef,
    options,
    activeOption,
    setClickedElement,
    handleInputKeyEvent,
    handleInputBlurEvent,
  ] = useOptions(children, {
    selectId: id,
    setIsInputFocused,
    setInputData,
  })

  const handleMouseUp = useCallback((event) => {
    // detect if click was made outside of select
    // if so hide suggestion menu
    if (
      inputRef.current?.contains(event.target) ||
      selectMenuRef.current?.contains(event.target)
    )
      return

    // reset keyboard position in option menu
    setClickedElement(null)
    setIsInputFocused(false)
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
              inputData.value && styles.show
            )}
            onClick={() => {
              setInputData({ value: '' })
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
            activeOption?.id
              ? `suggestion-result-${id}-${activeOption.id}`
              : undefined
          }
          value={inputData.value}
          onFocus={() => {
            setIsInputFocused(true)
          }}
          onBlur={handleInputBlurEvent}
          onKeyDown={handleInputKeyEvent}
          onChange={(event) => {
            if (inputData.value === event.target.value) return
            setInputData({ value: event.target.value })
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
  /* The current value shown in input field */
  value: PropTypes.string,
  /* Callback function called whenever input changes */
  onInput: PropTypes.func,
  /* Callback function called whenever input loses focus */
  onChange: PropTypes.func,
  /* Custom classname applied on select wrapper */
  className: PropTypes.string,
  /* Icon to prepend before input */
  prependIcon: PropTypes.string,
}

Select.defaultProps = {
  prependIcon: null,
}

export default Select
