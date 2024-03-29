import React from "react"

import { addCart } from "../../redux/slices/cartSlice"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"

const typesPizza = ['тонкое', 'традиционное']

interface IPizzaBlockProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
}

const PizzaBlock:React.FC<IPizzaBlockProps> = ({ id, name, price, imageUrl, sizes, types }) => {
  const [activeType, setActiveNameType] = React.useState(0)
  const [activeSize, setActiveNameSize] = React.useState(0)

  const items = useSelector(state => state.cart.items.find(obj => obj.id === id)) 
  const dispatch = useDispatch()

  const newItem = items ? items.count : 0 

  const onClickAddItem = () => {
    const item = {
      id, 
      name,
      price, 
      type: typesPizza[activeType],
      size: sizes[activeSize],
      imageUrl
    }

    dispatch(addCart(item))
  }

  return(
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link to={`/pizza/${id}`}>
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
          />
        </Link>
        <h4 className="pizza-block__title">{name}</h4>
        <div className="pizza-block__selector">
          <ul>
            {
              types.map((type, index) => {
                return <li onClick={() => setActiveNameType(index)} key={index} className={activeType === index ? 'active' : ''}>{typesPizza[type]}</li>
              })
            }
          </ul>
          <ul>
            {
              sizes.map((size, index) => {
                return <li onClick={() => setActiveNameSize(index)} key={index} className={activeSize === index ? 'active' : ''}>{size} см.</li>
              })
            }
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} ₽</div>
          <div className="button button--outline button--add" onClick={onClickAddItem}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            {items && <i>{newItem}</i>}
          </div>
        </div>
      </div> 
    </div>
  )
}

export default PizzaBlock