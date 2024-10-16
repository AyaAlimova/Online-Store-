import React, { useState, useEffect } from 'react';
import './listProduct.css';

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:2020/api/allproducts')
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  };

  useEffect(() => {
    fetchInfo();
  }, []);
  
  // Remove product
  const remove_product = async (id) => {
    await fetch('http://localhost:2020/api/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id })
    });
    await fetchInfo();
  };

  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="list-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Category</p>   
        <p>Remove</p>
      </div>
      <div className="list-allproducts">
        <hr />
        {allproducts.map((product) => {
          return (
            <>
            <div key={product._id} className="list-format-main listproduct-format">
              <img src={product.image} className='listproduct-item' />
              <p>{product.name}</p>
              <p>${product.price}</p>
              <p>{product.category}</p>
              <button onClick={() => { remove_product(product.id); }} className='removeBtn'>Delete</button> 
            </div>
            <hr />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ListProduct;
