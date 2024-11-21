import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './components/HomePage';
import { LoginOptions } from './components/LoginOptions';
import { CustomerLogin } from './components/CustomerLogin';
import { TourPackages } from './components/TourPackages';
import { BookTour } from './components/BookTour';
import { Payment } from './components/Payment';
import { Billing } from './components/Billing';
import ContactUs from './components/ContactUs';
import { Register } from './components/Register';
import { EmployeeLogin } from './components/EmployeeLogin';
import { EmployeeDashboard } from './components/EmployeeDashboard';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginOptions />} />
          <Route path="customer-login" element={<CustomerLogin />} />
          <Route path="register" element={<Register />} />
          <Route path="tour-packages" element={<TourPackages />} />
          <Route path="employee-login" element={<EmployeeLogin />} /> 
          <Route path="employee-dashboard" element={<EmployeeDashboard />} />
          <Route path="book-tour/:packageId" element={<BookTour />} />
          <Route path="payment/:bookingId" element={<Payment />} />
          <Route path="billing" element={<Billing />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;