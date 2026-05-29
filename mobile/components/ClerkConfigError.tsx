import { Text, View } from "react-native";

export function ClerkConfigError() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <Text className="text-xl font-semibold text-center text-gray-900 mb-3">App not configured</Text>
      <Text className="text-center text-gray-600 leading-6">
        Add your Clerk publishable key, then redeploy: commit{" "}
        <Text className="font-mono text-sm">mobile/clerk.publishable.key</Text> (copy from{" "}
        <Text className="font-mono text-sm">clerk.publishable.key.example</Text>
        ), or set GitHub secret / variable{" "}
        <Text className="font-mono text-sm">EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY</Text>.
      </Text>
    </View>
  );
}
