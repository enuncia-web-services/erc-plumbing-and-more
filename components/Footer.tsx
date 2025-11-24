import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkBlue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-orange text-white p-1 rounded font-bold text-xl">ERC</div>
              <span className="font-bold text-lg">Plumbing & More</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Family-owned plumbing excellence in Houston, TX. Committed to affordable, reliable, and high-quality service for all your residential and commercial needs.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-orange transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-orange transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-brand-orange transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-brand-orange transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Our Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li>Emergency Plumbing</li>
              <li>Residential Repairs</li>
              <li>Commercial Plumbing</li>
              <li>Drain Cleaning</li>
              <li>Water Heater Installation</li>
              <li>Leak Detection</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Info</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-brand-orange font-bold">A:</span>
                {CONTACT_INFO.address}
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange font-bold">P:</span>
                <a href={CONTACT_INFO.phoneLink} className="hover:text-white">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange font-bold">E:</span>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white">{CONTACT_INFO.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-brand-orange font-bold">H:</span>
                <div>
                  <p>Mon-Sat: 24 Hours</p>
                  <p>Sun: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ERC Plumbing and More. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;