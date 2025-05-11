
import React from 'react';
import { Button } from "@/components/ui/button";
import ListingCard from './ListingCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample listing data
const featuredListings = [
  {
    id: "1",
    title: "Luxury Student Studio Apartment",
    location: "Akoka, Yaba, Lagos",
    price: 85000,
    bedrooms: 1,
    bathrooms: 1,
    type: "Self Contained",
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    university: "UNILAG",
    distance: "5 mins walk",
    rating: 4.8,
    isVerified: true
  },
  {
    id: "2",
    title: "Cozy Single Room in Shared Apartment",
    location: "Samonda, Ibadan",
    price: 45000,
    bedrooms: 1,
    bathrooms: 1,
    type: "Single Room",
    imageUrl: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    university: "UI",
    distance: "10 mins walk",
    rating: 4.5,
    isVerified: true
  },
  {
    id: "3",
    title: "Modern 2-Bedroom Off-Campus Lodge",
    location: "Ife Central, Osun",
    price: 120000,
    bedrooms: 2,
    bathrooms: 1,
    type: "Off-Campus Lodge",
    imageUrl: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    university: "OAU",
    distance: "15 mins walk",
    rating: 4.6,
    isVerified: false
  }
];

const FeaturedListings: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Accommodations</h2>
            <p className="text-gray-600">Handpicked quality accommodations for Nigerian students</p>
          </div>
          <Link to="/listings">
            <Button variant="outline" className="border-ng-green text-ng-green hover:bg-ng-green hover:text-white hidden md:flex">
              View All <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing) => (
            <ListingCard key={listing.id} {...listing} />
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/listings">
            <Button className="bg-ng-green text-white hover:bg-ng-green-light px-8">
              View All Listings <ArrowRight size={18} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
