import cartEmptyImage from '../assets/img/empty-cart.png'
import { Link } from 'react-router-dom'

export default function CartEmpty() {
  return (
    <div class="cart cart--empty">
      <h2>Корзина пустая <icon>😕</icon></h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.<br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cartEmptyImage} alt="Empty cart" />
      <Link to="/">
        <a href="/" class="button button--black">
          <span>Вернуться назад</span>
        </a>
      </Link>
    </div>
  )
}