import './global.css';
import { ScrollView, Text, View } from 'react-native';
import { useState, useMemo, useEffect } from 'react';
import { useCart } from './hooks/useCart';
import { productList } from './data/productList';
import ProductItem from './components/ProductItem';
import CartItem from './components/CartItem';
import VoucherInput from './components/VoucherInput';
import TotalSummary from './components/TotalSummary';



export default function App() {
  const { cart, addToCart, removeFromCart } = useCart();
  const [voucherCode, setVoucherCode] = useState('');
  const [isVoucherApplied, setIsVoucherApplied] = useState(false);

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  const totalAmount = useMemo(() => cart.reduce((sum, item) => sum + item.price, 0), [cart]);
  const discount = useMemo(() => (isVoucherApplied ? totalAmount * 0.1 : 0), [totalAmount, isVoucherApplied]);
  const discountedTotal = useMemo(() => totalAmount - discount, [totalAmount, discount]);

  const applyVoucher = () => {
    setIsVoucherApplied(voucherCode.trim().toLowerCase() === 'discount10');
  };

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Text className="text-2xl font-bold text-blue-500 mb-4">Product Store</Text>

      <Text className="text-lg font-semibold mb-2">Products</Text>
      {productList.map((product, index) => (
        <ProductItem key={index} product={product} onAdd={() => addToCart(product)} />
      ))}

      <View className="mt-6">
        <Text className="text-xl font-bold text-green-600 mb-2">Cart</Text>
        <Text className="mb-2">🛒 Items in Cart: {cart.length}</Text>

        {cart.length === 0 ? (
          <Text className="text-gray-600">Your cart is empty.</Text>
        ) : (
          <>
            {cart.map((item, index) => (
              <CartItem key={index} item={item} onRemove={() => removeFromCart(index)} />
            ))}

            <VoucherInput
              voucherCode={voucherCode}
              isApplied={isVoucherApplied}
              onChange={setVoucherCode}
              onApply={applyVoucher}
            />

            <TotalSummary
              total={totalAmount}
              discounted={discountedTotal}
              isVoucherApplied={isVoucherApplied}
            />
          </>
        )}
      </View>
    </ScrollView>
  );
}
