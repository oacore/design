import React, { useState, useRef } from 'react'

const useOptions = (
  children,
  { selectId, onOptionSelected, hideOptionMenu }
) => {
  const selectMenuRef = useRef(null)
  const [activeOptionId, setActiveOptionId] = useState(null)
  // keep track on which element is currently clicked with onMouseDown event
  const [clickedElement, setClickedElement] = useState(null)

  const options =
    React.Children.map(children, (element) => {
      const overrideProps = {
        'id': `suggestion-result-${selectId}-${element.props.id}`,
        'value': element.props.value,
        'data-select-id': element.props.id,
        'onMouseDown': () => {
          // Firefox and Safari have relatedTarget null.
          // Therefore we cannot use onClick event
          // since it's not getting fired
          // because onBlur input listener cause rerender.
          setClickedElement(element.props.id)
        },
        'onMouseUp': (event) => {
          if (clickedElement === element.props.id)
            onOptionSelected(element.props.id)

          setClickedElement(null)
          event.stopPropagation()
        },
        'selected': element.props.id === activeOptionId,
      }

      return React.cloneElement(element, { ...element.props, ...overrideProps })
    }) || []

  const handleInputKeyEvent = (event) => {
    let pos =
      options.findIndex((s) => s.props['data-select-id'] === activeOptionId) ||
      options.length

    let direction = 1
    let suggestion = {}

    switch (event.key) {
      case 'Esc': // IE/Edge specific value
      case 'Escape':
        hideOptionMenu()
        break

      case 'Enter':
        event.preventDefault()
        event.stopPropagation()
        if (activeOptionId != null) onOptionSelected(activeOptionId)
        break

      case 'Up': // IE/Edge specific value
      case 'ArrowUp':
      case 'Down': // IE/Edge specific value
      case 'ArrowDown':
        event.preventDefault()
        event.stopPropagation()
        if (options.length === 0) return

        if (activeOptionId == null) {
          suggestion = options[0].props['data-select-id']
          setActiveOptionId(suggestion)
        } else {
          direction = ['ArrowDown', 'Down'].includes(event.key) ? 1 : -1
          pos = (pos + direction) % options.length
          suggestion = options[pos].props['data-select-id']
          setActiveOptionId(suggestion)
        }

        selectMenuRef.current
          .querySelector(`#suggestion-result-${selectId}-${suggestion}`)
          .scrollIntoView(false)
        break
      default:
    }
  }

  const handleInputBlurEvent = (event) => {
    // check if onBlur happen within select
    const { relatedTarget: el } = event
    if (
      clickedElement === null &&
      !(el && el.dataset.selectId === clickedElement)
    )
      hideOptionMenu()
  }

  return [
    selectMenuRef,
    options,
    activeOptionId,
    setActiveOptionId,
    handleInputKeyEvent,
    handleInputBlurEvent,
  ]
}

export default useOptions
