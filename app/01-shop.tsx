import { ScrollView, Text, View } from 'react-native';
import { useCart } from '../context/CartContext';
import { productList } from '../data/productList';
import ProductItem from '../components/ProductItem';
import ShopfinityText from 'components/ShopfinityText';

export default function ShopScreen() {
  const { addToCart } = useCart();

  return (
    <>
      <View className=" w-full bg-[#FF385C] pb-5 pl-3 pt-10">
        <ShopfinityText className="text-2xl font-semibold text-white">Shopfinity</ShopfinityText>
      </View>
      <ScrollView contentContainerStyle={{ padding: 20 }} className="mt-10">
        <View className=" flex-row flex-wrap justify-between">
          {productList.map((product, index) => (
            <ProductItem key={index} product={product} onAdd={() => addToCart(product)} />
          ))}
        </View>
      </ScrollView>
    </>
  );
}
