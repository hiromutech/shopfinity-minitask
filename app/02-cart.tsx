import { View, ScrollView } from 'react-native';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import VoucherInput from '../components/VoucherInput';
import TotalSummary from '../components/TotalSummary';
import { useMemo, useState } from 'react';
import ShopfinityText from 'components/ShopfinityText';
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen() {
  const { cart, removeAllFromCart } = useCart();
  const [voucherCode, setVoucherCode] = useState('');
  const [isVoucherApplied, setIsVoucherApplied] = useState(false);

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
      <View className=" w-full bg-[#FF385C] py-5 pl-3 ">
        <ShopfinityText className="text-2xl font-semibold text-white">Cart</ShopfinityText>
      </View>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View className="mb-5 flex-row items-center gap-3">
          <Ionicons name="cart-outline" size={20} color="black" />
          <ShopfinityText>Items in Cart: {cart.length}</ShopfinityText>
        </View>

        {cart.length === 0 ? (
          <ShopfinityText className="text-gray-600">Your cart is empty.</ShopfinityText>
        ) : (
          <>
            {cart.map((item, index) => (
              <CartItem
                key={index}
                item={item}
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
      </ScrollView>
    </>
  );
}
