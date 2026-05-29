import { ClerkProvider } from "@clerk/clerk-expo";
import { Stack } from "expo-router";
import "../global.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { ClerkConfigError } from "@/components/ClerkConfigError";
import { appTokenCache } from "@/utils/tokenCache";

const queryClient = new QueryClient();
const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY?.trim() ?? "";

export default function RootLayout() {
  if (!publishableKey) {
    return <ClerkConfigError />;
  }

  return (
    <ClerkProvider tokenCache={appTokenCache} publishableKey={publishableKey}>
      <QueryClientProvider client={queryClient}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="oauth-native-callback" />
        </Stack>
        <StatusBar style="dark" />
      </QueryClientProvider>
    </ClerkProvider>
  );
}
