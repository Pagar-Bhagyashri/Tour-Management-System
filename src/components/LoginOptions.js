// LoginOptions.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginOptions = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Login Options</h2>
      <div className="space-y-4">
        <button
          onClick={() => navigate('/customer-login')}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Login as Customer
        </button>
        <button
          onClick={() => navigate('/employee-login')}
          className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
        >
          Login as Employee
        </button>
      </div>
    </div>
  );
};