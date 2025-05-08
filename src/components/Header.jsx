import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-30 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Logo color={isScrolled ? '#1E40AF' : '#ffffff'} />
            <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-blue-800' : 'text-white'}`}>SoftSell</span>
          </div>

          
          <nav className="hidden md:flex space-x-8">
            {['how-it-works', 'why-choose-us', 'testimonials', 'contact'].map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`font-medium ${isScrolled ? 'text-gray-700 hover:text-blue-800' : 'text-white hover:text-blue-200'} capitalize transition-colors duration-200`}
              >
                {id.replace(/-/g, ' ')}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2 rounded-md transition-colors duration-200"
            >
              Get Started
            </button>
          </nav>

          
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-500 hover:text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} className={isScrolled ? 'text-gray-800' : 'text-white'} />}
          </button>
        </div>

        
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-white shadow-lg py-4 px-4 transition-all duration-200 ease-in-out">
            <div className="flex flex-col space-y-3">
              {['how-it-works', 'why-choose-us', 'testimonials', 'contact'].map((id) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="text-gray-700 hover:text-blue-800 font-medium py-2 capitalize"
                >
                  {id.replace(/-/g, ' ')}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 hover:bg-teal-700 text-white font-medium px-5 py-2 rounded-md mt-2 transition-colors duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;