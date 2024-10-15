import React from 'react'
import './item.css'

function Item(props) {
  return (
    <div className='item'>
      <img src ={props.image} className='product-img'/>
      <p>{props.name}</p>
      <p> ${props.price}</p>
    </div>
  )
}

export default Item