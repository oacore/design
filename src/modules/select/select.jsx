import React, { useEffect, useCallback, memo } from 'react'
import PropTypes from 'prop-types'

import { useInput, useOptions } from './hooks'
import styles from './select.css'

import { Form, Icon, Button } from 'elements'
import { classNames, canUseDOM } from 'utils'

const Select = memo(
  ({
    id,
    value,
    onInput,
    onChange,
    className,
    children,
    label,
    selectMenuClassName = '',
    variant = 'normal',
    placeholder = variant === 'pure' ? label : undefined,
    changeOnBlur = true,
    prependIcon = null,
    prependIconClassName = '',
    clearButton = true,
    clearButtonClassName = '',
    clearOnFocus = false,
    tag: Tag = 'div',
    appendText,
    appendTextOnClick,
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
      changeOnBlur,
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

      if (isInputFocused) {
        // reset keyboard position in option menu
        setClickedElement(null)
        setIsInputFocused(false)
      }
    }, [])

    // attach event listeners
    useEffect(() => {
      window.addEventListener('mouseup', handleMouseUp)
      return () => window.removeEventListener('mouseup', handleMouseUp)
    }, [])

    return (
      <Tag
        className={classNames
          .use(styles.selectWrapper, isInputFocused && styles.focused)
          .join(className)}
      >
        <div className="sr-only" aria-live="assertive">
          {canUseDOM &&
          options.length &&
          document.activeElement === inputRef.current
            ? `${options.length} suggestions found, to navigate use up and down arrows`
            : ''}
        </div>
        <Form.Group tag="div" className={variant === 'pure' ? styles.pure : ''}>
          {prependIcon && (
            <Form.Addon
              place="prepend"
              className={classNames
                .use(styles.prependIcon)
                .join(prependIconClassName)}
            >
              <Icon src={prependIcon} />
            </Form.Addon>
          )}
          {appendText && (
            <Form.Addon place="append">
              <p
                className={styles.appendText}
                onClick={appendTextOnClick}
                role="presentation"
              >
                {appendText}
              </p>
            </Form.Addon>
          )}
          {clearButton && (
            <Form.Addon place="append" className={styles.appendText}>
              <Button
                className={classNames
                  .use(styles.clearOutButton, inputData.value && styles.show)
                  .join(clearButtonClassName)}
                onClick={() => {
                  setInputData({ value: '' })
                  inputRef.current.focus()
                }}
                type="button"
              >
                <Icon src="#window-close" />
              </Button>
            </Form.Addon>
          )}

          <Form.Control
            ref={inputRef}
            id={`select-${id}`}
            type="text"
            placeholder={placeholder}
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
              if (clearOnFocus) setInputData({ value: '' })
            }}
            onBlur={handleInputBlurEvent}
            onKeyDown={handleInputKeyEvent}
            onChange={(event) => {
              if (inputData.value === event.target.value) return
              setInputData({ value: event.target.value })
            }}
            {...restInputProps}
          />
          <Form.Label htmlFor={`select-${id}`}>{label}</Form.Label>
        </Form.Group>
        <ul
          id={`suggestion-results-${id}`}
          className={classNames
            .use(styles.selectMenu, {
              [styles.show]: isInputFocused,
            })
            .join(selectMenuClassName)}
          role="listbox"
          ref={selectMenuRef}
        >
          {options}
        </ul>
      </Tag>
    )
  }
)

Select.propTypes = {
  /**
   * An ID that will be used to link input and label. It's necessary for
   * accessibility.
   */
  id: PropTypes.string.isRequired,
  /* Label to show in input */
  label: PropTypes.string.isRequired,
  /* The current value shown in input field */
  value: PropTypes.string,
  /* Callback function called whenever input changes */
  onInput: PropTypes.func,
  /* Callback function called whenever input loses focus */
  onChange: PropTypes.func,
  /* Call onChange callback on blur event */
  changeOnBlur: PropTypes.bool,
  /* Custom classname applied on select wrapper */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(classNames.default),
  ]),
  /* Classname applied to select menu */
  selectMenuClassName: PropTypes.string,
  /* Icon to prepend before input */
  prependIcon: PropTypes.string,
  /* Classname applied to prepend icon */
  prependIconClassName: PropTypes.string,
  /* Indicates whether clear button is shown */
  clearButton: PropTypes.bool,
  /* Classname applied to clear button */
  clearButtonClassName: PropTypes.string,
  /* Indicates whether input should be clear onFocus */
  clearOnFocus: PropTypes.bool,
  /* Input's placeholder */
  placeholder: PropTypes.string,
  /* Append text onChange */
  appendTextOnClick: PropTypes.func,
  /* Append text */
  appendText: PropTypes.string,

  /**
   * Helper variation. Affects label display.
   *
   * If variant is pure label is shown only when select is not focused
   */
  variant: PropTypes.oneOf(['normal', 'pure']),
}

export default Select
