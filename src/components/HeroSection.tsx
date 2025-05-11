
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <div className="hero-pattern">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Find Your Perfect <span className="text-ng-green">Student</span> Lodge
            </h1>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Connecting Nigerian students with quality hostels and accommodations near their universities. 
              Verified by our trusted ambassadors to ensure safety and quality.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Button className="bg-ng-green text-white hover:bg-ng-green-light px-8 py-6 text-lg">
                Find Accommodation
              </Button>
              <Link to="/list-property">
                <Button variant="outline" className="border-ng-green text-ng-green hover:bg-ng-green hover:text-white px-8 py-6 text-lg">
                  List Your Property <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center space-x-6">
              <div className="text-center">
                <p className="text-3xl font-bold text-ng-green">1000+</p>
                <p className="text-sm text-gray-600">Listings</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-ng-green">50+</p>
                <p className="text-sm text-gray-600">Universities</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-ng-green">5000+</p>
                <p className="text-sm text-gray-600">Happy Students</p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1631193812708-3f2426536207?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Nigerian Student Accommodation" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
