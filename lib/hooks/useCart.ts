'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, Product } from '../types';

interface CartStore {
  items: CartItem[];
  addItem: (product: Product, selectedVariants: Record<string, string>) => void;
  removeItem: (productId: string, selectedVariants: Record<string, string>) => void;
  updateQuantity: (productId: string, selectedVariants: Record<string, string>, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// Simple implementation without persist for now
export const useCart = create<CartStore>((set, get) => ({
  items: [],
  
  addItem: (product, selectedVariants) => {
    set((state) => {
      const existingItemIndex = state.items.findIndex(
        item => 
          item.product.id === product.id &&
          JSON.stringify(item.selectedVariants) === JSON.stringify(selectedVariants)
      );

      if (existingItemIndex > -1) {
        const newItems = [...state.items];
        newItems[existingItemIndex].quantity += 1;
        return { items: newItems };
      }

      return {
        items: [...state.items, { product, quantity: 1, selectedVariants }]
      };
    });
  },

  removeItem: (productId, selectedVariants) => {
    set((state) => ({
      items: state.items.filter(
        item => 
          !(item.product.id === productId &&
          JSON.stringify(item.selectedVariants) === JSON.stringify(selectedVariants))
      )
    }));
  },

  updateQuantity: (productId, selectedVariants, quantity) => {
    set((state) => ({
      items: state.items.map(item =>
        item.product.id === productId &&
        JSON.stringify(item.selectedVariants) === JSON.stringify(selectedVariants)
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0)
    }));
  },

  clearCart: () => set({ items: [] }),

  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },

  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }
}));
