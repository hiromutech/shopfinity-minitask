import { View } from 'react-native';
import ShopfinityText from './ShopfinityText';

type Props = {
  total: number;
  discounted: number;
  isVoucherApplied: boolean;
};

export default function TotalSummary({ total, discounted, isVoucherApplied }: Props) {
  return (
    <View className="mt-4 rounded-xl bg-white p-5">
      <ShopfinityText className="text-lg">Total: ${total.toFixed(2)}</ShopfinityText>
      {isVoucherApplied && (
        <ShopfinityText className="text-lg text-green-700">
          Discounted Total: ${discounted.toFixed(2)}
        </ShopfinityText>
      )}
    </View>
  );
}
