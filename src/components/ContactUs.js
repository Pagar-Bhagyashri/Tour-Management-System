// components/ContactUs.js
import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold">Contact Us</h2>
      <div className="mt-4">
        <p>We are located in Boston. Feel free to reach out!</p>
        {/* You can add a map image here */}
        <img
          src="contactus.png" // Replace with your map image URL
          alt="Location Map"
          className="w-full h-64 object-cover mt-4"
        />
      </div>

      {/* Contact Form */}
      <div className="mt-8">
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Any Questions?</label>
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded-md"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Submit
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center">
        <p>Made by Bhagyashri Pagar</p>
        <p>Northeastern University Boston, MA</p>
        <p>Email: Bhagyashri@northeastern.edu</p>
        <p>Phone: 123-456-7890</p>
      </footer>
    </div>
  );
};

export default ContactUs;
