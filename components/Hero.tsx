import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Plumber working under sink"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/95 via-brand-blue/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col justify-center h-full min-h-[60vh]">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 border border-brand-orange/40 rounded-full px-4 py-1 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
            <span className="text-sm font-medium text-brand-orange">Available 24/7 for Emergencies</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Reliable Plumbing Solutions in <span className="text-brand-orange">Houston, TX</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
            Residential & Commercial experts. Family-owned with 8 years of experience. We fix it right, day or night. ¡Hablamos Español!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-brand-orange hover:bg-brand-lightOrange text-white text-lg font-bold px-8 py-4 rounded-lg shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              Book Service Now
              <ArrowRight size={20} />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-colors flex items-center justify-center"
            >
              View Services
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm font-medium text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-brand-orange" size={18} />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-brand-orange" size={18} />
              <span>Free Estimates*</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-brand-orange" size={18} />
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;