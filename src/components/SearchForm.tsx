
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, MapPin } from "lucide-react";

const universities = [
  "Any University",
  "University of Lagos",
  "University of Ibadan",
  "Obafemi Awolowo University",
  "University of Nigeria",
  "Ahmadu Bello University",
  "University of Benin",
  "University of Port Harcourt",
  "Covenant University",
  "Lagos State University",
];

const propertyTypes = [
  "Any Type",
  "Single Room",
  "Self Contained",
  "Flat/Apartment",
  "Hostel",
  "Shared Room",
  "Off-Campus Lodge",
];

const SearchForm: React.FC = () => {
  const navigate = useNavigate();
  const [university, setUniversity] = useState<string>("Any University");
  const [location, setLocation] = useState<string>("");
  const [propertyType, setPropertyType] = useState<string>("Any Type");
  const [priceRange, setPriceRange] = useState<number[]>([50000]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const searchParams = new URLSearchParams({
      university,
      location,
      type: propertyType,
      maxPrice: priceRange[0].toString()
    });
    
    navigate(`/listings?${searchParams.toString()}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mx-4 md:mx-auto -mt-16 relative z-10 max-w-4xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Your Perfect Student Accommodation</h2>
      
      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {/* University Select */}
          <div>
            <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-2">
              University
            </label>
            <Select
              value={university}
              onValueChange={(value) => setUniversity(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select University" />
              </SelectTrigger>
              <SelectContent>
                {universities.map((uni) => (
                  <SelectItem key={uni} value={uni}>
                    {uni}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Location Input */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <div className="relative">
              <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <Input
                id="location"
                type="text"
                placeholder="Area, District or Landmark"
                className="pl-10"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
          
          {/* Property Type Select */}
          <div>
            <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
              Property Type
            </label>
            <Select
              value={propertyType}
              onValueChange={(value) => setPropertyType(value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Property Type" />
              </SelectTrigger>
              <SelectContent>
                {propertyTypes.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Price Range */}
          <div>
            <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-2">
              Max Price: ₦{priceRange[0].toLocaleString()}
            </label>
            <Slider
              id="priceRange"
              defaultValue={[50000]}
              max={500000}
              step={5000}
              onValueChange={setPriceRange}
              className="my-5"
            />
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            type="submit" 
            className="bg-ng-green text-white hover:bg-ng-green-light px-8 py-2 text-lg"
          >
            <Search size={18} className="mr-2" />
            Search Accommodations
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
