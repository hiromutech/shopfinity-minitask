import { View, Text, Button } from 'react-native';
import { Product } from '../types/product';

type Props = {
  item: Product;
  onRemove: () => void;
};

export default function CartItem({ item, onRemove }: Props) {
  return (
    <View className="mb-2 p-2 border rounded bg-white flex-row items-center justify-between">
      <View>
        <Text className="font-semibold">{item.productName}</Text>
        <Text className="text-sm text-gray-600">${item.price}</Text>
      </View>
      <Button title="Remove" color="red" onPress={onRemove} />
    </View>
  );
}
