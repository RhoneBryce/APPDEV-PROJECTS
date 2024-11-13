import React from 'react';

function Cart({ cart, totalPrice }) {
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in your cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
      )}
      <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;