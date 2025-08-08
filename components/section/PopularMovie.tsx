import { images } from '@/constants/images'
import { itemsImage } from '@/constants/ItemsImage'
import MaskedView from '@react-native-masked-view/masked-view'
import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import Title from '../ui/title'
import Category from '../ui/category'
import LabelStart from '../ui/label-start'
import TitleContent from '../ui/title-content'
import { Link } from 'expo-router'
const items = [
  { id: 1, title: 'Movie 1', category: 'Action • Movie', start: '4.6', img: itemsImage.img1 },
  { id: 2, title: 'Movie 2', category: 'Action • Movie', start: '4.6', img: itemsImage.img2 },
  { id: 3, title: 'Movie 3', category: 'Action • Movie', start: '4.6', img: itemsImage.img3 },
  { id: 4, title: 'Movie 4', category: 'Action • Movie', start: '4.6', img: itemsImage.img4 },
  { id: 5, title: 'Movie 5', category: 'Action • Movie', start: '4.6', img: itemsImage.img5 },
]

const SlideMovie = () => {
  return (
    <View className='container py-4'>
      <TitleContent title='Popular movies' className='mb-[14px]' />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        contentContainerClassName='gap-8'
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <Link href='/movie/detail'>
            <View className='flex flex-col gap-2'>
              <View>
                <Image source={item.img} className='h-48 w-32 rounded-lg' resizeMode='cover' />
                <LabelStart numberStart={item.start} className='absolute right-0 top-0 m-1 ' />
                <View className='absolute -left-6 bottom-0 rounded-full px-2'>
                  <MaskedView maskElement={<Text className='text-6xl font-bold text-white'>{item.id}</Text>}>
                    <Image source={images.rankingGradient} className='size-[41px]' resizeMode='cover' />
                  </MaskedView>
                </View>
              </View>
              <Title title={item.title} />
              <Category text={item.category} />
            </View>
          </Link>
        )}
      ></FlatList>
    </View>
  )
}

export default SlideMovie
