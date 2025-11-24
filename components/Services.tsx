import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-brand-gray scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold uppercase tracking-wide text-sm mb-2">Our Services</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-darkBlue mb-4">
            Comprehensive Plumbing Solutions
          </h3>
          <p className="text-gray-600">
            From residential repairs to commercial installations, our experienced team handles it all with precision and care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-b-4 border-transparent hover:border-brand-orange group"
            >
              <div className="bg-brand-blue/5 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-orange/10 transition-colors">
                <service.icon className="text-brand-blue group-hover:text-brand-orange transition-colors" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-brand-blue text-white p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-left">
            <h4 className="text-2xl font-bold mb-2">Need a Service Not Listed?</h4>
            <p className="text-blue-100">Contact us to discuss your specific plumbing needs. We likely do it!</p>
          </div>
          <a 
            href="#contact" 
            className="whitespace-nowrap bg-white text-brand-blue font-bold px-8 py-3 rounded-full hover:bg-brand-orange hover:text-white transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;