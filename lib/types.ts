export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: Category;
  images: string[];
  variants: ProductVariant[];
  inStock: boolean;
  featured?: boolean;
  newArrival?: boolean;
  rating: number;
  reviewCount: number;
  features?: string[];
}

export interface ProductVariant {
  type: 'size' | 'color' | 'weight';
  label: string;
  options: string[];
}

export type Category = 
  | 'gloves'
  | 'rash-guards'
  | 'mouth-guards'
  | 'hand-wraps'
  | 'shin-guards'
  | 'accessories';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariants: Record<string, string>;
}

export interface WishlistItem {
  product: Product;
  addedAt: Date;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
}

export interface FilterOptions {
  categories: Category[];
  priceRange: [number, number];
  sortBy: 'newest' | 'price-low' | 'price-high' | 'rating';
}
