import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-bold uppercase tracking-wide text-sm mb-2">Testimonials</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">What Our Clients Say</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-brand-gray p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 text-brand-blue/10" size={48} />
              <div className="flex gap-1 mb-4 text-brand-orange">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-brand-blue font-medium">{review.type} Customer</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;