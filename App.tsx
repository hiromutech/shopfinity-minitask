import './global.css';
import { ScrollView, Text, Modal, View, Pressable } from 'react-native';
import { useState, useMemo, useEffect } from 'react';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { useCart } from './hooks/useCart';
import { productList } from './data/productList';
import ProductItem from './components/ProductItem';
import CartItem from './components/CartItem';
import VoucherInput from './components/VoucherInput';
import TotalSummary from './components/TotalSummary';

export default function App() {
  const { cart, addToCart, removeFromCart, removeAllFromCart } = useCart();
  const [voucherCode, setVoucherCode] = useState('');
  const [isVoucherApplied, setIsVoucherApplied] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  const totalAmount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }, [cart]);
  const discount = useMemo(
    () => (isVoucherApplied ? totalAmount * 0.1 : 0),
    [totalAmount, isVoucherApplied]
  );
  const discountedTotal = useMemo(() => totalAmount - discount, [totalAmount, discount]);

  const applyVoucher = () => {
    setIsVoucherApplied(voucherCode.trim().toLowerCase() === 'discount10');
  };

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView>
          <View className="flex w-full justify-center bg-[#FF385C] p-5">
            <Text className="text-2xl font-bold text-white">Shopfinity</Text>
          </View>
          <ScrollView contentContainerStyle={{ padding: 20 }}>
            <Text className="mb-2 text-lg font-semibold">Products</Text>
            <View className="flex-row flex-wrap justify-between">
              {productList.map((product, index) => (
                <ProductItem key={index} product={product} onAdd={() => addToCart(product)} />
              ))}
            </View>

            <Modal
              animationType="slide"
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
              <View>
                <View className="mt-6 p-10">
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text>Close Modal</Text>
                  </Pressable>
                  <Text className="mb-2 text-xl font-bold text-green-600">Cart</Text>
                  <Text className="mb-2">🛒 Items in Cart: {cart.length}</Text>

                  {cart.length === 0 ? (
                    <Text className="text-gray-600">Your cart is empty.</Text>
                  ) : (
                    <>
                      {cart.map((item, index) => (
                        <CartItem
                          key={index}
                          item={item}
                          onRemove={() => removeFromCart(item.product.productName)}
                          onRemoveAll={() => removeAllFromCart(item.product.productName)}
                        />
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
              </View>
            </Modal>
            <Pressable onPress={() => setModalVisible(true)}>
              <Text>Show Modal</Text>
            </Pressable>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
      <Toast />
    </>
  );
}
