import React from 'react';

function ProductList({ products }) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Products for Sale</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-green-600 font-semibold">{product.price}</p>
            <p className="text-gray-600">Seller ID: {product.sellerId}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
