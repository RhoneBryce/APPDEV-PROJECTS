import React from 'react';

function Receipt({ receipt }) {
  return (
    <div>
      <h2>Receipt</h2>
      <h3>Items Purchased:</h3>
      <ul>
        {receipt.items.map((item, index) => (
          <li key={index}>{item.name} - ${item.price.toFixed(2)}</li>
        ))}
      </ul>
      <h3>Total Price: ${receipt.totalPrice.toFixed(2)}</h3>
      <h3>Amount Paid: ${receipt.amountPaid.toFixed(2)}</h3>
      <h3>Change: ${receipt.change.toFixed(2)}</h3>
    </div>
  );
}

export default Receipt;