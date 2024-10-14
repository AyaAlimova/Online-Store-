import React, { useState } from 'react'

function Collection() {
  const [listOfProducts, setListOfProducts] = useState([]);

  return (
    <div className='collection'>
        {listOfProducts.map((products) => {
          return (
            <div>
                <p>Name: {products.name}</p>
                <p>price: {products.price}</p>
                <p>images: {products.images}</p>
                <p>Description: {products.description}</p>
            </div>
          );
        })}
    </div>
  )
}

export default Collection