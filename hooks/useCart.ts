import { useState } from 'react';
import { Product } from '../types/product';
import { CartItem } from '../types/cartItem';
import Toast from 'react-native-toast-message';

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.product.productName === product.productName);

      if (existingItem) {
        return prev.map((item) =>
          item.product.productName === product.productName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });

    Toast.show({
      type: 'success',
      text1: product.productName,
      text2: 'Item added to cart',
      position: 'bottom',
      bottomOffset: 60,
    });
  };

  const removeFromCart = (productName: string) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.productName === productName ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeAllFromCart = (productName: string) => {
    setCart((prev) => prev.filter((item) => item.product.productName !== productName));
  };

  return { cart, addToCart, removeFromCart, removeAllFromCart };
}
