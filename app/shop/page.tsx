'use client';

import { useState, useEffect, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { products, getCategoryName } from '@/lib/products';
import type { Category, Product } from '@/lib/types';
import { useSearchParams } from 'next/navigation';

const categories: Category[] = [
  'gloves',
  'rash-guards',
  'mouth-guards',
  'hand-wraps',
  'shin-guards',
  'accessories'
];

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' }
];

function ShopContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') as Category | null;

  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>(
    categoryParam ? [categoryParam] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [sortBy, setSortBy] = useState<string>('newest');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    let filtered = [...products];

    // Filter by category
    if (selectedCategories.length > 0) {
      filtered = filtered.filter(p => selectedCategories.includes(p.category));
    }

    // Filter by price
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'newest':
        filtered = filtered.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered = filtered.sort((a, b) => b.rating - a.rating);
        break;
    }

    setFilteredProducts(filtered);
  }, [selectedCategories, priceRange, sortBy]);

  const toggleCategory = (category: Category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange([0, 200]);
    setSortBy('newest');
  };

  const FilterSection = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
                className="w-5 h-5 rounded border-gray-300 text-[#FF6B6B] focus:ring-[#FF6B6B]"
              />
              <span className="text-gray-700">{getCategoryName(category)}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4">Price Range</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="200"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">${priceRange[0]}</span>
            <span className="font-bold text-[#FF6B6B]">${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <button
        onClick={clearFilters}
        className="w-full py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
      >
        Clear All Filters
      </button>
    </div>
  );

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-4"
          >
            Shop All Products
          </motion.h1>
          <p className="text-xl text-gray-600">
            {filteredProducts.length} products available
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block w-64 flex-shrink-0"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
              <FilterSection />
            </div>
          </motion.aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filter Button & Sort */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setIsMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md"
              >
                <Filter className="w-5 h-5" />
                Filters
              </button>

              <div className="flex items-center gap-2 ml-auto">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B6B] focus:outline-none"
                >
                  {sortOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-600">No products found matching your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-6 py-3 bg-gradient-to-r from-[#FF6B6B] to-[#FFD166] text-white font-semibold rounded-lg"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)} />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            className="absolute left-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Filters</h2>
              <button onClick={() => setIsMobileFilterOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <FilterSection />
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={
      <div className="bg-[#FAFAFA] min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading...</div>
        </div>
      </div>
    }>
      <ShopContent />
    </Suspense>
  );
}
