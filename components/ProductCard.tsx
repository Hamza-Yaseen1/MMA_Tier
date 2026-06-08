'use client';

import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/types';
import { useWishlist } from '@/lib/hooks/useWishlist';
import { useCart } from '@/lib/hooks/useCart';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { isInWishlist, toggleItem } = useWishlist();
  const { addItem } = useCart();
  const isWishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add with default variants
    const defaultVariants: Record<string, string> = {};
    product.variants.forEach(variant => {
      if (variant.options.length > 0) {
        defaultVariants[variant.type] = variant.options[0];
      }
    });
    addItem(product, defaultVariants);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleItem(product);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Link href={`/product/${product.id}`}>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300">
          {/* Image Container */}
          <div className="relative h-72 bg-gray-100 overflow-hidden">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.newArrival && (
                <span className="px-3 py-1 bg-[#4ECDC4] text-white text-xs font-bold rounded-full">
                  NEW
                </span>
              )}
              {product.originalPrice && (
                <span className="px-3 py-1 bg-[#FF6B6B] text-white text-xs font-bold rounded-full">
                  SALE
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleToggleWishlist}
                className={`p-2 rounded-full shadow-lg backdrop-blur-sm transition-colors ${
                  isWishlisted 
                    ? 'bg-[#FF6B6B] text-white' 
                    : 'bg-white/90 text-gray-700 hover:bg-[#FF6B6B] hover:text-white'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-white/90 rounded-full hover:bg-white shadow-lg backdrop-blur-sm"
              >
                <Eye className="w-5 h-5 text-gray-700" />
              </motion.button>
            </div>

            {/* Out of Stock Overlay */}
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Out of Stock</span>
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="p-5">
            {/* Category */}
            <p className="text-xs text-[#4ECDC4] font-semibold uppercase tracking-wide mb-2">
              {product.category.replace('-', ' ')}
            </p>

            {/* Product Name */}
            <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#FF6B6B] transition-colors">
              {product.name}
            </h3>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-[#FFD166] fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviewCount})
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <span className="text-sm font-semibold text-[#FF6B6B]">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
                product.inStock
                  ? 'bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] text-white hover:shadow-lg'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </motion.button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
