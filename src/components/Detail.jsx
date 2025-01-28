import React from 'react';
import { useParams } from 'react-router-dom';
import Products from '../data/data'; // Import product data

export default function Detail() {
  // Use useParams to get the id from the URL
  const { id } = useParams();

  // Find the product by id
  const product = Products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={`../Kitchens/${product.name}.jpg`} alt={product.name} height={350} />
      {/* You can add more details about the product here */}
    </div>
  );
}
