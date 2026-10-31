import React from 'react';

export const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button>Add to Cart</button>
    </div>
  );
};
