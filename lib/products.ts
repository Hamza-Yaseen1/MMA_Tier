import { Product, Category } from './types';

export const products: Product[] = [
  // MMA Gloves
  {
    id: '1',
    name: 'Pro Elite MMA Training Gloves',
    slug: 'pro-elite-mma-training-gloves',
    description: 'Premium leather MMA gloves with triple-density foam padding. Designed for professional training and sparring with superior wrist support.',
    price: 89.99,
    originalPrice: 119.99,
    category: 'gloves',
    images: [
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
      'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&q=80'
    ],
    variants: [
      { type: 'size', label: 'Size', options: ['S', 'M', 'L', 'XL'] },
      { type: 'color', label: 'Color', options: ['Black', 'Red', 'Blue', 'White'] },
      { type: 'weight', label: 'Weight', options: ['4oz', '6oz', '8oz'] }
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 127,
    features: [
      'Triple-density foam padding',
      'Premium leather construction',
      'Enhanced wrist support',
      'Breathable palm design'
    ]
  },
  {
    id: '2',
    name: 'Striker Series Competition Gloves',
    slug: 'striker-series-competition-gloves',
    description: 'Official competition-grade gloves with advanced impact absorption. Perfect for tournament fights and professional bouts.',
    price: 129.99,
    category: 'gloves',
    images: [
      'https://images.unsplash.com/photo-1592155931584-901ac15763e3?w=800&q=80',
      'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&q=80'
    ],
    variants: [
      { type: 'size', label: 'Size', options: ['S', 'M', 'L', 'XL'] },
      { type: 'color', label: 'Color', options: ['Black', 'Gold', 'Silver'] },
      { type: 'weight', label: 'Weight', options: ['4oz', '6oz'] }
    ],
    inStock: true,
    newArrival: true,
    rating: 4.9,
    reviewCount: 89,
    features: [
      'Competition approved',
      'Advanced impact absorption',
      'Secure Velcro closure',
      'Moisture-wicking lining'
    ]
  },

  // Rash Guards
  {
    id: '3',
    name: 'Performance Compression Rash Guard',
    slug: 'performance-compression-rash-guard',
    description: 'High-performance compression rash guard with moisture-wicking technology. Ideal for BJJ, grappling, and MMA training.',
    price: 54.99,
    originalPrice: 69.99,
    category: 'rash-guards',
    images: [
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
      'https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80'
    ],
    variants: [
      { type: 'size', label: 'Size', options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
      { type: 'color', label: 'Design', options: ['Black Panther', 'Blue Wave', 'Red Dragon', 'White Tiger'] }
    ],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 203,
    features: [
      'Moisture-wicking fabric',
      'Flatlock stitching',
      '4-way stretch material',
      'Anti-microbial treatment'
    ]
  },
  {
    id: '4',
    name: 'Elite BJJ Long Sleeve Rash Guard',
    slug: 'elite-bjj-long-sleeve-rash-guard',
    description: 'Premium BJJ rash guard with reinforced stitching and compression fit. Designed for intense grappling sessions.',
    price: 64.99,
    category: 'rash-guards',
    images: [
      'https://images.unsplash.com/photo-1578762560042-46ad127c95ea?w=800&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80'
    ],
    variants: [
      { type: 'size', label: 'Size', options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] },
      { type: 'color', label: 'Design', options: ['Camo Black', 'Coral Reef', 'Galaxy', 'Urban'] }
    ],
    inStock: true,
    newArrival: true,
    rating: 4.8,
    reviewCount: 156,
    features: [
      'Reinforced seams',
      'Compression fit',
      'Quick-dry technology',
      'UV protection'
    ]
  },

  // Mouth Guards
  {
    id: '5',
    name: 'Custom Fit Mouth Guard Pro',
    slug: 'custom-fit-mouth-guard-pro',
    description: 'Professional-grade boil-and-bite mouth guard with custom fit technology. Maximum protection for teeth and jaw.',
    price: 34.99,
    originalPrice: 44.99,
    category: 'mouth-guards',
    images: [
      'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=800&q=80',
      'https://images.unsplash.com/photo-1606889464198-fcb18894cf50?w=800&q=80'
    ],
    variants: [
      { type: 'size', label: 'Size', options: ['Youth', 'Adult'] },
      { type: 'color', label: 'Color', options: ['Clear', 'Black', 'Blue', 'Red', 'White'] }
    ],
    inStock: true,
    featured: true,
    rating: 4.6,
    reviewCount: 312,
    features: [
      'Boil-and-bite custom fit',
      'Shock-absorbing gel',
      'Breathing channels',
      'Case included'
    ]
  },

  // Hand Wraps
  {
    id: '6',
    name: 'Professional Hand Wraps 180"',
    slug: 'professional-hand-wraps-180',
    description: 'Premium cotton hand wraps with thumb loop and Velcro closure. Essential protection for training and competition.',
    price: 14.99,
    category: 'hand-wraps',
    images: [
      'https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80'
    ],
    variants: [
      { type: 'size', label: 'Length', options: ['120"', '180"'] },
      { type: 'color', label: 'Color', options: ['Black', 'Red', 'Blue', 'Pink', 'White', 'Camo'] }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 428,
    features: [
      'Premium cotton blend',
      'Thumb loop design',
      'Machine washable',
      'Sold in pairs'
    ]
  },
  {
    id: '7',
    name: 'Quick Wrap Elite Hand Wraps',
    slug: 'quick-wrap-elite-hand-wraps',
    description: 'Innovative quick-wrap design for fast and secure hand protection. Perfect for busy training schedules.',
    price: 24.99,
    category: 'hand-wraps',
    images: [
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80'
    ],
    variants: [
      { type: 'size', label: 'Size', options: ['S/M', 'L/XL'] },
      { type: 'color', label: 'Color', options: ['Black', 'Red', 'Blue'] }
    ],
    inStock: true,
    newArrival: true,
    rating: 4.7,
    reviewCount: 167,
    features: [
      'Quick-wrap system',
      'Neoprene padding',
      'Secure Velcro',
      'Easy to use'
    ]
  },

  // Shin Guards
  {
    id: '8',
    name: 'Pro Impact Shin Guards',
    slug: 'pro-impact-shin-guards',
    description: 'Heavy-duty shin guards with reinforced foam padding. Ultimate protection for kickboxing and Muay Thai.',
    price: 69.99,
    originalPrice: 89.99,
    category: 'shin-guards',
    images: [
      'https://images.unsplash.com/photo-1611719424658-9ca8d1f5f5d6?w=800&q=80',
      'https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80'
    ],
    variants: [
      { type: 'size', label: 'Size', options: ['S', 'M', 'L', 'XL'] },
      { type: 'color', label: 'Color', options: ['Black', 'Red', 'Blue', 'White'] }
    ],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 195,
    features: [
      'Reinforced foam padding',
      'Contoured fit',
      'Double strap system',
      'Lightweight design'
    ]
  },

  // Accessories
  {
    id: '9',
    name: 'Premium Gym Bag',
    slug: 'premium-gym-bag',
    description: 'Spacious gym bag with multiple compartments for all your training gear. Durable and water-resistant.',
    price: 49.99,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=800&q=80'
    ],
    variants: [
      { type: 'color', label: 'Color', options: ['Black', 'Grey', 'Navy', 'Coral'] }
    ],
    inStock: true,
    rating: 4.6,
    reviewCount: 284,
    features: [
      'Water-resistant fabric',
      'Multiple compartments',
      'Adjustable shoulder strap',
      'Ventilated shoe pocket'
    ]
  },
  {
    id: '10',
    name: 'Speed Jump Rope Pro',
    slug: 'speed-jump-rope-pro',
    description: 'Professional speed rope with adjustable length and comfortable handles. Perfect for cardio and warm-ups.',
    price: 19.99,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80'
    ],
    variants: [
      { type: 'color', label: 'Color', options: ['Black', 'Red', 'Blue'] }
    ],
    inStock: true,
    rating: 4.5,
    reviewCount: 342,
    features: [
      'Adjustable length',
      'Ergonomic handles',
      'Ball bearing system',
      'Carrying pouch included'
    ]
  },
  {
    id: '11',
    name: 'Training Focus Mitts',
    slug: 'training-focus-mitts',
    description: 'Curved focus mitts with shock-absorbing padding. Ideal for precision striking and technique training.',
    price: 44.99,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800&q=80',
      'https://images.unsplash.com/photo-1517438322307-e67111335449?w=800&q=80'
    ],
    variants: [
      { type: 'color', label: 'Color', options: ['Black/Red', 'Black/Blue', 'All Black'] }
    ],
    inStock: true,
    newArrival: true,
    rating: 4.7,
    reviewCount: 118,
    features: [
      'Curved design',
      'Shock-absorbing foam',
      'Secure wrist strap',
      'Sold in pairs'
    ]
  },
  {
    id: '12',
    name: 'Resistance Training Bands Set',
    slug: 'resistance-training-bands-set',
    description: 'Complete set of 5 resistance bands with varying resistance levels. Perfect for strength and conditioning.',
    price: 29.99,
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=800&q=80',
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80'
    ],
    variants: [],
    inStock: true,
    rating: 4.6,
    reviewCount: 267,
    features: [
      '5 resistance levels',
      'Durable latex',
      'Includes carrying bag',
      'Exercise guide included'
    ]
  }
];

export const getCategoryName = (category: Category): string => {
  const names: Record<Category, string> = {
    'gloves': 'MMA Gloves',
    'rash-guards': 'Rash Guards',
    'mouth-guards': 'Mouth Guards',
    'hand-wraps': 'Hand Wraps',
    'shin-guards': 'Shin Guards',
    'accessories': 'Training Accessories'
  };
  return names[category];
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getProductsByCategory = (category: Category): Product[] => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(p => p.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(p => p.newArrival);
};
