import SignOutButton from "@/components/SignOutButton";
import { PostCard } from "@/components/PostCard";
import { WebShell } from "@/components/WebShell";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useUserSync } from "@/hooks/useUserSync";
import { postApi, useApiClient } from "@/utils/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { FlatList, RefreshControl, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  useUserSync();
  const api = useApiClient();
  const queryClient = useQueryClient();

  const {
    data: posts = [],
    isLoading,
    isRefetching,
    refetch,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await postApi.getPosts(api);
      return res.data.posts ?? [];
    },
  });

  const likeMutation = useMutation({
    mutationFn: (postId: string) => postApi.likePost(api, postId),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <WebShell webMaxWidth="lg">
      <SafeAreaView className="flex-1 bg-white" edges={["top"]}>
        <View className="flex-row items-center justify-between px-4 py-3 border-b border-gray-100">
          <Text className="text-2xl font-bold text-sky-500">Rapture</Text>
          <SignOutButton />
        </View>

        {error ? (
          <View className="flex-1 items-center justify-center px-6">
            <Text className="text-gray-600 text-center">
              Could not load posts. Check your connection and try again.
            </Text>
          </View>
        ) : (
          <FlatList
            data={posts}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <PostCard post={item} onLike={(id) => likeMutation.mutate(id)} />
            )}
            refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
            ListEmptyComponent={
              <View className="py-16 px-6 items-center">
                <Text className="text-xl font-semibold text-gray-900 mb-2">Welcome to Rapture</Text>
                <Text className="text-gray-500 text-center">
                  Your feed is empty. Posts from people you follow will show up here.
                </Text>
              </View>
            }
            contentContainerClassName={posts.length === 0 ? "flex-grow" : undefined}
          />
        )}
      </SafeAreaView>
    </WebShell>
  );
};

export default HomeScreen;
