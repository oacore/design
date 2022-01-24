import React, { useEffect, useState, useCallback, useRef } from 'react'
import { throttle } from 'throttle-debounce'

import { HEADER_ACTIONS } from './context'
import styles from './styles.css'

import { useDesignContext } from 'context'
import { classNames } from 'utils'
import { Select } from 'modules'
import { AppBar, Icon } from 'elements'
import { useWindowSize, useOutsideClick } from 'hooks'

export const useSearchBar = (config, { isHidden = false } = {}) => {
  const [
    {
      header: { searchBar },
    },
    dispatch,
  ] = useDesignContext({ skipUninitializedWarning: true })

  // track whether search bar is configured or not
  // we cannot use simple Boolean(searchBar) because
  // when DISABLE_SEARCH_BAR action is called it take some time to propagate
  // back here, i.e. useEffect warning message may be shown incorrectly
  const isConfigured = useRef(Boolean(searchBar))

  useEffect(() => {
    const isConfig = Boolean(config)
    if (isConfig) {
      if (isConfigured.current && process.env.NODE_ENV === 'development') {
        console.warn(
          'Search bar is already configured.' +
            " It's recommended to use `useSearchBar` once per page." +
            ' Otherwise it may lead to undesired behaviour'
        )
      }

      dispatch({
        type: HEADER_ACTIONS.CONFIGURE_SEARCH_BAR,
        payload: {
          ...config,
          isHidden,
        },
      })
      isConfigured.current = true
    }
    return () => {
      if (isConfig) {
        isConfigured.current = false
        dispatch({ type: HEADER_ACTIONS.DISABLE_SEARCH_BAR })
      }
    }
  }, [])

  useEffect(() => {
    const isConfig = Boolean(config)
    if (isConfig && isConfigured.current && searchBar?.isHidden !== isHidden) {
      dispatch({
        type: HEADER_ACTIONS.CONFIGURE_SEARCH_BAR,
        payload: { isHidden },
      })
    }
  }, [isHidden])

  return searchBar
}

const SearchBar = () => {
  // At this moment we are sure search bar is enabled and configured
  const {
    initQuery,
    getSuggestions,
    onQueryChanged,
    suggestionsDelay = 500,
    isHidden: isHiddenIconAndBar,
    useAdvancedSearch,
    changeOnBlur,
    searchBarProps: { selectClassName, ...restSearchBarProps } = {},
    appBarItemProps: { appBarItemClassName, ...restAppBarItemProps } = {},
  } = useSearchBar()

  const { width } = useWindowSize()

  const [suggestions, setSuggestions] = useState([])
  const [value, setValue] = useState(initQuery || '')
  const [isVisibleSearchBar, setIsVisibliSearchBar] = useState(false)

  const searchInputRef = useRef()

  const suggest = useCallback(
    throttle(suggestionsDelay, false, (searchTerm) => {
      if (getSuggestions) setSuggestions(getSuggestions(searchTerm))
    }),
    [getSuggestions, suggestionsDelay]
  )
  const handleOnChange = (data) => {
    onQueryChanged(data.value)
  }

  const onToggleVisibleSearchBar = () => {
    setIsVisibliSearchBar(!isVisibleSearchBar)
  }

  const onCloseSearchBar = () => {
    setIsVisibliSearchBar(false)
  }

  const handleOnInput = (data) => {
    setValue(data.value)
    // if id doesn't exist it means user type own text
    // and didn't use suggestion
    if (!data.id) suggest(data.value)
  }

  useOutsideClick(searchInputRef, onCloseSearchBar)

  return (
    <>
      <AppBar.Item
        className={classNames.use(styles.searchBarItem, appBarItemClassName)}
        hidden={!isVisibleSearchBar}
        ref={searchInputRef}
        {...restAppBarItemProps}
      >
        <Select
          id="app-bar-search"
          value={value}
          variant="pure"
          onChange={handleOnChange}
          onInput={handleOnInput}
          changeOnBlur={changeOnBlur || width < 500}
          className={classNames.use(styles.select, selectClassName)}
          useAdvancedSearch={useAdvancedSearch}
          appendText={useAdvancedSearch && 'How to search?'}
          {...restSearchBarProps}
        >
          {suggestions.map((el) => (
            <Select.Option
              key={el.id}
              id={el.id}
              value={el.value}
              icon={el.icon}
            >
              {el.value}
            </Select.Option>
          ))}
        </Select>
      </AppBar.Item>
      <AppBar.Item
        className={classNames.use(
          styles.searchBarItem,
          styles.searchBarItemIcon
        )}
        hidden={isHiddenIconAndBar || isVisibleSearchBar}
      >
        <Icon src="#magnify" onClick={onToggleVisibleSearchBar} />
      </AppBar.Item>
    </>
  )
}

const SearchBarOrEmpty = () => {
  const searchBarConfig = useSearchBar()

  if (!searchBarConfig) return null
  return <SearchBar />
}

export default SearchBarOrEmpty
