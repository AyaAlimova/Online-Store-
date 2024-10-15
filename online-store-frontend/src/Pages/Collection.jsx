import React, { useContext } from 'react';
import './Css/collection.css'
import { ShopContext } from '../Context/ShopContext'; // Adjust the path as needed
import Item from '../components/Items/Item';
import Header from '../components/Header';

function Collection() {
  const { allProducts } = useContext(ShopContext); // Destructure allProducts from the context

  // Check if allProducts is undefined
  if (!allProducts) {
    return <div>Loading...</div>; // Optional: Handle loading state or error state
  }

  return (
   <div className='shop-container' >
    <Header />
    <div className='shop-category'>
      {allProducts.map((item) => (
        <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
      ))}
    </div>
  </div>
);
}

export default Collection;
