'use client';

import { motion } from 'framer-motion';
import { Target, Users, Award, Heart, TrendingUp, Shield } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We source only the finest materials and work with expert manufacturers to ensure every product meets our rigorous standards.'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Built by fighters, for fighters. We listen to our community and continuously improve based on your feedback.'
  },
  {
    icon: Award,
    title: 'Performance Focus',
    description: 'Every product is designed to enhance your training and help you reach your full potential in the ring.'
  },
  {
    icon: Heart,
    title: 'Passion for Combat Sports',
    description: 'We live and breathe MMA. Our team consists of active fighters, coaches, and dedicated enthusiasts.'
  }
];

const stats = [
  { value: '50K+', label: 'Happy Athletes' },
  { value: '15+', label: 'Countries' },
  { value: '100K+', label: 'Products Sold' },
  { value: '4.9/5', label: 'Average Rating' }
];

export default function AboutPage() {
  return (
    <div className="bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517438322307-e67111335449?w=1920&q=80"
            alt="About STRIKER"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6">
              Empowering Champions
              <span className="block text-[#FF6B6B]">Since Day One</span>
            </h1>
            <p className="text-xl text-gray-200">
              STRIKER was founded with a simple mission: to provide world-class combat sports equipment that helps athletes perform at their absolute best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-semibold">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  STRIKER began in a small gym where a group of passionate fighters struggled to find equipment that matched their dedication and intensity. Frustrated by the lack of quality options, we decided to create our own.
                </p>
                <p>
                  What started as a small operation crafting custom gloves has grown into a global brand trusted by professional fighters, trainers, and enthusiasts worldwide. But our core values remain unchanged.
                </p>
                <p>
                  We believe that every athlete deserves access to premium equipment that helps them train harder, recover faster, and compete better. That's why we obsess over every detail, from material selection to manufacturing processes.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              What We Stand For
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values guide everything we do, from product development to customer service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FFD166] text-white mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-[#FF6B6B] to-[#FFD166]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-20 h-20 mx-auto text-white mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Our Mission
            </h2>
            <p className="text-2xl text-white/90 leading-relaxed">
              To empower every fighter with premium equipment that enhances performance, ensures safety, and builds confidence. We're not just selling gear—we're supporting your journey to becoming the best version of yourself.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Built by Fighters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team combines decades of combat sports experience with expertise in product design and manufacturing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Marcus "The Hammer" Johnson',
                role: 'Founder & Head of Product',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80',
                bio: 'Former UFC fighter with 15 years of professional experience'
              },
              {
                name: 'Sarah Chen',
                role: 'Chief Design Officer',
                image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
                bio: 'BJJ Black Belt and materials science expert'
              },
              {
                name: 'Alex Rodriguez',
                role: 'Head of Training Programs',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
                bio: 'Renowned boxing coach and fitness specialist'
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#FF6B6B] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Join the STRIKER Family
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Experience the difference that premium equipment makes in your training
            </p>
            <motion.a
              href="/shop"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-5 bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] text-white font-bold rounded-full text-lg shadow-2xl"
            >
              Shop Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
