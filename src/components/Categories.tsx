import React from "react";

interface ICategoriesProps {
  value: number;
  onChangeCategory: any;
}

const Categories:React.FC<ICategoriesProps> = ({ value, onChangeCategory }) => {

  const categories:string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        { categories.map((categoryName, index) => {
          return <li key={index} onClick={() => onChangeCategory(index)} className={value === index ? 'active' : ''}>{categoryName}</li>
        }) }
      </ul>
    </div>
  )
}

export default Categories