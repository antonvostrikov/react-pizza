import React from 'react'

import Categories from '../components/Categories'
import Sort from '../components/Sort'
import { Skeleton } from '../components/PizzaBlock/Skeleton'
import PizzaBlock from '../components/PizzaBlock/index'
import Pagination from '../components/Pagination/index'

import { useSelector, useDispatch } from 'react-redux'
import { setCategoryId, setActiveSort, setPageCount } from '../redux/slices/filterSlice'
import { getPizza } from '../redux/slices/pizzaSlice'

const Home: React.FC = () => {
  const { categoryId, sort, pageCount, searchPizza } = useSelector(state => state.filter)
  const { items, status } = useSelector(state => state.pizza)

  const dispatch = useDispatch()

  const onChangeCategory = (id: number) => {
    dispatch(setCategoryId(id))
  }

  const onChangeSort = (obj: Object) => {
    dispatch(setActiveSort(obj))
  }

  const onChangePageCount = (number: number) => {
    dispatch(setPageCount(number))
  }

  React.useEffect(() => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';

    dispatch(getPizza({
      category, sortBy, order, pageCount
    }))

    window.scrollTo(0, 0)
  }, [categoryId, sort, pageCount])

  const skeleton = [...Array(6)].map(( _, index) => <Skeleton key={index}/>)
  const pizzas = items.filter(obj => obj.name.toLowerCase().includes(searchPizza.toLowerCase())).map((item, index) => <PizzaBlock key={item.id} {...item} />)

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory}/>
        <Sort value={sort} onChangeSort={onChangeSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        { status === 'loading' ? skeleton : pizzas }
      </div>
      <Pagination pageCount={pageCount} onChangePage={onChangePageCount} />
    </>
  ) 
}

export default Home