import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <h2 className="text-brand-orange font-bold uppercase tracking-wide text-sm mb-2">FAQ</h2>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Common Questions</h3>
            <p className="text-gray-600 mb-6">
              Have a question about our plumbing services? Check out the most frequent inquiries from our customers in Houston.
            </p>
            <a href="#contact" className="text-brand-blue font-bold hover:underline">
              Can't find your answer? Contact us &rarr;
            </a>
          </div>

          <div className="md:w-2/3">
            <div className="space-y-4">
              {FAQS.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="font-bold text-gray-900 text-lg">{faq.question}</span>
                    {openIndex === index ? (
                      <ChevronUp className="text-brand-orange" />
                    ) : (
                      <ChevronDown className="text-gray-400" />
                    )}
                  </button>
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-50">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;