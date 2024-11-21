// EmployeeDashboard.js
import React, { useState } from 'react';

export const EmployeeDashboard = () => {
  const [customers, setCustomers] = useState([
    { 
      id: 1, 
      name: 'John Doe', 
      bookingDetails: 'Paris Adventure', 
      paymentStatus: 'Paid', 
      tourStatus: 'Confirmed' 
    },
    { 
      id: 2, 
      name: 'Jane Smith', 
      bookingDetails: 'Tokyo Explorer', 
      paymentStatus: 'Pending', 
      tourStatus: 'Pending' 
    }
  ]);

  const handleDelete = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
  };

  const handleUpdate = (id) => {
    const updatedCustomers = customers.map(customer => 
      customer.id === id 
        ? { ...customer, tourStatus: 'Updated' }
        : customer
    );
    setCustomers(updatedCustomers);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Employee Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-3 px-4 text-left">Customer Name</th>
              <th className="py-3 px-4 text-left">Booking Details</th>
              <th className="py-3 px-4 text-left">Payment Status</th>
              <th className="py-3 px-4 text-left">Tour Status</th>
              <th className="py-3 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(customer => (
              <tr key={customer.id} className="border-b">
                <td className="py-3 px-4">{customer.name}</td>
                <td className="py-3 px-4">{customer.bookingDetails}</td>
                <td className="py-3 px-4">{customer.paymentStatus}</td>
                <td className="py-3 px-4">{customer.tourStatus}</td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleUpdate(customer.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      Update
                    </button>
                    <button 
                      onClick={() => handleDelete(customer.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};