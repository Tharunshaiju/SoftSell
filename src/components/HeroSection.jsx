import React from 'react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

     
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 animate-fade-in">
            Turn Unused Software Into Cash
          </h1>
          <h2 className="text-xl sm:text-2xl text-blue-100 mb-8 max-w-2xl animate-fade-in-delay">
            SoftSell helps businesses recover value from unused software licenses through our secure, transparent marketplace.
          </h2>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-delay-longer">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Sell Your Licenses
            </button>
            <button
              onClick={() => window.open('#', '_blank')}
              className="px-8 py-4 bg-white hover:bg-gray-100 text-blue-800 font-semibold rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Browse Marketplace
            </button>
          </div>
        </div>
      </div>

     
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;