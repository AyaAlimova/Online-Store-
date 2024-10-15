import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'

function Item(props) {
  return (
    <div className='item'>
     <Link to={`/product/${props.id}`}><img src ={props.image} className='product-img'/></Link> 
      <p>{props.name}</p>
      <p> ${props.price}</p>
      
    </div>
  )
}

export default Item