'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingCart, 
  Heart, 
  Search, 
  Menu, 
  X, 
  ChevronDown,
  User
} from 'lucide-react';
import { useCart } from '@/lib/hooks/useCart';
import { useWishlist } from '@/lib/hooks/useWishlist';
import { getCategoryName } from '@/lib/products';
import type { Category } from '@/lib/types';

const categories: Category[] = [
  'gloves',
  'rash-guards',
  'mouth-guards',
  'hand-wraps',
  'shin-guards',
  'accessories'
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const cartItems = useCart((state) => state.getTotalItems());
  const wishlistItems = useWishlist((state) => state.items.length);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg' 
          : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl md:text-3xl font-black bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] bg-clip-text text-transparent"
            >
              STRIKER
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium"
            >
              Home
            </Link>
            
            {/* Shop Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsShopDropdownOpen(true)}
              onMouseLeave={() => setIsShopDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium">
                <span>Shop</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isShopDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl py-2 border border-gray-100"
                  >
                    <Link
                      href="/shop"
                      className="block px-4 py-2 text-gray-700 hover:bg-[#FF6B6B]/10 hover:text-[#FF6B6B] transition-colors"
                    >
                      All Products
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category}
                        href={`/shop?category=${category}`}
                        className="block px-4 py-2 text-gray-700 hover:bg-[#FF6B6B]/10 hover:text-[#FF6B6B] transition-colors"
                      >
                        {getCategoryName(category)}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/about" 
              className="text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium"
            >
              About
            </Link>
            
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon (Desktop) */}
            <button className="hidden lg:block text-gray-700 hover:text-[#FF6B6B] transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <Link href="/wishlist" className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-[#FF6B6B] transition-colors"
              >
                <Heart className="w-5 h-5" />
                {wishlistItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FF6B6B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {wishlistItems}
                  </span>
                )}
              </motion.div>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="relative">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-[#FF6B6B] transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FF6B6B] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </motion.div>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                href="/" 
                className="block text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/shop" 
                className="block text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop All
              </Link>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/shop?category=${category}`}
                  className="block pl-4 text-gray-600 hover:text-[#FF6B6B] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {getCategoryName(category)}
                </Link>
              ))}
              <Link 
                href="/about" 
                className="block text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-700 hover:text-[#FF6B6B] transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
