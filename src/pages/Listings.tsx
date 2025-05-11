
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ListingCard from '@/components/ListingCard';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, SlidersHorizontal, X } from "lucide-react";

// Sample listing data (in a real app, this would come from an API)
const allListings = [
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
  },
  {
    id: "4",
    title: "Budget Friendly Hostel Room",
    location: "Nsukka, Enugu",
    price: 35000,
    bedrooms: 1,
    bathrooms: 1,
    type: "Hostel",
    imageUrl: "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    university: "UNN",
    distance: "On campus",
    rating: 4.0,
    isVerified: true
  },
  {
    id: "5",
    title: "Spacious 3-Bedroom Apartment for Sharing",
    location: "Ekosodin, Benin City",
    price: 60000,
    bedrooms: 3,
    bathrooms: 2,
    type: "Flat/Apartment",
    imageUrl: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    university: "UNIBEN",
    distance: "7 mins walk",
    rating: 4.7,
    isVerified: true
  },
  {
    id: "6",
    title: "Premium Studio with Private Kitchen",
    location: "Samaru, Zaria",
    price: 95000,
    bedrooms: 1,
    bathrooms: 1,
    type: "Self Contained",
    imageUrl: "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500&q=80",
    university: "ABU",
    distance: "12 mins walk",
    rating: 4.9,
    isVerified: true
  }
];

const universities = [
  "Any University",
  "University of Lagos (UNILAG)",
  "University of Ibadan (UI)",
  "Obafemi Awolowo University (OAU)",
  "University of Nigeria (UNN)",
  "Ahmadu Bello University (ABU)",
  "University of Benin (UNIBEN)",
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

const sortOptions = [
  { value: "recommended", label: "Recommended" },
  { value: "price-low", label: "Price (Low to High)" },
  { value: "price-high", label: "Price (High to Low)" },
  { value: "rating", label: "Highest Rating" },
  { value: "newest", label: "Newest First" }
];

const Listings = () => {
  const [searchParams] = useSearchParams();
  const [filteredListings, setFilteredListings] = useState(allListings);
  const [showFilters, setShowFilters] = useState(false);
  
  // Filter states
  const [university, setUniversity] = useState<string>(searchParams.get('university') || "Any University");
  const [location, setLocation] = useState<string>(searchParams.get('location') || "");
  const [propertyType, setPropertyType] = useState<string>(searchParams.get('type') || "Any Type");
  const [priceRange, setPriceRange] = useState<number[]>([Number(searchParams.get('maxPrice')) || 200000]);
  const [sortBy, setSortBy] = useState<string>("recommended");
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);

  useEffect(() => {
    let filtered = [...allListings];
    
    // Apply university filter
    if (university && university !== "Any University") {
      filtered = filtered.filter(listing => listing.university.includes(university.split(" ")[0]));
    }
    
    // Apply location filter
    if (location) {
      filtered = filtered.filter(listing => 
        listing.location.toLowerCase().includes(location.toLowerCase())
      );
    }
    
    // Apply property type filter
    if (propertyType && propertyType !== "Any Type") {
      filtered = filtered.filter(listing => listing.type === propertyType);
    }
    
    // Apply price filter
    filtered = filtered.filter(listing => listing.price <= priceRange[0]);
    
    // Apply verification filter
    if (verifiedOnly) {
      filtered = filtered.filter(listing => listing.isVerified);
    }
    
    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case "newest":
        // In a real app, we'd sort by date added
        // Here we'll just use the ID as a proxy for demonstration
        filtered.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      default:
        // Recommended sorting (default)
        filtered.sort((a, b) => {
          if (a.isVerified && !b.isVerified) return -1;
          if (!a.isVerified && b.isVerified) return 1;
          return (b.rating || 0) - (a.rating || 0);
        });
    }
    
    setFilteredListings(filtered);
  }, [university, location, propertyType, priceRange, sortBy, verifiedOnly]);

  const applyFilters = (e: React.FormEvent) => {
    e.preventDefault();
    // The filters are already applied via useEffect
    setShowFilters(false);
  };

  const resetFilters = () => {
    setUniversity("Any University");
    setLocation("");
    setPropertyType("Any Type");
    setPriceRange([200000]);
    setVerifiedOnly(false);
    setSortBy("recommended");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-6 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Student Accommodations</h1>
            <p className="text-gray-600">Find the perfect place near your university</p>
          </div>
          
          {/* Search and filter bar */}
          <div className="bg-white shadow-md rounded-lg p-4 mb-8">
            <form onSubmit={applyFilters} className="flex flex-wrap items-center gap-4">
              <div className="flex-grow min-w-[200px]">
                <div className="relative">
                  <MapPin size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search by location, area or landmark"
                    className="pl-10"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="min-w-[180px]">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setShowFilters(!showFilters)}
                  className={showFilters ? "bg-gray-100" : ""}
                >
                  <SlidersHorizontal size={18} className="mr-2" />
                  Filters
                </Button>
              </div>
              
              <div>
                <Button type="submit" className="bg-ng-green text-white hover:bg-ng-green-light">
                  <Search size={18} className="mr-2" />
                  Search
                </Button>
              </div>
            </form>
            
            {/* Advanced filters */}
            {showFilters && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div>
                    <label htmlFor="university" className="block text-sm font-medium text-gray-700 mb-1">
                      University
                    </label>
                    <Select value={university} onValueChange={setUniversity}>
                      <SelectTrigger>
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
                  
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-1">
                      Property Type
                    </label>
                    <Select value={propertyType} onValueChange={setPropertyType}>
                      <SelectTrigger>
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
                  
                  <div>
                    <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-1">
                      Max Price: ₦{priceRange[0].toLocaleString()}
                    </label>
                    <Slider
                      id="priceRange"
                      value={priceRange}
                      max={500000}
                      step={5000}
                      onValueChange={setPriceRange}
                      className="py-4"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="verifiedOnly" 
                        checked={verifiedOnly}
                        onCheckedChange={(checked) => setVerifiedOnly(!!checked)}
                      />
                      <label
                        htmlFor="verifiedOnly"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Verified listings only
                      </label>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    onClick={resetFilters}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <X size={16} className="mr-1" />
                    Reset filters
                  </Button>
                  <Button 
                    type="submit" 
                    className="bg-ng-green text-white hover:bg-ng-green-light"
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            )}
          </div>
          
          {/* Results summary */}
          <div className="flex justify-between items-center mb-6">
            <p className="text-gray-600">
              Showing <span className="font-semibold">{filteredListings.length}</span> available accommodations
            </p>
          </div>
          
          {/* Listings grid */}
          {filteredListings.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredListings.map((listing) => (
                <ListingCard key={listing.id} {...listing} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No listings found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your filters or search criteria</p>
              <Button onClick={resetFilters} variant="outline">Reset Filters</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Listings;
