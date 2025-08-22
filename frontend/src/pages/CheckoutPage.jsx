import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

const CheckoutPage = () => {
  const [address, setAddress] = useState('');
  const [selectedPayment, setSelectedPayment] = useState('cod');
  const navigate = useNavigate();

  const handleCheckout = (e) => {
    e.preventDefault();

    if (!address.trim()) {
      alert('Please enter your delivery address.');
      return;
    }

    localStorage.setItem('checkoutInfo', JSON.stringify({
      address,
      paymentMethod: selectedPayment,
    }));

    navigate('/receipt');
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form className="checkout-form" onSubmit={handleCheckout}>
        <div className="form-control">
          <label htmlFor="address">Delivery Address</label>
          <textarea
            id="address"
            rows="4"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <div className="payment-method">
            <label>Payment Method</label>
            <div className="payment-option">
              <input
                type="radio"
                id="cod"
                name="payment"
                value="cod"
                checked={selectedPayment === 'cod'}
                onChange={(e) => setSelectedPayment(e.target.value)}
              />
              <label htmlFor="cod">Cash on Delivery</label>
            </div>
          </div>
        </div>

        <button type="submit" className="primary-btn">
          Confirm Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;