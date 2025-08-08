import { Image, ImageBackground, Text, View } from 'react-native'

import { images } from '@/constants/images'

function TabIcon({ focused, icon, title }: any) {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className='mt-4 flex min-h-16 w-full min-w-[112px] flex-1 flex-row items-center justify-center overflow-hidden rounded-full'
      >
        <Image source={icon} tintColor='#151312' className='size-5' />
        <Text className='text-secondary ml-2 text-base font-semibold'>{title}</Text>
      </ImageBackground>
    )
  }

  return (
    <View className='mt-4 size-full items-center justify-center rounded-full'>
      <Image source={icon} tintColor='#A8B5DB' className='size-5' />
    </View>
  )
}
export default TabIcon
