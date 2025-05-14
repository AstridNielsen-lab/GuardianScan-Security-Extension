import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Shield size={28} className={`${isScrolled ? 'text-blue-900' : 'text-white'} transition-colors`} />
          <span className={`text-xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'} transition-colors`}>
            GuardianScan
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>
            Features
          </a>
          <a href="#how-it-works" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>
            How It Works
          </a>
          <a href="#faq" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-500 transition-colors`}>
            FAQ
          </a>
          <a 
            href="#download" 
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-colors font-medium"
          >
            Download Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X size={24} className={`${isScrolled ? 'text-blue-900' : 'text-white'}`} />
          ) : (
            <Menu size={24} className={`${isScrolled ? 'text-blue-900' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full py-4 px-6 flex flex-col gap-4">
          <a 
            href="#features" 
            className="text-gray-700 hover:text-blue-600 py-2" 
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-700 hover:text-blue-600 py-2" 
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#faq" 
            className="text-gray-700 hover:text-blue-600 py-2" 
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <a 
            href="#download" 
            className="bg-blue-600 text-white py-2 px-4 rounded-md text-center font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Download Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;