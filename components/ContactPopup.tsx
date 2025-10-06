'use client';

import { useState, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactPopup = ({ isOpen, onClose }: ContactPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setIsVisible(true), 10);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
      <div 
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />
      <div 
        className={`relative bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 ${
          isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
        }`}
      >
        {/* Header with gradient background */}
        <div className="relative bg-gradient-to-br from-[#121722] via-emerald-800 to-[var(--accent2)] p-4 text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold mb-1">Get in Touch</h2>
              <p className="text-emerald-100 text-xs">
                We&apos;d love to hear from you! Send us a message.
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-white/20 rounded-full transition-colors duration-200"
              aria-label="Close popup"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <form action="#" className="w-full flex flex-col gap-3">
            {/* Name Input */}
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
              required
            />

            {/* Email Input */}
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
              required
            />

            {/* Phone Input */}
            <input
              type="tel"
              pattern="[0-9]{10}"
              inputMode="numeric"
              placeholder="Phone Number"
              title="Enter a 10-digit number"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
              required
            />

            {/* Message Textarea */}
            <textarea 
              rows={2} 
              placeholder="Your Message" 
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none transition-all duration-200 bg-gray-50 focus:bg-white text-sm"
              required
            />

            {/* Submit Button */}
            <button 
              type="submit" 
              className="mt-1 w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-medium py-2.5 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
