
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const benefits = [
  "Earn extra income through commissions",
  "Flexible working hours that fit around your studies",
  "Build valuable skills in marketing and real estate",
  "Expand your professional network",
  "Help fellow students find quality accommodation",
  "Exclusive ambassador training and resources"
];

const BecomeAmbassador: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Become a Campus Ambassador</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Join our network of campus ambassadors and help fellow students find their perfect accommodation while earning extra income. 
              Represent Nigerian Hostel Connect on your campus and make a difference.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="text-ng-green mr-3 mt-0.5 flex-shrink-0" />
                  <p>{benefit}</p>
                </div>
              ))}
            </div>
            
            <Link to="/ambassadors">
              <Button className="bg-ng-green text-white hover:bg-ng-green-light px-8 py-6 text-lg">
                Apply Now <ArrowRight size={18} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Campus Ambassadors" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeAmbassador;
