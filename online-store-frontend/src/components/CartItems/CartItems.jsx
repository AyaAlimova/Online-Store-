import React, { useContext } from 'react'
import './cartItems.css'
import { ShopContext } from '../../Context/ShopContext'

export const CartItems = () => {
  const {getTotalCartAmount, allProducts, cartItems, removeToCart} = useContext(ShopContext)
  return (
    <div className='cart-item'>
      <div className="cart-items-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allProducts.map((e) => {
        if(cartItems[e.id] > 0){
          return <div key={e.id}>
          <div className="cart-items-format cart-items-format-main">
            <img src = {e.image} alt='' className='cart-icon-product-icon' />
            <p>{e.name}</p>
            <p>${e.price}</p>
            <button className='cart-items-quantity'>{cartItems[e.id]}</button>
            <p>${e.price *cartItems[e.id]}</p>
            <button className = 'cart-item-remove-btn' onClick={() => {removeToCart(e.id)} }>Remove</button>
          </div>
          <hr />
        </div>
        }
        return null
      })}
      <div className="cart-item-down">
        <div className="cart-item-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-item-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-item-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-item-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
      </div>
      </div>
      
  )}

  export default CartItems