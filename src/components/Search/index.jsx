import React from 'react'

import debounce from 'lodash.debounce'

import styles from './Search.module.scss'

import { PizzaContext } from '../../App'

export default function Search() {
  const [inputValue, setInputValue] = React.useState()
  const { setSearchPizza } = React.useContext(PizzaContext)
  const inputRef = React.useRef()

  const updateInputValue = React.useCallback(
    debounce((str) => {
      setSearchPizza(str)
    }, 350),
    []
  )

  const onClearInput = () => {
    setSearchPizza('')
    setInputValue('')
    inputRef.current.focus()
  }

  const onChangeInput = (e) => {
    setInputValue(e.target.value)
    updateInputValue(e.target.value)
  }

  return (
    <div className={styles.root}>
      {
        inputValue && (
          <svg 
            className={styles.icon} 
            height="48" 
            viewBox="0 0 48 48" 
            width="48" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClearInput}>
            <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
            <path d="M0 0h48v48h-48z" fill="none"/>
          </svg>
        )
      }
      <input ref={inputRef} className={styles.input} type="text" placeholder="Поиск пиццы..." value={inputValue} onChange={onChangeInput} />
    </div>
  )
}