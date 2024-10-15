import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get URL parameters
import './Css/collection.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../components/Items/Item';
import Header from '../components/Header';

function Collection() {
  const { allProducts } = useContext(ShopContext); // Destructure allProducts from the context
  const { category } = useParams(); // Get the category from the URL
  
  // Check if allProducts is undefined
  if (!allProducts) {
    return <div>Loading...</div>; // Optional: Handle loading state or error state
  }

  // Filter products based on category from the URL
  const filteredProducts = allProducts.filter((item) => {
    if (!category) {
      return true; // Show all products if no category is selected
    }
    return item.category === category; // Filter by category
  });

  return (
    <div className='shop-container'>
      <Header />
      <div className='shop-category'>
        {filteredProducts.map((item) => (
          <Item key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} />
        ))}
      </div>
    </div>
  );
}

export default Collection;
