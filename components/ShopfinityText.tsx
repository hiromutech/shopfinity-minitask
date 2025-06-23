import { Text, TextProps } from 'react-native';

type Props = {
  children: React.ReactNode;
} & TextProps;

export default function ShopfinityText({ children, className, ...props }: Props) {
  return (
    <Text className={`font-airbnbcereal ${className || ''}`} {...props}>
      {children}
    </Text>
  );
}
