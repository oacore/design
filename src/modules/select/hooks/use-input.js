import { useEffect, useRef, useState } from 'react'

const useInput = (initialValue, { onInput, onChange }) => {
  const inputRef = useRef(null)
  const [inputData, changeInputData] = useState({ value: initialValue })
  const [isInputFocused, setIsInputFocused] = useState(null)

  useEffect(() => {
    changeInputData({ value: inputData.value })
  }, [initialValue])

  useEffect(() => {
    onInput(inputData)
  }, [inputData])

  useEffect(() => {
    if (isInputFocused === false) {
      onChange(inputData)
      // hide cursor from input field
      inputRef.current.blur()
    }
  }, [isInputFocused])

  return [
    inputRef,
    inputData,
    changeInputData,
    isInputFocused,
    setIsInputFocused,
  ]
}

export default useInput
