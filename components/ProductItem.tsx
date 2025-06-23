import {  Pressable, Image, Modal, ScrollView } from 'react-native';
import { Product } from '../types/product';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import ShopfinityText from './ShopfinityText';

type Props = {
  product: Product;
  onAdd: () => void;
};

export default function ProductItem({ product, onAdd }: Props) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <Pressable onPress={() => setModalVisible(false)}>
            <Ionicons name="arrow-back-outline" size={24} color="#FF385C" />
          </Pressable>

          <Image
            source={product.image}
            className="mx-auto my-16 h-[300px] w-[80%]"
            resizeMode="contain"
          />

          <ShopfinityText className="mt-4 text-2xl font-semibold">
            {product.productName}
          </ShopfinityText>
          <ShopfinityText className="text-xl">${product.price}</ShopfinityText>
          <ShopfinityText className="mt-10 text-gray-500">{product.description}</ShopfinityText>

          <Pressable
            className="mt-10 w-full flex-row items-center justify-center gap-2 rounded-xl bg-[#FF385C] p-5"
            onPress={onAdd}>
            <Ionicons name="cart-outline" size={20} color="white" />
            <ShopfinityText className="text-white">Add to Cart</ShopfinityText>
          </Pressable>

          <Toast />
        </ScrollView>
      </Modal>
      <Pressable
        className="mb-4 w-[48%] rounded-lg bg-gray-200 p-4"
        onPress={() => setModalVisible(true)}>
        <Image source={product.image} className="h-32 w-full" resizeMode="contain" />
        <ShopfinityText className="mt-2 text-base font-semibold">{product.productName}</ShopfinityText>
        <ShopfinityText className="mb-2 text-sm text-gray-800">${product.price}</ShopfinityText>
      </Pressable>
    </>
  );
}
