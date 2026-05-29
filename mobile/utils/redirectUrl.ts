import * as Linking from "expo-linking";
import { Platform } from "react-native";

const basePath = (process.env.EXPO_PUBLIC_BASE_PATH ?? "/Rapture").replace(/\/$/, "");

/** OAuth callback URL for native (deep link) and web (GitHub Pages). */
export function getOAuthRedirectUrl(): string {
  if (Platform.OS === "web" && typeof window !== "undefined") {
    return `${window.location.origin}${basePath}/oauth-native-callback`;
  }
  return Linking.createURL("/oauth-native-callback", { scheme: "mobile" });
}
