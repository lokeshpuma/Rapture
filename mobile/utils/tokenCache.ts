import { tokenCache as nativeTokenCache } from "@clerk/clerk-expo/token-cache";
import { Platform } from "react-native";

const webTokenCache =
  Platform.OS === "web"
    ? {
        getToken: async (key: string) => {
          try {
            return localStorage.getItem(key);
          } catch {
            return null;
          }
        },
        saveToken: async (key: string, value: string) => {
          try {
            localStorage.setItem(key, value);
          } catch {
            /* ignore quota / private mode */
          }
        },
      }
    : undefined;

export const appTokenCache = Platform.OS === "web" ? webTokenCache : nativeTokenCache;
