import React from 'react';
import { Users, Clock, Award, Languages } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Plumbing tools" 
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Professional plumber" 
              className="rounded-lg shadow-lg w-full h-64 object-cover mt-8"
            />
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-brand-orange font-bold uppercase tracking-wide text-sm mb-2">About Us</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Family Plumbers in Houston
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              ERC Plumbing and More is a family-owned business built on integrity, reliability, and skilled craftsmanship. With 8 years of hands-on experience serving the Houston area, we understand that plumbing issues can be stressful. That's why we treat every home and business as if it were our own.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our mission is simple: provide high-quality plumbing solutions at affordable prices. Whether it's a routine check-up or a 2AM emergency, our bilingual team is ready to serve you with a smile and a solution.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="bg-brand-blue/10 p-2 rounded-md">
                  <Users className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Family Owned</h4>
                  <p className="text-sm text-gray-500">Personalized care and commitment.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="bg-brand-blue/10 p-2 rounded-md">
                  <Clock className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">8+ Years Exp</h4>
                  <p className="text-sm text-gray-500">Proven track record of success.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="bg-brand-blue/10 p-2 rounded-md">
                  <Languages className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Bilingual</h4>
                  <p className="text-sm text-gray-500">Se habla Español & English.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 border border-gray-100">
                <div className="bg-brand-blue/10 p-2 rounded-md">
                  <Award className="text-brand-blue" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Satisfaction</h4>
                  <p className="text-sm text-gray-500">Quality work guaranteed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;