import { ActivityIndicator, View } from "react-native";

export function LoadingScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <ActivityIndicator size="large" color="#1DA1F2" />
    </View>
  );
}
