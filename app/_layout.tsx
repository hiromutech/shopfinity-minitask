import 'global.css';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Ionicons from '@expo/vector-icons/Ionicons';
import { CartProvider } from '../context/CartContext';
import { useEffect } from 'react';
import { Text } from 'react-native';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    'AirbnbCereal-Regular': require('../assets/fonts/AirbnbCereal_W_Md.otf'),
    'AirbnbCereal-Bold': require('../assets/fonts/AirbnbCereal_W_Bd.otf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // Optional: hides splash screen when ready
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // or a loading indicator
  }

  return (
    <SafeAreaProvider>
      <CartProvider>
        <Tabs
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              const iconName = route.name === '01-shop' ? 'cart' : 'basket';
              return <Ionicons name={iconName as any} size={size} color={color} />;
            },
            tabBarLabel: route.name === '01-shop' ? 'Shop' : 'Cart',
            tabBarActiveTintColor: '#FF385C',
            tabBarInactiveTintColor: 'gray',
          })}
          
        />
        <Toast />
      </CartProvider>
    </SafeAreaProvider>
  );
}
