import { useAuth } from "@clerk/clerk-expo";
import { Redirect, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import { LoadingScreen } from "@/components/LoadingScreen";

WebBrowser.maybeCompleteAuthSession();

export default function OAuthNativeCallback() {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();
  const [authFailed, setAuthFailed] = useState(false);

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/(tabs)");
    }
  }, [isLoaded, isSignedIn, router]);

  useEffect(() => {
    if (!isLoaded || isSignedIn) return;
    const timer = setTimeout(() => setAuthFailed(true), 4000);
    return () => clearTimeout(timer);
  }, [isLoaded, isSignedIn]);

  if (!isLoaded || (isLoaded && isSignedIn)) {
    return <LoadingScreen />;
  }

  if (authFailed) {
    return <Redirect href="/(auth)" />;
  }

  return <LoadingScreen />;
}
