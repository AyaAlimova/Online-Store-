import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { PageNavigator } from '../components/PageNavigator/PageNavigator';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import Header from '../components/Header';

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();

  // Add a check for undefined allProducts
  if (!allProducts) {
    return <div>Loading...</div>; // Optional: Loading state if products are not yet available
  }

  const product = allProducts.find((e) => e.id === Number(productId));

  // Handle the case where the product isn't found (e.g., invalid productId)
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Header />
      <PageNavigator product={product} />
      <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
