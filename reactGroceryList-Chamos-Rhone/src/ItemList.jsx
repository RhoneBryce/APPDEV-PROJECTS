import React from 'react';

const ItemList = ({ items, addItemToCart }) => {
  return (
    <div>
      <h2>Items Available</h2>
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.name} className="item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <p>{item.name} - ${item.price.toFixed(2)}</p>
            </div>
            <button className="add-to-cart-button" onClick={() => addItemToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
