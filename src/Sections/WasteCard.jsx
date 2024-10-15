import React from 'react';

function WasteProductCard({ category, measuringUnit, amount, price, departure }) {
  return (
    <div className="bg-green-300 p-4 rounded-lg shadow-md">
      
      <div className="bg-white w-full max-w-md p-8 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-2 text-gray">Waste Product</h3>
        <p ><strong>Category:</strong> {category}</p>
        <p><strong>Measuring Unit:</strong> {measuringUnit}</p>
        <p><strong>Amount:</strong> {amount}</p>
        <p><strong>Price:</strong> {price}</p>
        <p><strong>Departure:</strong> {departure}</p>
      </div>
    </div>
  );
}

export default WasteProductCard;
