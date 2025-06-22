import { View, Text, Button } from 'react-native';
import { Product } from '../types/product';

type Props = {
  product: Product;
  onAdd: () => void;
};

export default function ProductItem({ product, onAdd }: Props) {
  return (
    <View className="mb-4 p-4 border rounded-lg bg-gray-100">
      <Text className="text-base font-semibold">{product.productName}</Text>
      <Text className="text-sm text-gray-700">{product.description}</Text>
      <Text className="text-sm text-gray-800 mb-2">${product.price}</Text>
      <Button title="Add to Cart" onPress={onAdd} />
    </View>
  );
}
