import React from 'react'

import styles from './Search.module.scss'

import { PizzaContext } from '../../App'

export default function Search() {
  const { searchPizza, setSearchPizza } = React.useContext(PizzaContext)

  return (
    <div className={styles.root}>
      {
        searchPizza && (
          <svg 
            className={styles.icon} 
            height="48" 
            viewBox="0 0 48 48" 
            width="48" 
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setSearchPizza('')}>
            <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
            <path d="M0 0h48v48h-48z" fill="none"/>
          </svg>
        )
      }
      <input className={styles.input} type="text" placeholder="Поиск пиццы..." value={searchPizza} onChange={(e) => setSearchPizza(e.target.value)} />
    </div>
  )
}