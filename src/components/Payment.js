// Payment.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tour, quantity, totalCost } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePayment = () => {
    if (paymentMethod) {
      navigate('/billing', { 
        state: { 
          tour, 
          quantity, 
          totalCost,
          bookingId: `TOUR-${Math.floor(Math.random() * 100000)}`,
          paymentMethod
        } 
      });
    } else {
      alert('Please select a payment method');
    }
  };

  if (!tour) return <div>No tour selected</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Payment</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
        <div>
          <p><strong>Tour:</strong> {tour.name}</p>
          <p><strong>Quantity:</strong> {quantity}</p>
          <p><strong>Total Cost:</strong> ${totalCost}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2">Select Payment Method</h3>
          <div className="space-y-2">
            <label className="block">
              <input 
                type="radio" 
                name="payment" 
                value="credit"
                checked={paymentMethod === 'credit'}
                onChange={() => setPaymentMethod('credit')}
              /> Credit Card
            </label>
            <label className="block">
              <input 
                type="radio" 
                name="payment" 
                value="paypal"
                checked={paymentMethod === 'paypal'}
                onChange={() => setPaymentMethod('paypal')}
              /> PayPal
            </label>
          </div>
        </div>
        <button 
          onClick={handlePayment}
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
};