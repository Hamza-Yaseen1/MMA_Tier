'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    details: '(555) 123-4567',
    subtext: 'Mon-Fri 9am-6pm EST'
  },
  {
    icon: Mail,
    title: 'Email',
    details: 'support@striker.com',
    subtext: 'We reply within 24 hours'
  },
  {
    icon: MapPin,
    title: 'Address',
    details: '123 Fighter Street',
    subtext: 'Los Angeles, CA 90001'
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon-Fri: 9am-6pm',
    subtext: 'Sat-Sun: 10am-4pm'
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200">
              Have questions? We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FFD166] text-white mb-4">
                  <info.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-900 font-semibold mb-1">{info.details}</p>
                <p className="text-sm text-gray-600">{info.subtext}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h2 className="text-3xl font-black text-gray-900 mb-6">Send us a Message</h2>
              
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
                    <Send className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FF6B6B] focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FF6B6B] focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FF6B6B] focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="product">Product Question</option>
                      <option value="order">Order Status</option>
                      <option value="return">Returns & Exchanges</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-[#FF6B6B] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] text-white font-bold rounded-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-6">FAQs</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'What is your return policy?',
                      a: 'We offer a 30-day return policy for all unused items in original packaging.'
                    },
                    {
                      q: 'Do you ship internationally?',
                      a: 'Yes! We ship to over 15 countries worldwide with tracking.'
                    },
                    {
                      q: 'How long does shipping take?',
                      a: 'Domestic orders typically arrive in 3-5 business days. International shipping takes 7-14 days.'
                    },
                    {
                      q: 'Do you offer wholesale pricing?',
                      a: 'Yes, we work with gyms and retailers. Contact us for wholesale inquiries.'
                    }
                  ].map((faq, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                      <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                      <p className="text-gray-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FFD166] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-black mb-4">Need Immediate Help?</h3>
                <p className="mb-6">
                  For urgent matters, call our customer service team directly. We're here to help!
                </p>
                <a
                  href="tel:5551234567"
                  className="inline-block px-6 py-3 bg-white text-[#FF6B6B] font-bold rounded-lg hover:shadow-lg transition-shadow"
                >
                  Call (555) 123-4567
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
