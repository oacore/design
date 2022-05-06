import React, { useEffect } from 'react'

const useSwitch = (defaultChecked = false) => {
  const [isActivated, setIsActivated] = React.useState(defaultChecked)

  useEffect(() => {
    setIsActivated(defaultChecked)
  }, [defaultChecked])

  const toggleChange = () => {
    setIsActivated(!isActivated)
  }

  return {
    isActivated,
    toggleChange,
  }
}
export default useSwitch
