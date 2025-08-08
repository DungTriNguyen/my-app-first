import React from 'react'
import { Linking, Text, View } from 'react-native'

const LinkingComponent = () => {
  const openLink = () => {
    Linking.openURL('https://reactnative.dev/docs/linking')
  }
  return (
    <View className='flex-1 items-center justify-center bg-[#fb9b43]'>
      <Text onPress={openLink} className='p-4 text-blue-500 underline'>
        Linking react native documentation
      </Text>
    </View>
  )
}

export default LinkingComponent
