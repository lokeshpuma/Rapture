import { useSocialAuth } from "@/hooks/useSocialAuth";
import { WebShell } from "@/components/WebShell";
import {
  ActivityIndicator,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const { handleSocialAuth, isLoading } = useSocialAuth();

  return (
    <WebShell>
      <ScrollView
        className="flex-1 bg-white"
        contentContainerClassName="flex-grow justify-center px-6 py-10"
        keyboardShouldPersistTaps="handled"
      >
        <View className="items-center mb-8">
          <Image
            source={require("../../assets/images/auth2.png")}
            style={{
              width: Platform.OS === "web" ? 280 : 320,
              height: Platform.OS === "web" ? 280 : 320,
              maxWidth: "100%",
            }}
            resizeMode="contain"
          />
        </View>

        <View className="gap-3 w-full max-w-md self-center">
          <TouchableOpacity
            className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6 w-full"
            onPress={() => handleSocialAuth("oauth_google")}
            disabled={isLoading}
            style={
              Platform.OS === "web"
                ? { boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }
                : {
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    elevation: 2,
                  }
            }
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#4285F4" />
            ) : (
              <View className="flex-row items-center justify-center">
                <Image
                  source={require("../../assets/images/google.png")}
                  className="w-8 h-8 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black font-medium text-base">Continue with Google</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-row items-center justify-center bg-white border border-gray-300 rounded-full py-3 px-6 w-full"
            onPress={() => handleSocialAuth("oauth_apple")}
            disabled={isLoading}
            style={
              Platform.OS === "web"
                ? { boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }
                : {
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.1,
                    shadowRadius: 2,
                    elevation: 2,
                  }
            }
          >
            {isLoading ? (
              <ActivityIndicator size="small" color="#000" />
            ) : (
              <View className="flex-row items-center justify-center">
                <Image
                  source={require("../../assets/images/apple.png")}
                  className="w-7 h-7 mr-3"
                  resizeMode="contain"
                />
                <Text className="text-black font-medium text-base">Continue with Apple</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <Text className="text-center text-gray-500 text-xs leading-5 mt-8 px-2 max-w-md self-center">
          By signing up, you agree to our <Text className="text-blue-500">Terms</Text>
          {", "}
          <Text className="text-blue-500">Privacy Policy</Text>
          {", and "}
          <Text className="text-blue-500">Cookie Use</Text>.
        </Text>
      </ScrollView>
    </WebShell>
  );
}
