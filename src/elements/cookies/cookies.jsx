import React, { useCallback, useState, useEffect } from 'react'

import CookiesPopup from './popup'

import { useCookie, useCookieHandler, useCookieItems } from 'hooks'
import {} from '../../hooks/use-cookies'

const Cookies = () => {
  const cookieHandler = useCookieHandler()

  const [visibleCookiePopup, setVisibleCookiePopup] = useState(
    !useCookie('essential_cookies_allowed')
  )

  const cookieItems = useCookieItems()

  const popupItems = cookieItems.map(({ name, title }) => ({
    name,
    title,
  }))

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.location.pathname === '/cookies'
    )
      setVisibleCookiePopup(false)
  }, [])

  const onAcceptCookies = useCallback((e) => {
    setVisibleCookiePopup(false)
    cookieHandler(e)
  }, [])

  return (
    visibleCookiePopup && (
      <CookiesPopup onSubmit={onAcceptCookies} actionItems={popupItems} />
    )
  )
}
export default Cookies
