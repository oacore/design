import { useEffect, useRef, useState } from 'react'

const useInput = (value, { onInput, onChange }) => {
  const inputRef = useRef(null)
  const [inputData, changeInputData] = useState({ value })
  const [isInputFocused, setIsInputFocused] = useState(null)

  useEffect(() => {
    if(value !== inputData.value)
      changeInputData({ value: inputData.value })
  }, [value])

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
