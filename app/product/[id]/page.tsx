'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  RefreshCw,
  Check,
  Minus,
  Plus
} from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { getProductById } from '@/lib/products';
import { useCart } from '@/lib/hooks/useCart';
import { useWishlist } from '@/lib/hooks/useWishlist';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

export default function ProductDetailPage() {
  const params = useParams();
  const product = getProductById(params.id as string);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  
  const { addItem } = useCart();
  const { isInWishlist, toggleItem } = useWishlist();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-[#FF6B6B] hover:underline">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const relatedProducts = products.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    // Set default variants if not selected
    const finalVariants = { ...selectedVariants };
    product.variants.forEach(variant => {
      if (!finalVariants[variant.type] && variant.options.length > 0) {
        finalVariants[variant.type] = variant.options[0];
      }
    });
    
    for (let i = 0; i < quantity; i++) {
      addItem(product, finalVariants);
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-[#FF6B6B]">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#FF6B6B]">Shop</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Images */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4"
            >
              <div className="relative h-[500px]">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {product.newArrival && (
                  <span className="absolute top-4 left-4 px-4 py-2 bg-[#4ECDC4] text-white text-sm font-bold rounded-full">
                    NEW
                  </span>
                )}
                {product.originalPrice && (
                  <span className="absolute top-4 right-4 px-4 py-2 bg-[#FF6B6B] text-white text-sm font-bold rounded-full">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>
            </motion.div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-24 rounded-lg overflow-hidden ${
                    selectedImage === index 
                      ? 'ring-4 ring-[#FF6B6B]' 
                      : 'ring-1 ring-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <p className="text-sm text-[#4ECDC4] font-semibold uppercase tracking-wide mb-2">
              {product.category.replace('-', ' ')}
            </p>
            
            <h1 className="text-4xl font-black text-gray-900 mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-[#FFD166] fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-5xl font-black text-gray-900">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-2xl text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                  <span className="px-3 py-1 bg-[#FF6B6B] text-white text-sm font-bold rounded-full">
                    SAVE ${(product.originalPrice - product.price).toFixed(2)}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Variants */}
            {product.variants.map(variant => (
              <div key={variant.type} className="mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {variant.label}
                  {selectedVariants[variant.type] && (
                    <span className="ml-2 text-[#FF6B6B]">
                      {selectedVariants[variant.type]}
                    </span>
                  )}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {variant.options.map(option => (
                    <motion.button
                      key={option}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedVariants({
                        ...selectedVariants,
                        [variant.type]: option
                      })}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        selectedVariants[variant.type] === option
                          ? 'bg-[#FF6B6B] text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#FF6B6B]'
                      }`}
                    >
                      {option}
                    </motion.button>
                  ))}
                </div>
              </div>
            ))}

            {/* Quantity */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white rounded-lg border-2 border-gray-200">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-gray-50"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <span className="px-6 font-bold text-lg">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-50"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
                <span className="text-gray-600">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 py-4 rounded-lg font-bold flex items-center justify-center gap-2 text-lg ${
                  product.inStock
                    ? 'bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] text-white hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <ShoppingCart className="w-6 h-6" />
                Add to Cart
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => toggleItem(product)}
                className={`p-4 rounded-lg border-2 ${
                  isWishlisted
                    ? 'bg-[#FF6B6B] border-[#FF6B6B] text-white'
                    : 'bg-white border-gray-200 text-gray-700 hover:border-[#FF6B6B]'
                }`}
              >
                <Heart className={`w-6 h-6 ${isWishlisted ? 'fill-current' : ''}`} />
              </motion.button>
            </div>

            {/* Features */}
            {product.features && (
              <div className="bg-white rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#4ECDC4] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white rounded-xl p-4">
                <Truck className="w-8 h-8 text-[#4ECDC4]" />
                <div>
                  <p className="font-bold text-sm">Free Shipping</p>
                  <p className="text-xs text-gray-600">On orders over $100</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-4">
                <Shield className="w-8 h-8 text-[#4ECDC4]" />
                <div>
                  <p className="font-bold text-sm">Quality Guarantee</p>
                  <p className="text-xs text-gray-600">100% authentic</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl p-4">
                <RefreshCw className="w-8 h-8 text-[#4ECDC4]" />
                <div>
                  <p className="font-bold text-sm">Easy Returns</p>
                  <p className="text-xs text-gray-600">30-day policy</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <h2 className="text-3xl font-black text-gray-900 mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
