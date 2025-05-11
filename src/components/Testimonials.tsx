
import React from 'react';
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Chioma Okafor",
    university: "University of Lagos",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "FindMyLodge made finding accommodation near UNILAG so easy! The verified listings gave me peace of mind, and their ambassador helped me tour the property before making my decision. Highly recommend!",
    rating: 5
  },
  {
    id: 2,
    name: "Emmanuel Adeyemi",
    university: "University of Ibadan",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "As a student moving to Ibadan for the first time, I was worried about finding a good place to stay. The secure payment system gave me confidence, and I found a great apartment within my budget. Thank you!",
    rating: 4
  },
  {
    id: 3,
    name: "Amina Ibrahim",
    university: "Ahmadu Bello University",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
    text: "The platform is incredibly easy to use. I found a shared apartment with reliable roommates near ABU. The secure payment system meant I didn't have to worry about being scammed. Will use again!",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 testimonial-gradient text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Hear from students who've found their perfect accommodation through FindMyLodge
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white text-gray-800 shadow-lg p-6">
              <div className="flex flex-col h-full">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-ng-gold text-ng-gold" />
                  ))}
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star key={i + testimonial.rating} size={18} className="text-gray-300" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 flex-grow">"{testimonial.text}"</p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.university}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
