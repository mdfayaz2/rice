import React, { useState, useEffect } from 'react';
import './Product.css'; 
import productsData from '../../components/product/products.json'; 

const Product = () => {
  const [products, setProducts] = useState([]);
  

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div id="products">
      <h1 className='heading'>OUR PRODUCTS</h1>
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={`${process.env.PUBLIC_URL}/images/${product.image}`}
            alt={product.name}
            className="product-image"
          />
          <h2>{product.name}</h2>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Product;
