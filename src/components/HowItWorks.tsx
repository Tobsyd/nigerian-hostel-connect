
import React from 'react';
import { Search, Building, UserCheck, CreditCard } from "lucide-react";

const steps = [
  {
    icon: <Search size={32} className="text-ng-green" />,
    title: "Search & Find",
    description: "Browse through our verified listings near your university. Filter by location, price, and amenities to find your perfect accommodation."
  },
  {
    icon: <Building size={32} className="text-ng-green" />,
    title: "View & Contact",
    description: "Schedule in-person or virtual tours of your shortlisted properties. Our ambassadors can assist with property visits."
  },
  {
    icon: <UserCheck size={32} className="text-ng-green" />,
    title: "Book & Reserve",
    description: "Found your perfect place? Book it instantly through our secure platform to reserve your spot."
  },
  {
    icon: <CreditCard size={32} className="text-ng-green" />,
    title: "Pay Securely",
    description: "Make secure payments through our platform. We only release the payment to landlords after you've confirmed move-in."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Finding your ideal student accommodation is easy and secure with Nigerian Hostel Connect
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                  <svg width="40" height="12" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.5303 6.53033C39.8232 6.23744 39.8232 5.76256 39.5303 5.46967L34.7574 0.696699C34.4645 0.403806 33.9896 0.403806 33.6967 0.696699C33.4038 0.989593 33.4038 1.46447 33.6967 1.75736L37.9393 6L33.6967 10.2426C33.4038 10.5355 33.4038 11.0104 33.6967 11.3033C33.9896 11.5962 34.4645 11.5962 34.7574 11.3033L39.5303 6.53033ZM0 6.75H39V5.25H0V6.75Z" fill="#008753"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
