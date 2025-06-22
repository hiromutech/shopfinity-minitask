import { View, Text, Pressable } from 'react-native';
import { CartItem as CartItemType } from '../types/cartItem';

type Props = {
  item: CartItemType;
  onRemove: () => void;
  onRemoveAll: () => void;
};

export default function CartItem({ item, onRemove, onRemoveAll }: Props) {
  return (
    <View className="mb-2 p-3 border rounded-lg bg-white">
      <View className="flex-row justify-between items-center">
        <Text className="font-semibold text-base">
          📦 {item.product.productName} x{item.quantity}
        </Text>
        <Text className="text-sm text-gray-800">
          💰 ${item.product.price * item.quantity}
        </Text>
      </View>

      <View className="flex-row gap-2 mt-2">
        <Pressable
          onPress={onRemove}
          className="px-3 py-1 bg-red-500 rounded-full"
        >
          <Text className="text-white text-sm font-medium">Remove One</Text>
        </Pressable>

        <Pressable
          onPress={onRemoveAll}
          className="px-3 py-1 bg-red-700 rounded-full"
        >
          <Text className="text-white text-sm font-medium">Remove All</Text>
        </Pressable>
      </View>
    </View>
  );
}
