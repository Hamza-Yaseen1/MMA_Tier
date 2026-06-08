'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowRight, 
  Truck, 
  Shield, 
  Headphones, 
  Award,
  Star,
  Quote
} from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { getFeaturedProducts, getNewArrivals, getCategoryName } from '@/lib/products';
import type { Category } from '@/lib/types';

const categories: { name: string; category: Category; image: string }[] = [
  { 
    name: 'MMA Gloves', 
    category: 'gloves',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80'
  },
  { 
    name: 'Rash Guards', 
    category: 'rash-guards',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80'
  },
  { 
    name: 'Shin Guards', 
    category: 'shin-guards',
    image: 'https://images.unsplash.com/photo-1611719424658-9ca8d1f5f5d6?w=600&q=80'
  },
  { 
    name: 'Accessories', 
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80'
  },
];

const features = [
  {
    icon: Truck,
    title: 'Free Shipping',
    description: 'On orders over $100'
  },
  {
    icon: Shield,
    title: 'Secure Payment',
    description: '100% secure transactions'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Dedicated customer service'
  },
  {
    icon: Award,
    title: 'Quality Guarantee',
    description: 'Premium products only'
  }
];

const testimonials = [
  {
    name: 'Mike Johnson',
    role: 'Professional MMA Fighter',
    content: 'Best gear I\'ve ever used. The quality is unmatched and really helps me perform at my peak.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80'
  },
  {
    name: 'Sarah Chen',
    role: 'BJJ Black Belt',
    content: 'STRIKER rash guards are incredibly comfortable and durable. Perfect for intense training sessions.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80'
  },
  {
    name: 'Carlos Rodriguez',
    role: 'Boxing Coach',
    content: 'I recommend STRIKER to all my students. Quality equipment that lasts and performs.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80'
  }
];

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const newArrivals = getNewArrivals();

  return (
    <div className="bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=1920&q=80"
            alt="MMA Training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
            >
              Unleash Your
              <span className="block bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] bg-clip-text text-transparent">
                Inner Champion
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-200 mb-8"
            >
              Premium MMA and combat sports gear designed for athletes who demand excellence. Train harder, fight smarter.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/shop">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] text-white font-bold rounded-full flex items-center gap-2 shadow-2xl hover:shadow-[#FF6B6B]/50"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Learn More
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FFD166] text-white mb-4">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-gray-600">
              Find the perfect gear for your training style
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Link href={`/shop?category=${category.category}`}>
                  <div className="relative h-80 rounded-2xl overflow-hidden group shadow-lg">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                      <motion.div
                        className="flex items-center text-white gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <span className="font-semibold">Shop Now</span>
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Best Sellers
            </h2>
            <p className="text-xl text-gray-600">
              Our most popular products loved by fighters worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] text-white font-bold rounded-full inline-flex items-center gap-2"
              >
                View All Products
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              New Arrivals
            </h2>
            <p className="text-xl text-gray-600">
              Check out our latest additions to the collection
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArrivals.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#FF6B6B]/10 to-[#4ECDC4]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              What Fighters Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by professional athletes and trainers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <Quote className="w-10 h-10 text-[#FF6B6B] mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#FFD166] fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6B6B] to-[#FFD166]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Elevate Your Training?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of athletes who trust STRIKER for their combat sports needs
            </p>
            <Link href="/shop">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white text-[#FF6B6B] font-bold rounded-full text-lg shadow-2xl hover:shadow-white/50"
              >
                Start Shopping
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
