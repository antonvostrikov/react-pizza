import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock/index'

import axios from 'axios'

export default function Home() {
  const [pizza, setPizza] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    (async () => {
      try {
        const pizzaRequire = await axios.get('http://localhost:3001/pizzas')
        
        setIsLoading(false)
        setPizza(pizzaRequire.data)
        window.scrollTo(0, 0)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return (
    <>
      <div className="content__top">
          <Categories />
          <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoading ? [...Array(6)].map((_, index) => <Skeleton key={index}/>) : pizza.map((item, index) => <PizzaBlock key={item.id} {...item} />) }
      </div>
    </>
  ) 
}