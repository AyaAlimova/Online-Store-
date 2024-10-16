import React, { useContext } from 'react'
import './productDisplay.css'
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext)
  return (
    <div className='product-display'>
      <div className="product-display-left">
        <div className="product-display-img">
          <img src={product.image} alt='' />
        </div>
      </div>
    <div className="product-display-right">
        <h1>{product.name}</h1>
    
    <div className="price">
      ${product.price}
    </div>
     {/* Size dropdown */}
     <div className="product-size">
        <label htmlFor="size">Choose your Size</label>
        <select id="size">
          {/* Manually adding size options */}
          <option value="38">6</option>
          <option value="39">7</option>
          <option value="40">8</option>
          <option value="41">9</option>
        </select>
      </div>
    <div className="description">
      {product.description}
    </div>
    
    <button onClick={() =>{addToCart(product.id)}} className='add-to-cart-btn'>ADD TO CART</button>
    </div>
    </div>
  )
}
