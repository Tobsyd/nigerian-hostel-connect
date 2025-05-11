
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Access to thousands of verified student tenants",
  "Free listing creation with comprehensive property details",
  "Property verification by our trusted ambassadors",
  "Secure payment system with guaranteed rent",
  "Reduced vacancy periods and tenant turnover",
  "Professional support throughout the rental process"
];

const LandlordCTA: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Are You a Property Owner?</h2>
            <p className="text-lg opacity-90 mb-6 leading-relaxed">
              List your property on Nigerian Hostel Connect and connect with thousands of student tenants looking for quality accommodation near their universities.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-ng-gold mr-3 mt-0.5 flex-shrink-0" />
                  <p className="opacity-90">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="space-x-4">
              <Link to="/list-property">
                <Button className="bg-ng-gold text-black hover:bg-yellow-400 px-8 py-6 text-lg">
                  List Your Property
                </Button>
              </Link>
              <Link to="/landlord-info">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-gray-800">
              <h3 className="text-xl font-bold mb-4 text-ng-green">Why Students Choose Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-ng-green font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Verified Properties</h4>
                    <p className="text-gray-600">All properties are verified by our trusted ambassadors to ensure quality and safety.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-ng-green font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Secure Payments</h4>
                    <p className="text-gray-600">Our secure payment system protects both students and landlords from fraud.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-ng-green font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Student-Focused</h4>
                    <p className="text-gray-600">We understand student needs and ensure properties meet their requirements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandlordCTA;
