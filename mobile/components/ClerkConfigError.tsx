import { Text, View } from "react-native";

export function ClerkConfigError() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-xl font-semibold text-center text-gray-900 mb-3">App not configured</Text>
      <Text className="text-center text-gray-600 leading-6">
        Add the GitHub Actions secret{" "}
        <Text className="font-mono text-sm">EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY</Text> with your Clerk
        publishable key, then re-run the deploy workflow.
      </Text>
    </View>
  );
}
