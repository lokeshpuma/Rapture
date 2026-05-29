import { useSSO } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useRouter } from "expo-router";
import { getOAuthRedirectUrl } from "@/utils/redirectUrl";
import { useEffect, useState } from "react";
import { Alert, Platform } from "react-native";

WebBrowser.maybeCompleteAuthSession();

export const useSocialAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { startSSOFlow } = useSSO();
  const router = useRouter();

  useEffect(() => {
    if (Platform.OS === "web") return;
    WebBrowser.warmUpAsync();
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, []);

  const handleSocialAuth = async (strategy: "oauth_google" | "oauth_apple") => {
    setIsLoading(true);
    try {
      const redirectUrl = getOAuthRedirectUrl();
      const { createdSessionId, setActive } = await startSSOFlow({ strategy, redirectUrl });

      // On web the browser navigates away; oauth-native-callback completes the flow.
      if (Platform.OS === "web") {
        return;
      }

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
        router.replace("/(tabs)");
      }
    } catch (err) {
      console.log("Error in social auth", err);
      const provider = strategy === "oauth_google" ? "Google" : "Apple";
      const message = `Failed to sign in with ${provider}. Please try again.`;
      if (Platform.OS === "web") {
        window.alert(message);
      } else {
        Alert.alert("Error", message);
      }
    } finally {
      if (Platform.OS !== "web") {
        setIsLoading(false);
      }
    }
  };

  return { isLoading, handleSocialAuth };
};
