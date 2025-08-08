import { icons } from '@/constants/icons'
import { itemsImage } from '@/constants/ItemsImage'
import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          <View className='container gap-6 py-6'>
            <View className='gap-4'>
              <Text>Profile</Text>
              <View className='flex flex-row items-center justify-between rounded-md bg-blue-700 p-6'>
                <View className=''>
                  <Image source={itemsImage.img1} className='h-9 w-9 rounded-full' />
                </View>
                <Image source={icons.search} />
              </View>
            </View>
            <View>
              <Image />
              <View>
                <Text>My Account</Text>
                <Text>Make changes to your account</Text>
              </View>
            </View>
            <View></View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
export default Profile
