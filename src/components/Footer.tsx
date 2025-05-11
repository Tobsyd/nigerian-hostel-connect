
import React from 'react';
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-ng-green flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="font-bold text-xl text-white">NigerianHostelConnect</span>
            </div>
            <p className="text-gray-400 mb-6">
              Connecting Nigerian students with quality housing solutions near their universities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ng-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/listings" className="text-gray-400 hover:text-white transition-colors">Browse Listings</Link></li>
              <li><Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link></li>
              <li><Link to="/ambassadors" className="text-gray-400 hover:text-white transition-colors">Become an Ambassador</Link></li>
              <li><Link to="/list-property" className="text-gray-400 hover:text-white transition-colors">List Your Property</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Universities */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ng-gold">Popular Universities</h3>
            <ul className="space-y-2">
              <li><Link to="/university/unilag" className="text-gray-400 hover:text-white transition-colors">University of Lagos</Link></li>
              <li><Link to="/university/ui" className="text-gray-400 hover:text-white transition-colors">University of Ibadan</Link></li>
              <li><Link to="/university/oau" className="text-gray-400 hover:text-white transition-colors">Obafemi Awolowo University</Link></li>
              <li><Link to="/university/unn" className="text-gray-400 hover:text-white transition-colors">University of Nigeria</Link></li>
              <li><Link to="/university/abu" className="text-gray-400 hover:text-white transition-colors">Ahmadu Bello University</Link></li>
              <li><Link to="/university/uniben" className="text-gray-400 hover:text-white transition-colors">University of Benin</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-ng-gold">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-ng-green mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 University Avenue, Lagos, Nigeria</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-ng-green flex-shrink-0" />
                <span className="text-gray-400">info@nigerianhostelconnect.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-ng-green flex-shrink-0" />
                <span className="text-gray-400">+234 800 1234 567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} NigerianHostelConnect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">Terms of Service</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link>
              <Link to="/cookie" className="text-gray-400 hover:text-white text-sm">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
