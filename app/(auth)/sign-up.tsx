import { Text, View } from 'react-native'
import { Link } from 'expo-router'

const SignUp = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold text-black">SignUp</Text>
      <Link href="/(auth)/sign-in" className="mt-4 text-lg text-blue-500 p-4">
        Already have an account? Sign in
      </Link>
    </View>
  )
}

export default SignUp
      