import { Redirect, Stack } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function AuthRoutesLayout() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  if (isSignedIn) {
    return <Redirect href="/(tabs)" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
