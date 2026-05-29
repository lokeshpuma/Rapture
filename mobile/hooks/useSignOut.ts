import { useClerk } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import { Alert, Platform } from "react-native";

export const useSignOut = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    const doSignOut = async () => {
      await signOut();
      router.replace("/(auth)");
    };

    if (Platform.OS === "web") {
      if (window.confirm("Are you sure you want to log out?")) {
        await doSignOut();
      }
      return;
    }

    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", style: "destructive", onPress: doSignOut },
    ]);
  };

  return { handleSignOut };
};
