import { createContext, useContext, useState } from 'react';
import { Product } from '../types/product';
import { CartItem } from '../types/cartItem';
import Toast from 'react-native-toast-message';

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productName: string) => void;
  removeAllFromCart: (productName: string) => void;
  updateQuantity: (productName: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
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
      position: 'top',
      text1Style: { fontFamily: 'AirbnbCereal-Regular' },
      text2Style: { fontFamily: 'AirbnbCereal-Regular' },
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

  const updateQuantity = (productName: string, quantity: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.productName === productName
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, removeAllFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
