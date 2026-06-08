'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Share2
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-black bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] bg-clip-text text-transparent mb-4"
            >
              STRIKER
            </motion.h3>
            <p className="text-gray-400 mb-4">
              Premium MMA and combat sports gear for champions. Quality equipment that helps you train harder and fight better.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#FF6B6B' }}
                className="text-gray-400 hover:text-[#FF6B6B] transition-colors"
                aria-label="Social Media"
              >
                <Share2 className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#FF6B6B' }}
                className="text-gray-400 hover:text-[#FF6B6B] transition-colors"
                aria-label="Contact"
              >
                <MessageCircle className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, color: '#FF6B6B' }}
                className="text-gray-400 hover:text-[#FF6B6B] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Shop All
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/warranty" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>123 Fighter Street, Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span>support@striker.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 mb-8"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold mb-2">Join the Fighter Community By hamza</h4>
            <p className="text-gray-400 mb-4">
              Get exclusive offers, training tips, and product launches delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#FF6B6B] focus:outline-none text-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} STRIKER. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-gray-400 hover:text-[#FF6B6B] transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
