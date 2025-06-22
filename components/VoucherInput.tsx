import { View, Text, TextInput, Button } from 'react-native';

type Props = {
  voucherCode: string;
  isApplied: boolean;
  onChange: (text: string) => void;
  onApply: () => void;
};

export default function VoucherInput({ voucherCode, isApplied, onChange, onApply }: Props) {
  return (
    <View className="mt-4">
      <Text className="mb-1 font-semibold">Enter Voucher Code:</Text>
      <TextInput
        className="border px-2 py-1 rounded bg-white"
        placeholder="e.g. discount10"
        value={voucherCode}
        onChangeText={onChange}
      />
      <Button title="Apply Voucher" onPress={onApply} />
      {voucherCode && (
        <Text className="text-sm mt-1 text-gray-600">
          {isApplied ? '✅ 10% Discount Applied!' : '❌ Invalid Voucher'}
        </Text>
      )}
    </View>
  );
}
