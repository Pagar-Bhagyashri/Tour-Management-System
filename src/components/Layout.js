// Layout.js
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="min-h-screen">
      <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-gray-800">
                Tour Management
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              {/* Update to /contact-us */}
              <Link to="/contact-us" className="text-gray-600 hover:text-gray-900">
                Contact Us
              </Link>
              <Link to="/login" className="text-gray-600 hover:text-gray-900">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
        <Outlet />
      </div>
    </div>
  );
};
