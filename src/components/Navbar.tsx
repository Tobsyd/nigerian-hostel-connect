
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-ng-green flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="font-bold text-xl text-ng-green">NigerianHostelConnect</span>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsOpen(!isOpen)}
              className="text-ng-green hover:text-ng-green-light hover:bg-gray-100"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-ng-green font-medium">Home</Link>
            <Link to="/listings" className="text-gray-700 hover:text-ng-green font-medium">Listings</Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-ng-green font-medium">How It Works</Link>
            <Link to="/ambassadors" className="text-gray-700 hover:text-ng-green font-medium">Become an Ambassador</Link>
            <Link to="/contact" className="text-gray-700 hover:text-ng-green font-medium">Contact</Link>
            <div className="flex items-center space-x-2">
              <Button variant="outline" className="border-ng-green text-ng-green hover:bg-ng-green hover:text-white">
                Log In
              </Button>
              <Button className="bg-ng-green text-white hover:bg-ng-green-light">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-2 space-y-2">
            <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-ng-green">Home</Link>
            <Link to="/listings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-ng-green">Listings</Link>
            <Link to="/how-it-works" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-ng-green">How It Works</Link>
            <Link to="/ambassadors" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-ng-green">Become an Ambassador</Link>
            <Link to="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-ng-green">Contact</Link>
            <div className="pt-2 border-t border-gray-200 mt-2 space-y-2 px-4">
              <Button variant="outline" className="w-full border-ng-green text-ng-green hover:bg-ng-green hover:text-white">
                Log In
              </Button>
              <Button className="w-full bg-ng-green text-white hover:bg-ng-green-light">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
