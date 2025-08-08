import LatestMovie from '@/components/section/LatestMovie'
import SlideMovie from '@/components/section/PopularMovie'
import SearchInput from '@/components/ui/search-input'
import { icons } from '@/constants/icons'
import { images } from '@/constants/images'
import { Image, ScrollView, View } from 'react-native'
export default function TabOneScreen() {
  return (
    // <ToDoList/>
    <View className='flex-1 bg-[#030014]'>
      <Image source={images.bg} className='absolute z-0 w-full' resizeMode='cover' />
      <ScrollView className='flex-1'>
        <Image source={icons.logo} className='mx-auto mb-5 mt-20 h-10 w-12 ' />
        <SearchInput placeholder='Search through 300+ movies online' />
        <SlideMovie />
        <LatestMovie />
      </ScrollView>
    </View>
  )
}
