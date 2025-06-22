import { ImageSourcePropType } from 'react-native';

export type Product = {
  productName: string;
  description: string;
  price: number;
  image: ImageSourcePropType;
};
