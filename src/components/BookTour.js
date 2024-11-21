import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const TOUR_PACKAGES = [
    {
      id: 1,
      name: 'Tropical Paradise',
      price: 1500,
      startDate: '2024-07-15',
      endDate: '2024-07-25'
    },
    {
      id: 2,
      name: 'Mountain Adventure',
      price: 1200,
      startDate: '2024-08-10',
      endDate: '2024-08-20'
    },
    {
      id: 3,
      name: 'City Lights Tour',
      price: 1800,
      startDate: '2024-09-05',
      endDate: '2024-09-15'
    },
    {
      id: 4,
      name: 'Beach Escape',
      price: 2000,
      startDate: '2024-10-01',
      endDate: '2024-10-11'
    },
    {
      id: 5,
      name: 'European Expedition',
      price: 3500,
      startDate: '2024-11-20',
      endDate: '2024-12-05'
    },
    {
      id: 6,
      name: 'Winter Wonderland',
      price: 2200,
      startDate: '2025-01-15',
      endDate: '2025-01-25'
    },
    {
      id: 7,
      name: 'Safari Adventure',
      price: 2800,
      startDate: '2025-02-10',
      endDate: '2025-02-20'
    },
    {
      id: 8,
      name: 'Cultural Heritage Tour',
      price: 2500,
      startDate: '2025-03-15',
      endDate: '2025-03-25'
    },
    {
      id: 9,
      name: 'Island Hopping Expedition',
      price: 3200,
      startDate: '2025-04-05',
      endDate: '2025-04-15'
    },
    {
      id: 10,
      name: 'Wellness Retreat',
      price: 2600,
      startDate: '2025-05-20',
      endDate: '2025-05-30'
    },
    {
      id: 11,
      name: 'Culinary Journey',
      price: 2300,
      startDate: '2025-06-10',
      endDate: '2025-06-20'
    },
    {
      id: 12,
      name: 'Adventure Sports Expedition',
      price: 2700,
      startDate: '2025-07-15',
      endDate: '2025-07-25'
    }
  ];
  

export const BookTour = () => {
  const { packageId } = useParams();
  const navigate = useNavigate();
  
  const tour = TOUR_PACKAGES.find(t => t.id === parseInt(packageId));
  
  const [quantity, setQuantity] = useState(1);

  const calculateTotalCost = () => {
    return tour.price * quantity;
  };

  const handleBooking = () => {
    // Generate a random booking ID
    const bookingId = `BOOK-${Math.floor(Math.random() * 100000)}`;
    
    navigate(`/payment/${bookingId}`, {
      state: {
        tour,
        quantity,
        totalCost: calculateTotalCost(),
        bookingId
      }
    });
  };

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold mb-6">{tour.name} Booking</h1>
        <div className="mb-4">
          <strong>Start Date:</strong> {tour.startDate}
        </div>
        <div className="mb-4">
          <strong>End Date:</strong> {tour.endDate}
        </div>
        <div className="mb-4">
          <strong>Price per Person:</strong> ${tour.price}
        </div>
        <div className="mb-4">
          <label className="block mb-2">Number of Travelers</label>
          <input 
            type="number" 
            min="1" 
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <strong>Total Cost:</strong> ${calculateTotalCost()}
        </div>
        <button 
          onClick={handleBooking}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};