import { Image, ImageBackground, Text, View } from 'react-native'

import { images } from '@/constants/images'

function TabIcon({ focused, icon, title }: any) {
  if (focused) {
    return (
      <ImageBackground
        source={images.highlight}
        className="flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden"
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
