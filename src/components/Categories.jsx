import React from 'react'

export default function Categories() {
  const [activeCategory, setActiveCategory] = React.useState(0) 

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        { categories.map((value, index) => {
          return <li key={index} onClick={() => setActiveCategory(index)} className={activeCategory === index ? 'active' : ''}>{value}</li>
        }) }
      </ul>
    </div>
  )
}