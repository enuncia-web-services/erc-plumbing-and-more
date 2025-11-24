import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-brand-blue/95 py-4 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="bg-brand-orange text-white p-1 rounded font-bold text-2xl group-hover:bg-brand-lightOrange transition-colors">
            ERC
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-lg leading-tight ${isScrolled ? 'text-brand-blue' : 'text-white'}`}>
              Plumbing & More
            </span>
            <span className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-gray-300'}`}>
              Houston's Trusted Plumbers
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:text-brand-orange transition-colors ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href={CONTACT_INFO.phoneLink}
            className={`flex items-center gap-2 font-semibold transition-colors ${
              isScrolled ? 'text-brand-blue hover:text-brand-orange' : 'text-white hover:text-brand-orange'
            }`}
          >
            <Phone size={18} />
            {CONTACT_INFO.phone}
          </a>
          <a
            href="#contact"
            className="bg-brand-orange hover:bg-brand-lightOrange text-white px-5 py-2 rounded-full font-bold shadow-lg transition-transform transform hover:scale-105 flex items-center gap-2"
          >
            <Calendar size={18} />
            Book Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-brand-orange"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-800 font-medium text-lg py-2 border-b border-gray-100"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <a 
              href={CONTACT_INFO.phoneLink}
              className="flex items-center justify-center gap-2 bg-brand-blue text-white py-3 rounded-lg font-bold"
            >
              <Phone size={20} />
              Call {CONTACT_INFO.phone}
            </a>
            <a 
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-brand-orange text-white py-3 rounded-lg font-bold"
            >
              <Calendar size={20} />
              Book Online
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;