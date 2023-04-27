import React from "react";

interface ICategoriesProps {
  value: number;
  onChangeCategory: (index: number) => void;
}

const categories:string[] = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

const Categories:React.FC<ICategoriesProps> = ({ value, onChangeCategory }) => {
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