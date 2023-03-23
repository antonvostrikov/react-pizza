import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock/index'

import axios from 'axios'
import Pagination from '../components/Pagination/index'

import { PizzaContext } from '../App'

import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId, setActiveSort, setPageCount } from '../redux/slices/filterSlice'

export default function Home() {
  const [pizza, setPizza] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  const { searchPizza } = React.useContext(PizzaContext)

  const {categoryId, sort, pageCount} = useSelector(state => state.filter)

  const dispatch = useDispatch()

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const onChangeSort = (obj) => {
    dispatch(setActiveSort(obj))
  }

  const onChangePageCount = (number) => {
    dispatch(setPageCount(number))
  }

  React.useEffect(() => {
    setIsLoading(true)

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

    (async () => {
      try {
        const pizzaRequire = await axios.get(`http://localhost:3001/pizzas?_page=${pageCount}&_limit=4&${category}&_sort=${sortBy}&_order=${order}`)

        setIsLoading(false)
        setPizza(pizzaRequire.data)
        window.scrollTo(0, 0)
      } catch (e) {
        console.log(e)
      }
    })()

    window.scrollTo(0, 0)
  }, [categoryId, sort, pageCount])

  const skeleton = [...Array(6)].map(( _, index) => <Skeleton key={index}/>)
  const pizzas = pizza.filter(obj => obj.name.toLowerCase().includes(searchPizza.toLowerCase())).map((item, index) => <PizzaBlock key={item.id} {...item} />)

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
        <Sort value={sort} onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { isLoading ? skeleton : pizzas }
      </div>
      <Pagination pageCount={pageCount} onChangePage={onChangePageCount} />
    </>
  ) 
}