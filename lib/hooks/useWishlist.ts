'use client';

import { create } from 'zustand';
import { Product, WishlistItem } from '../types';

interface WishlistStore {
  items: WishlistItem[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  toggleItem: (product: Product) => void;
}

export const useWishlist = create<WishlistStore>((set, get) => ({
  items: [],

  addItem: (product) => {
    set((state) => {
      if (state.items.some(item => item.product.id === product.id)) {
        return state;
      }
      return {
        items: [...state.items, { product, addedAt: new Date() }]
      };
    });
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter(item => item.product.id !== productId)
    }));
  },

  isInWishlist: (productId) => {
    return get().items.some(item => item.product.id === productId);
  },

  toggleItem: (product) => {
    const { isInWishlist, addItem, removeItem } = get();
    if (isInWishlist(product.id)) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  }
}));
