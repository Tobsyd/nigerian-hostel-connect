
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, BedDouble, Bath, Home, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface ListingCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  type: string;
  imageUrl: string;
  university: string;
  distance: string;
  rating?: number;
  isVerified?: boolean;
}

const ListingCard: React.FC<ListingCardProps> = ({
  id,
  title,
  location,
  price,
  bedrooms,
  bathrooms,
  type,
  imageUrl,
  university,
  distance,
  rating = 0,
  isVerified = false,
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover"
        />
        {isVerified && (
          <Badge className="absolute top-2 right-2 bg-ng-green text-white">
            Verified
          </Badge>
        )}
        <Badge className="absolute top-2 left-2 bg-ng-gold text-black">
          {type}
        </Badge>
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-semibold text-lg line-clamp-1">{title}</h3>
          <div className="flex items-center space-x-1 text-ng-gold">
            {rating > 0 && (
              <>
                <Star size={16} fill="currentColor" />
                <span className="text-sm font-medium">{rating}</span>
              </>
            )}
          </div>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm line-clamp-1">{location}</span>
        </div>
        
        <div className="mb-3">
          <Badge variant="outline" className="text-gray-600 bg-gray-100 mr-2">
            {university}
          </Badge>
          <Badge variant="outline" className="text-gray-600 bg-gray-100">
            {distance}
          </Badge>
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <BedDouble size={16} className="mr-1" />
            <span>{bedrooms} {bedrooms === 1 ? 'Bed' : 'Beds'}</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{bathrooms} {bathrooms === 1 ? 'Bath' : 'Baths'}</span>
          </div>
          <div className="flex items-center">
            <Home size={16} className="mr-1" />
            <span>{type}</span>
          </div>
        </div>
        
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xl font-bold text-ng-green">₦{price.toLocaleString()}</span>
            <span className="text-gray-600 text-sm">/month</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="px-4 py-3 bg-gray-50 flex justify-between">
        <Button variant="outline" className="border-ng-green text-ng-green hover:bg-ng-green hover:text-white">
          View Details
        </Button>
        <Link to={`/book/${id}`}>
          <Button className="bg-ng-green text-white hover:bg-ng-green-light">
            Book Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ListingCard;
