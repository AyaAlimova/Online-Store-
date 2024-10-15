import React from 'react'
// import heels1 from '../assets/heels1.webp'
// import heels2 from '../assets/heels2.webp'
// import heels3 from '../assets/heels3.webp'
import './productSection.css'
import newCollection from '../assets/newCollection'
import Item from './Items/Item'


function ProductSection() {

  // const products = [
  //   {id:1, name: "Heels1", price: "$45", imgSrc: heels1},
  //   {id:2, name: "Heels2", price: "$55", imgSrc: heels2},
  //   {id:3, name: "Heels3", price: "$60", imgSrc: heels3}
  // ]
  return (

    <div className="new-collections">
        <h1>NEW COLLECTIONS</h1>
   
        <div className="collections">
        {newCollection.map((item, i) => {
          return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} price = {item.price}/>
         })}
        </div>
    </div>
    // <div className="main-container">
    //  <div className='product-container'>
    //   <h3><i>Rising Higher and Higher</i></h3>
    //   <h2>NEW COLLECTION</h2>
    //   <div className='product-grid'>
    //       {newCollection.map((item, i) => {
    //         return <Item key = {i} id = {item.id} name = {item.name} image = {item.image} price = {item.price}/>
    //       })}

    //     {/* {products.map(product => (
    //       <div key = {product.id} className='product-card'>
    //         <img src={product.imgSrc} alt={product.name} className='product-image'/>
    //         <p>{product.name}</p>
    //         <p>{product.price}</p>
    //       </div>
    //     ))} */}
    //   </div>
    //  </div>
    // </div>
  )
}

export default ProductSection