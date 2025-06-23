import { View, Pressable, Image } from 'react-native';
import { CartItem as CartItemType } from '../types/cartItem';
import ShopfinityText from './ShopfinityText';
import { useCart } from '../context/CartContext';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  item: CartItemType;
  onRemoveAll: () => void;
};

export default function CartItem({ item, onRemoveAll }: Props) {
  const { updateQuantity } = useCart();

  const increase = () => updateQuantity(item.product.productName, item.quantity + 1);
  const decrease = () => updateQuantity(item.product.productName, item.quantity - 1);

  return (
    <View className="mb-2 flex rounded-xl bg-white p-3">
      <View className="flex-row items-center gap-8 p-3">
        <Image source={item.product.image} className="h-32 w-[25%]" resizeMode="contain" />
        <View className="flex-1">
          <ShopfinityText className="text-xl font-semibold">
            {item.product.productName}
          </ShopfinityText>

          <View className="mt-2 flex-row items-center gap-3">
            <Pressable
              onPress={decrease}
              className=" border border-gray-200 p-1"
              disabled={item.quantity <= 1}>
              <Ionicons name="remove-outline" size={20} color="gray" />
            </Pressable>

            <ShopfinityText className="mx-1 text-base font-semibold">
              {item.quantity}
            </ShopfinityText>

            <Pressable onPress={increase} className=" border border-gray-200 p-1 ">
              <Ionicons name="add-outline" size={20} color="gray" />
            </Pressable>
          </View>

          <ShopfinityText className="mt-5 text-lg font-semibold text-gray-500">
            ${item.product.price * item.quantity}
          </ShopfinityText>
        </View>
        <Pressable
          onPress={onRemoveAll}
          className="relative bottom-14 left-3 rounded-full  px-3 py-1">
          <Ionicons name="trash-outline" size={20} color="gray" />
        </Pressable>
      </View>
    </View>
  );
}
