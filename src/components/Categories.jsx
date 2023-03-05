import React from 'react'

export default function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0) 

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  const onClickCategory = (index) => {
    setActiveCategory(index)
  }

  return (
    <div className="content__top">
      <div className="categories">
        <ul>
          { categories.map((value, index) => {
            return <li onClick={() => onClickCategory(index)} className={activeCategory === index ? 'active' : ''}>{value}</li>
          }) }
        </ul>
      </div>
    </div>
  )
}