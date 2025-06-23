import { Product } from '../types/product';

export const productList: Product[] = [
  {
    productName: 'Nova X10 Pro',
    description:
      'Sleek and powerful with a 108MP camera, 5G support, and a 5000mAh battery — perfect for high-performance multitasking and stunning photography.',
    price: 200,
    image: require('../assets/images/iphone.png'),
  },
  {
    productName: 'AetherBook Pro 15',
    description:
      'A high-performance ultrabook with a 12th Gen Intel i7 processor, 16GB RAM, and a stunning 2.8K OLED display — perfect for professionals and creators on the move.',
    price: 250,
    image: require('../assets/images/laptop.png'),
  },
  {
    productName: 'SwiftClick M50',
    description:
      'An ergonomic wireless mouse with silent clicks, adjustable DPI up to 3200, and a long-lasting rechargeable battery — perfect for both work and casual gaming.',
    price: 100,
    image: require('../assets/images/mouse.png'),
  },
  {
    productName: 'KeyWave K70 Pro',
    description:
      'A sleek mechanical keyboard with RGB backlighting, hot-swappable switches, and a durable aluminum frame — built for both gamers and typists.',
    price: 150,
    image: require('../assets/images/keyboard.png'),
  },
];
