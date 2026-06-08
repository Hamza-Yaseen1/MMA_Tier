'use client';

import { motion } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/lib/hooks/useCart';

export default function CartPage() {
  const { items, updateQuantity, removeItem, getTotalPrice, getTotalItems } = useCart();
  const totalPrice = getTotalPrice();
  const shippingCost = totalPrice > 100 ? 0 : 9.99;
  const finalTotal = totalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <div className="bg-[#FAFAFA] min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
            <h1 className="text-4xl font-black text-gray-900 mb-4">Your Cart is Empty</h1>
            <p className="text-xl text-gray-600 mb-8">
              Looks like you haven't added any items yet
            </p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] text-white font-bold rounded-full inline-flex items-center gap-2"
              >
                Start Shopping
                <ArrowRight className="w-5 h-5" />
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
          Shopping Cart ({getTotalItems()} items)
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {items.map((item, index) => (
                <motion.div
                  key={`${item.product.id}-${JSON.stringify(item.selectedVariants)}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg flex flex-col sm:flex-row gap-6"
                >
                  {/* Image */}
                  <Link href={`/product/${item.product.id}`}>
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full sm:w-32 h-32 object-cover rounded-lg hover:opacity-75 transition-opacity"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1">
                    <Link href={`/product/${item.product.id}`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#FF6B6B] transition-colors">
                        {item.product.name}
                      </h3>
                    </Link>
                    
                    {/* Variants */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {Object.entries(item.selectedVariants).map(([key, value]) => (
                        <span key={key} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                          {key}: {value}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <div className="flex items-center bg-gray-100 rounded-lg">
                          <button
                            onClick={() => updateQuantity(
                              item.product.id,
                              item.selectedVariants,
                              item.quantity - 1
                            )}
                            className="p-2 hover:bg-gray-200 rounded-l-lg"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 font-bold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(
                              item.product.id,
                              item.selectedVariants,
                              item.quantity + 1
                            )}
                            className="p-2 hover:bg-gray-200 rounded-r-lg"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeItem(item.product.id, item.selectedVariants)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-2xl font-black text-gray-900">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-600">
                          ${item.product.price.toFixed(2)} each
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-6 shadow-lg sticky top-24"
            >
              <h2 className="text-2xl font-black text-gray-900 mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-bold text-gray-900">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-bold text-gray-900">
                    {shippingCost === 0 ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                {totalPrice < 100 && (
                  <p className="text-sm text-[#4ECDC4]">
                    Add ${(100 - totalPrice).toFixed(2)} more for free shipping!
                  </p>
                )}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">Total</span>
                    <span className="text-3xl font-black text-[#FF6B6B]">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link href="/checkout">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] text-white font-bold rounded-lg mb-3 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  Proceed to Checkout
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/shop">
                <button className="w-full py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors">
                  Continue Shopping
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
