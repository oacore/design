import { useEffect, useState } from 'react'

const useInputValue = (initialValue, { onInputChange }) => {
  const [value, changeValue] = useState(initialValue)

  useEffect(() => {
    changeValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    onInputChange(value)
  }, [value])

  return [value, changeValue]
}

export default useInputValue
