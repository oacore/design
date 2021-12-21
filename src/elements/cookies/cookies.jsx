import React, { useCallback, useState, useEffect } from 'react'

import CookiesPopup from './popup'

import { useCookie, useCookieHandler } from 'hooks'

const Cookies = () => {
  const cookieHandler = useCookieHandler()

  const [visibleCookiePopup, setVisibleCookiePopup] = useState(
    !useCookie('cookies_accepted')
  )

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

  return visibleCookiePopup && <CookiesPopup onSubmit={onAcceptCookies} />
}
export default Cookies
