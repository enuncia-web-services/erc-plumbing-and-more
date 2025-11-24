import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-bold uppercase tracking-wide text-sm mb-2">Contact Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Get in Touch</h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ready to schedule a service or have a plumbing emergency? Reach out to us anytime. We are here to help 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="bg-brand-gray p-8 rounded-2xl space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-blue text-white p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Call Us</h4>
                  <a href={CONTACT_INFO.phoneLink} className="text-gray-600 hover:text-brand-orange text-lg">
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-sm text-brand-orange font-medium mt-1">Available 24/7 for emergencies</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blue text-white p-3 rounded-full">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Email Us</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-600 hover:text-brand-orange break-all">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blue text-white p-3 rounded-full">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Visit Us</h4>
                  <p className="text-gray-600">{CONTACT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-brand-blue text-white p-3 rounded-full">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Hours</h4>
                  <p className="text-gray-600">Mon-Sat: {CONTACT_INFO.hours.weekdays}</p>
                  <p className="text-gray-600">Sun: {CONTACT_INFO.hours.sunday}</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-64 md:h-80 w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.179374495576!2d-95.3121586!3d29.7735878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640bc7c7a3c3b0b%3A0x7f0e0e0e0e0e0e0e!2s5436%20Margarita%20St%2C%20Houston%2C%20TX%2077020!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h4 className="text-2xl font-bold mb-6 text-brand-darkBlue">Book Online</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select 
                  id="service" 
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                >
                  <option>Residential Plumbing</option>
                  <option>Commercial Plumbing</option>
                  <option>Emergency Service</option>
                  <option>Drain Cleaning</option>
                  <option>Leak Repair</option>
                  <option>Water Heater</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                  placeholder="Tell us about your plumbing issue..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting'}
                className={`w-full py-4 px-6 rounded-lg font-bold text-white transition-all ${
                  formStatus === 'submitting' 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : formStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-brand-orange hover:bg-brand-lightOrange shadow-lg hover:shadow-xl'
                }`}
              >
                {formStatus === 'submitting' ? 'Sending...' : formStatus === 'success' ? 'Request Sent!' : 'Schedule Now'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;