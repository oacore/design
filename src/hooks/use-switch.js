import React from 'react'

const useSwitch = (defaultChecked = false) => {
  const [isActivated, setIsActivated] = React.useState(defaultChecked)

  const toggleChange = () => {
    setIsActivated(!isActivated)
  }

  return {
    isActivated,
    toggleChange,
  }
}
export default useSwitch
