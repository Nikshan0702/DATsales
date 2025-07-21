'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiShare2, 
  FiMessageSquare, 
  FiMail, 
  FiPhone, 
  FiChevronRight, 
  FiInfo 
} from 'react-icons/fi';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will respond within 24 hours.');
  };

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Contact Form */}
            <div className="p-6 sm:p-8">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-900">Contact Support</h2>
                <p className="text-gray-500 text-sm mt-1">
                  We typically respond within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-pink-500 focus:border-pink-500 transition-all"
                    placeholder="How can we help?"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium py-2.5 px-4 rounded-md transition-colors shadow-sm mt-2"
                >
                  Send Message
                </motion.button>
              </form>
            </div>

            {/* Contact Options */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 sm:p-8 rounded-xl shadow-sm">
  <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
    <FiShare2 className="text-pink-500" />
    Other ways to reach us
  </h3>
  
  <div className="space-y-4">
    {/* WhatsApp */}
    <motion.a
      href="https://wa.me/YOUR_WHATSAPP_NUMBER"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-pink-400/30 hover:shadow-md transition-all"
    >
      <div className="bg-green-100/80 p-3 rounded-lg">
        <FiMessageSquare className="text-green-600 text-xl" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-800">WhatsApp Chat</p>
        <p className="text-xs text-gray-500 mt-1">Typically replies within minutes</p>
      </div>
      <FiChevronRight className="text-gray-400" />
    </motion.a>

    {/* Email */}
    <motion.a
      href="mailto:contact@datshop.com"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-400/30 hover:shadow-md transition-all"
    >
      <div className="bg-blue-100/80 p-3 rounded-lg">
        <FiMail className="text-blue-600 text-xl" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-800">Email Support</p>
        <p className="text-xs text-gray-500 mt-1">datsale@datshop.com</p>
      </div>
      <FiChevronRight className="text-gray-400" />
    </motion.a>

    {/* Phone */}
    <motion.a
      href="tel:+1234567890"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-400/30 hover:shadow-md transition-all"
    >
      <div className="bg-purple-100/80 p-3 rounded-lg">
        <FiPhone className="text-purple-600 text-xl" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-semibold text-gray-800">Call Us</p>
        <p className="text-xs text-gray-500 mt-1">+94 0771129911</p>
      </div>
      <FiChevronRight className="text-gray-400" />
    </motion.a>
  </div>

  <div className="mt-6 pt-6 border-t border-gray-200/50">
    <p className="text-xs text-gray-500 flex items-center gap-2">
      <FiInfo className="text-gray-400" />
      We typically respond within 24 hours
    </p>
  </div>
</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}