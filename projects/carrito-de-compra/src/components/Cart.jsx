import React, { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons'
import '../style/cart.css'
import { useCart } from '../hooks/useCart'
const Cart = () => {
  function CartItem ({ thumbnail, price, title, quantity, addToCart }) {
    return (
      <li>
        <img src={thumbnail} alt={title} />
        <div>
          <strong>{title}</strong> -${price}
        </div>
        <footer>
          <small>
            Qty:{quantity}
          </small>
          <button onClick={addToCart}>+</button>
        </footer>
      </li>
    )
  }

  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' id={cartCheckboxId} hidden />

      <aside className='cart'>

        <ul>
          {cart.map(product => (
            <CartItem key={product.id} {...product} addToCart={() => addToCart(product)} />
          ))}
        </ul>
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export default Cart
