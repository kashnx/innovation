import React, { useState } from 'react';
import ProductList from './ProductList';

function Homepage() {
  const [receivers, setReceivers] = useState([
    {
      id: 1,
      name: 'Alice',
      location: 'New York, USA',
      contact: 'alice@example.com',
      role: 'Receiver',
      // Add more receiver details as needed
    },
    {
      id: 2,
      name: 'Bob',
      location: 'London, UK',
      contact: 'bob@example.com',
      role: 'Receiver',
      // Add more receiver details as needed
    },
    // Add more receivers as needed
  ]);

  const [products, setProducts] = useState([
    {
      id: 1,
      title: 'Smartphone',
      description: 'Brand new smartphone for sale.',
      price: '$300',
      sellerId: 1, // This indicates that Alice is the seller
    },
    {
      id: 2,
      title: 'Laptop',
      description: 'Powerful laptop with high performance.',
      price: '$800',
      sellerId: 2, // This indicates that Bob is the seller
    },
    {
        id: 2,
        title: 'Laptop',
        description: 'Powerful laptop with high performance.',
        price: '$800',
        sellerId: 2, // This indicates that Bob is the seller
      },
      {
        id: 2,
        title: 'Laptop',
        description: 'Powerful laptop with high performance.',
        price: '$800',
        sellerId: 2, // This indicates that Bob is the seller
      },
    // Add more product data as needed
  ]);

  return (
    <div className="bg-green-300 min-h-screen p-4">
      <h1 className="text-3xl font-semibold mb-4" style={{ marginLeft: '100px' }}>
        Welcome to our Marketplace
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => {
          // Find the receiver associated with the product's sellerId
          const seller = receivers.find((receiver) => receiver.id === product.sellerId);

          return (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md" style={{ marginLeft: '100px' }}>
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-green-600 font-semibold">{product.price}</p>
              <p className="text-gray-600">Seller: {seller.name}</p>
              <p className="text-gray-600">Location: {seller.location}</p>
              <p className="text-gray-600">Contact: {seller.contact}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Homepage;
