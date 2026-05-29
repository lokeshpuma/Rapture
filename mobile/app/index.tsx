import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import { LoadingScreen } from "@/components/LoadingScreen";

export default function Index() {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return <LoadingScreen />;
  }

  if (!isSignedIn) {
    return <Redirect href="/(auth)" />;
  }

  return <Redirect href="/(tabs)" />;
}
