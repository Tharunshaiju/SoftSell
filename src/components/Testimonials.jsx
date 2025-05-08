import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonial = ({ quote, name, role, company, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mx-4 flex flex-col h-full">
      <div className="mb-6 flex">
        {[1, 2, 3, 4, 5].map((_, index) => (
          <Star key={index} size={20} fill="#FFD700" color="#FFD700" />
        ))}
      </div>
      <blockquote className="text-gray-700 mb-6 italic flex-grow">"{quote}"</blockquote>
      <div className="flex items-center">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          <p className="text-gray-600 text-sm">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "SoftSell helped our company recover over $50,000 from unused enterprise software licenses. The process was incredibly smooth and their valuation was spot on.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechNova Inc.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      quote: "After downsizing our operations, we had dozens of unused licenses. SoftSell's platform helped us quickly turn those assets into cash flow when we needed it most.",
      name: "David Chen",
      role: "IT Director",
      company: "Pinnacle Solutions",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Businesses of all sizes trust SoftSell to maximize the value of their software assets
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
         
          <div className="hidden md:grid grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                role={testimonial.role}
                company={testimonial.company}
                image={testimonial.image}
              />
            ))}
          </div>

          
          <div className="md:hidden">
            <Testimonial
              quote={testimonials[currentIndex].quote}
              name={testimonials[currentIndex].name}
              role={testimonials[currentIndex].role}
              company={testimonials[currentIndex].company}
              image={testimonials[currentIndex].image}
            />
            
            <div className="flex justify-center mt-8 space-x-4">
              <button 
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-blue-800" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-blue-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;