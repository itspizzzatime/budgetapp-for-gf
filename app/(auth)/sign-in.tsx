import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const SignIn = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold text-black">SignIn</Text>
      <Link href="/(auth)/sign-up" className="mt-4 text-lg text-blue-500 p-4">
        Create an account
      </Link>
    </View>
  )
}

export default SignIn