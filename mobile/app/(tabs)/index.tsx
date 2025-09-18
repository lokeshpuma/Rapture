import SignOutButton from '@/components/SignOutButton';
import { SafeAreaView } from 'react-native-safe-area-context';

import { View, Text } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      
      <Text className="text-black">HomeScreen</Text>
        <SignOutButton />
    </SafeAreaView>
  );
};

export default HomeScreen;