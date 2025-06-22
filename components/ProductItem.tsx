import { View, Text, Button, Image } from 'react-native';
import { Product } from '../types/product';

type Props = {
  product: Product;
  onAdd: () => void;
};

export default function ProductItem({ product, onAdd }: Props) {
  return (
    <View className="mb-4 w-[48%] rounded-lg bg-gray-100">
      <Image source={product.image} className="m-10 mx-auto h-32 w-full" />
      <View className="p-3">
        <Text className="text-base font-semibold">{product.productName}</Text>
        <Text className="mb-2 text-sm font-bold text-blue-600">${product.price}</Text>
      </View>

      <Button title="Add to Cart" onPress={onAdd} />
    </View>
  );
}
