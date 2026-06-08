'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { useWishlist } from '@/lib/hooks/useWishlist';
import ProductCard from '@/components/ProductCard';

export default function WishlistPage() {
  const { items } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Heart className="w-24 h-24 mx-auto text-gray-300 mb-6" />
            <h1 className="text-4xl font-black text-gray-900 mb-4">Your Wishlist is Empty</h1>
            <p className="text-xl text-gray-600 mb-8">
              Save your favorite items for later
            </p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] text-white font-bold rounded-full"
              >
                Explore Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-black text-gray-900 mb-8"
        >
          My Wishlist ({items.length} items)
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <ProductCard key={item.product.id} product={item.product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
