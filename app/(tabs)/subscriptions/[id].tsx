import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from "expo-router";

const subscriptionDetails = () => {
  const {id} = useLocalSearchParams<{ id: string }>() 
  return (
    <View>
      <Text>Subscription Details: {id}</Text>
    </View>
  )
}

export default subscriptionDetails