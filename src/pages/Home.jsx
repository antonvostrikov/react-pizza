import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock/index'

import axios from 'axios'

export default function Home({ searchPizza, setSearchPizza }) {
  const [pizza, setPizza] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)
  const [categoryId, setCategoryId] = React.useState(0) 
  const [activeSort, setActiveSort] = React.useState({ title: 'популярности', sortProperty: 'rating' })

  React.useEffect(() => {
    setIsLoading(true)

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = activeSort.sortProperty.replace('-', '');
    const order = activeSort.sortProperty.includes('-') ? 'asc' : 'desc';    

    (async () => {
      try {
        const pizzaRequire = await axios.get(`http://localhost:3001/pizzas?${category}&_sort=${sortBy}&_order=${order}`)

        setIsLoading(false)
        setPizza(pizzaRequire.data)
        window.scrollTo(0, 0)
      } catch (e) {
        console.log(e)
      }
    })()

    window.scrollTo(0, 0)
  }, [categoryId, activeSort])

  const skeleton = [...Array(6)].map(( _, index) => <Skeleton key={index}/>)
  const pizzas = pizza.filter(obj => obj.name.toLowerCase().includes(searchPizza.toLowerCase())).map((item, index) => <PizzaBlock key={item.id} {...item} />)

  return (
    <>
      <div className="content__top">
          <Categories value={categoryId} onChangeCategory={setCategoryId}/>
          <Sort value={activeSort} onChangeSort={setActiveSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoading ? skeleton : pizzas }
      </div>
    </>
  ) 
}