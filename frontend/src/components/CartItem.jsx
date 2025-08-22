import React from 'react';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.title} />
      <div className="cart-details">
        <h4>{item.title}</h4>
        <p>Author: {item.author}</p>
        <p>₹{item.price}</p>
        <button onClick={() => onRemove(item.id)}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
