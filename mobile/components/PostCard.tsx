import { Feather } from "@expo/vector-icons";
import { formatDistanceToNow } from "date-fns";
import { Image, Text, TouchableOpacity, View } from "react-native";

export type FeedPost = {
  _id: string;
  content?: string;
  image?: string;
  createdAt: string;
  likes?: string[];
  user?: {
    username?: string;
    firstName?: string;
    lastName?: string;
    profilePicture?: string;
  };
};

type PostCardProps = {
  post: FeedPost;
  onLike?: (postId: string) => void;
};

export function PostCard({ post, onLike }: PostCardProps) {
  const name =
    [post.user?.firstName, post.user?.lastName].filter(Boolean).join(" ") ||
    post.user?.username ||
    "User";
  const handle = post.user?.username ? `@${post.user.username}` : "";
  const likeCount = post.likes?.length ?? 0;

  return (
    <View className="border-b border-gray-100 px-4 py-3">
      <View className="flex-row">
        {post.user?.profilePicture ? (
          <Image source={{ uri: post.user.profilePicture }} className="w-12 h-12 rounded-full mr-3" />
        ) : (
          <View className="w-12 h-12 rounded-full bg-sky-100 items-center justify-center mr-3">
            <Text className="text-sky-600 font-bold text-lg">{name.charAt(0).toUpperCase()}</Text>
          </View>
        )}
        <View className="flex-1">
          <View className="flex-row flex-wrap items-center gap-1">
            <Text className="font-bold text-gray-900">{name}</Text>
            {handle ? <Text className="text-gray-500">{handle}</Text> : null}
            <Text className="text-gray-400">·</Text>
            <Text className="text-gray-500 text-sm">
              {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
            </Text>
          </View>
          {post.content ? <Text className="text-gray-900 mt-1 text-base leading-5">{post.content}</Text> : null}
          {post.image ? (
            <Image source={{ uri: post.image }} className="w-full h-48 rounded-xl mt-2" resizeMode="cover" />
          ) : null}
          <View className="flex-row mt-3 gap-6">
            <TouchableOpacity className="flex-row items-center" onPress={() => onLike?.(post._id)}>
              <Feather name="heart" size={18} color="#657786" />
              <Text className="text-gray-500 ml-2">{likeCount}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
