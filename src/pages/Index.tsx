
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import SearchForm from '@/components/SearchForm';
import HowItWorks from '@/components/HowItWorks';
import FeaturedListings from '@/components/FeaturedListings';
import BecomeAmbassador from '@/components/BecomeAmbassador';
import Testimonials from '@/components/Testimonials';
import LandlordCTA from '@/components/LandlordCTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <div className="container mx-auto relative">
          <SearchForm />
        </div>
        <HowItWorks />
        <FeaturedListings />
        <Testimonials />
        <BecomeAmbassador />
        <LandlordCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
