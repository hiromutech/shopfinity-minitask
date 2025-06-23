import { View, TextInput, Pressable } from 'react-native';
import ShopfinityText from './ShopfinityText';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  voucherCode: string;
  isApplied: boolean;
  onChange: (text: string) => void;
  onApply: () => void;
};

export default function VoucherInput({ voucherCode, isApplied, onChange, onApply }: Props) {
  return (
    <View className="mt-4">
      <ShopfinityText className="mb-3 first-line:font-semibold">Enter Voucher Code:</ShopfinityText>
      <TextInput
        className="rounded bg-white p-3 font-airbnbcereal"
        placeholder="e.g. discount10"
        value={voucherCode}
        onChangeText={onChange}
      />
      <Pressable
        className="mt-5 w-full flex-row items-center justify-center gap-2 rounded-xl bg-[#FF385C] p-4"
        onPress={onApply}>
        <Ionicons name="pricetag-outline" size={20} color="white" />
        <ShopfinityText className="text-white">Apply Voucher</ShopfinityText>
      </Pressable>

      {voucherCode && (
        <ShopfinityText className={`mt-3 text-sm ${isApplied ? 'text-green-600' : 'text-red-600'}`}>
          {isApplied ? '10% Discount Applied!' : 'Invalid Voucher'}
        </ShopfinityText>
      )}
    </View>
  );
}
