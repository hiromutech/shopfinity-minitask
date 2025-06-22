import { useState } from 'react';
import { Product } from '../types/product';

export function useCart() {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => setCart(prev => [...prev, product]);
  const removeFromCart = (indexToRemove: number) =>
    setCart(prev => prev.filter((_, index) => index !== indexToRemove));

  return { cart, addToCart, removeFromCart };
}
