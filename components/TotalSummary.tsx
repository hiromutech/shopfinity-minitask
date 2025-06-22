import { View, Text } from 'react-native';

type Props = {
  total: number;
  discounted: number;
  isVoucherApplied: boolean;
};

export default function TotalSummary({ total, discounted, isVoucherApplied }: Props) {
  return (
    <View className="mt-4">
      <Text className="text-lg font-bold">Total: ${total.toFixed(2)}</Text>
      {isVoucherApplied && (
        <Text className="text-lg font-bold text-green-700">
          Discounted Total: ${discounted.toFixed(2)}
        </Text>
      )}
    </View>
  );
}
