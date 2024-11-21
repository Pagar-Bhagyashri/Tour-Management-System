// Billing.js
import React from 'react';
import { useLocation } from 'react-router-dom';

export const Billing = () => {
  const location = useLocation();
  const { 
    tour, 
    quantity, 
    totalCost, 
    bookingId, 
    paymentMethod 
  } = location.state || {};

  if (!tour) return <div>No billing information available</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Booking Confirmation</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p><strong>Booking ID:</strong> {bookingId}</p>
            <p><strong>Tour:</strong> {tour.name}</p>
            <p><strong>Travelers:</strong> {quantity}</p>
          </div>
          <div>
            <p><strong>Start Date:</strong> {tour.startDate}</p>
            <p><strong>End Date:</strong> {tour.endDate}</p>
            <p><strong>Payment Method:</strong> {paymentMethod}</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-bold">Total Paid: ${totalCost}</h3>
          <p className="text-green-600">Booking Confirmed!</p>
        </div>
      </div>
    </div>
  );
};