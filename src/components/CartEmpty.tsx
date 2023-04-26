import cartEmptyImage from '../assets/img/empty-cart.png'
import { Link } from 'react-router-dom'

export default function CartEmpty() {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая <span>😕</span></h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.<br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartEmptyImage} alt="Empty cart" />
      <Link to="/">
        <a href="/" className="button button--black">
          <span>Вернуться назад</span>
        </a>
      </Link>
    </div>
  )
}