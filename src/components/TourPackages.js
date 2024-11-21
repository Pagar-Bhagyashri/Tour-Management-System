import React from 'react';
import { useNavigate } from 'react-router-dom';

const TOUR_PACKAGES = [
  {
    id: 1,
    name: 'Tropical Paradise',
    description: 'Relax in a beautiful tropical destination',
    price: 1500,
    startDate: '2024-07-15',
    endDate: '2024-07-25',
    services: ['Accommodation', 'Meals', 'Transport', 'Guided Tours'],
    image: 'TropicalParadise.png'
  },
  {
    id: 2,
    name: 'Mountain Adventure',
    description: 'Explore breathtaking mountain landscapes',
    price: 1200,
    startDate: '2024-08-10',
    endDate: '2024-08-20',
    services: ['Accommodation', 'Meals', 'Transport', 'Hiking Guides'],
    image: 'Mountains.png'
  },
  {
    id: 3,
    name: 'City Lights Tour',
    description: 'Discover vibrant urban experiences and cultural highlights',
    price: 1800,
    startDate: '2024-09-05',
    endDate: '2024-09-15',
    services: ['City Tours', 'Museum Passes', 'Local Transportation', 'Cultural Experiences'],
    image: 'Citylighttour.png'
  },
  {
    id: 4,
    name: 'Beach Escape',
    description: 'Unwind on pristine beaches with water activities',
    price: 2000,
    startDate: '2024-10-01',
    endDate: '2024-10-11',
    services: ['Beach Resort', 'Water Sports', 'Meals', 'Relaxation Packages'],
    image: 'BeachEscape.png'
  },
  {
    id: 5,
    name: 'European Expedition',
    description: 'Multi-country tour exploring European cultures and landmarks',
    price: 3500,
    startDate: '2024-11-20',
    endDate: '2024-12-05',
    services: ['International Flights', 'Accommodation', 'Guided Tours', 'Transportation'],
    image: 'EuropeanTour.png'
  },
  {
    id: 6,
    name: 'Winter Wonderland',
    description: 'Skiing and snow adventures in picturesque mountain resorts',
    price: 2200,
    startDate: '2025-01-15',
    endDate: '2025-01-25',
    services: ['Ski Resort', 'Equipment Rental', 'Ski Lessons', 'Meals'],
    image: 'WinterTour.png'
  },
  {
    id: 7,
    name: 'Safari Adventure',
    description: 'Explore wildlife and natural wonders in an exotic safari destination',
    price: 2800,
    startDate: '2025-02-10',
    endDate: '2025-02-20',
    services: ['Wildlife Tours', 'Accommodation', 'Expert Guides', 'Game Drives'],
    image: 'SafariTour.png'
  },
  {
    id: 8,
    name: 'Cultural Heritage Tour',
    description: 'Deep dive into ancient civilizations and historical landmarks',
    price: 2500,
    startDate: '2025-03-15',
    endDate: '2025-03-25',
    services: ['Historical Site Visits', 'Local Guides', 'Cultural Workshops', 'Transportation'],
    image: 'CulturalTour.png'
  },
  {
    id: 9,
    name: 'Island Hopping Expedition',
    description: 'Explore multiple tropical islands with unique experiences',
    price: 3200,
    startDate: '2025-04-05',
    endDate: '2025-04-15',
    services: ['Island Transfers', 'Boat Tours', 'Snorkeling', 'Local Cuisine'],
    image: 'IslandTour.png'
  },
  {
    id: 10,
    name: 'Wellness Retreat',
    description: 'Rejuvenate mind and body in a serene wellness destination',
    price: 2600,
    startDate: '2025-05-20',
    endDate: '2025-05-30',
    services: ['Spa Treatments', 'Yoga Classes', 'Meditation', 'Healthy Meals'],
    image: 'WellnessTour.png'
  },
  {
    id: 11,
    name: 'Culinary Journey',
    description: 'Explore world-class cuisines and local food cultures',
    price: 2300,
    startDate: '2025-06-10',
    endDate: '2025-06-20',
    services: ['Cooking Classes', 'Restaurant Tours', 'Local Market Visits', 'Food Tastings'],
    image: 'CulinaryTour.png'
  },
  {
    id: 12,
    name: 'Adventure Sports Expedition',
    description: 'Extreme sports and adrenaline-pumping activities in stunning locations',
    price: 2700,
    startDate: '2025-07-15',
    endDate: '2025-07-25',
    services: ['Extreme Sports', 'Professional Instructors', 'Safety Gear', 'Accommodation'],
    image: 'AdventureTour.png'
  }
];

export const TourPackages = () => {
  const navigate = useNavigate();

  const handleBookTour = (packageId) => {
    navigate(`/book-tour/${packageId}`);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Available Tour Packages</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {TOUR_PACKAGES.map(tour => (
          <div key={tour.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={tour.image}
              alt={tour.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{tour.name}</h2>
              <p className="text-gray-600 mb-4">{tour.description}</p>
              <div className="mb-4">
                <strong>Price:</strong> ${tour.price}
              </div>
              <div className="mb-4">
                <strong>Dates:</strong> {tour.startDate} to {tour.endDate}
              </div>
              <div className="mb-4">
                <strong>Services:</strong>
                <ul className="list-disc list-inside">
                  {tour.services.map(service => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => handleBookTour(tour.id)}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Book Tour
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};