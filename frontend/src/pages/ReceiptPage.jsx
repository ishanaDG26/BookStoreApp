import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReceiptPage = () => {
  const navigate = useNavigate();
  const checkoutInfo = JSON.parse(localStorage.getItem('checkoutInfo'));
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handleDone = () => {
    localStorage.removeItem('cart');
    localStorage.removeItem('checkoutInfo');
    navigate('/');
  };

  return (
    <div className="container">
      <h2 className="text-center">Order Receipt</h2>
      <p><strong>Address:</strong> {checkoutInfo?.address}</p>
      <p><strong>Payment:</strong> {checkoutInfo?.paymentMethod === 'cod' ? 'Cash on Delivery' : 'N/A'}</p>

      <h3>Items:</h3>
      <ul>
        {cartItems.map((item, idx) => (
          <li key={idx}>{item.title} - ₹{item.price}</li>
        ))}
      </ul>

      <h3>Total: ₹{total}</h3>

      <button className="primary-btn" onClick={handleDone}>Finish</button>
    </div>
  );
};

export default ReceiptPage;
