import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Default customer credentials
const DEFAULT_CUSTOMERS = [
  { username: 'john_doe', password: 'password123', name: 'John Doe' },
  { username: 'Bhagyashri', password: 'travel2024', name: 'Jane Smith' }
];

export const CustomerLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check against default customers
    const customer = DEFAULT_CUSTOMERS.find(
      c => c.username === username && c.password === password
    );

    if (customer) {
      // Successful login
      navigate('/tour-packages');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Customer Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block mb-2">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              required 
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <p>New User?</p>
          <button 
            onClick={handleRegister}
            className="text-blue-500 hover:underline"
          >
            Register Here
          </button>
        </div>
      </div>
    </div>
  );
};