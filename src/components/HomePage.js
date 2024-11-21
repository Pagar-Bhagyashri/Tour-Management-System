// HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const featuredTours = [
    {
      id: 1,
      title: 'Paris Adventure',
      price: '$1,299',
      duration: '7 Days',
      image: 'Paris sunset.png',
      description: 'Experience the magic of the City of Light'
    },
    {
      id: 2,
      title: 'Tokyo Explorer',
      price: '$1,599',
      duration: '8 Days',
      image: 'Tokyo.png',
      description: 'Discover the blend of tradition and modernity'
    },
    {
      id: 3,
      title: 'Bali Paradise',
      price: '$999',
      duration: '5 Days',
      image: 'Bali.png',
      description: 'Relax in tropical beaches and ancient temples'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      text: 'The best travel experience of my life! Everything was perfectly organized.',
      location: 'New York, USA'
    },
    {
      id: 2,
      name: 'Mark Williams',
      text: 'Exceptional service and amazing destinations. Will definitely book again!',
      location: 'London, UK'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gray-900 h-[500px]">
        <img 
          src="/api/placeholder/1920/500" 
          alt="Travel Hero" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl mb-8 text-center max-w-2xl">
            Explore the world's most beautiful destinations with our expertly curated tours
          </p>
          <Link 
            to="/tours" 
            className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Explore Tours
          </Link>
        </div>
      </div>

      {/* Featured Tours Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Tours</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTours.map(tour => (
            <div key={tour.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={tour.image} 
                alt={tour.title} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-blue-500 font-bold">{tour.price}</span>
                    <span className="text-gray-500 ml-2">/ {tour.duration}</span>
                  </div>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-semibold mb-2">Expert Guides</h3>
              <p className="text-gray-600">Professional and knowledgeable guides for every tour</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Best Value</h3>
              <p className="text-gray-600">Competitive prices and exclusive deals</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Safe Travel</h3>
              <p className="text-gray-600">Your safety and comfort are our top priorities</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Travelers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8">Join us today and discover the world's most amazing destinations</p>
          <Link 
            to="/register" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </div>
  );
};