import { itemsImage } from '@/constants/ItemsImage'
import React from 'react'
import { FlatList, View, Image } from 'react-native'
import TitleContent from '../ui/title-content'
import Category from '../ui/category'
import Title from '../ui/title'
import LabelStart from '../ui/label-start'
import { Link } from 'expo-router'

const items = [
  {
    id: 1,
    title: 'Movie 6',
    category: 'Action • Movie',
    start: '4.6',
    img: itemsImage.img6,
  },
  {
    id: 2,
    title: 'Movie 7',
    category: 'Action • Movie',
    start: '4.6',
    img: itemsImage.img7,
  },
  {
    id: 3,
    title: 'Movie 8',
    category: 'Action • Movie',
    start: '4.6',
    img: itemsImage.img8,
  },
  {
    id: 4,
    title: 'Movie 9',
    category: 'Action • Movie',
    start: '4.6',
    img: itemsImage.img9,
  },
  {
    id: 5,
    title: 'Movie 10',
    category: 'Action • Movie',
    start: '4.6',
    img: itemsImage.img10,
  },
  {
    id: 1,
    title: 'Movie 11',
    category: 'Action • Movie',
    start: '4.6',
    img: itemsImage.img11,
  },
  {
    id: 2,
    title: 'Movie 2',
    category: 'Action • Movie',
    start: '4.6',
    img: itemsImage.img2,
  },
  {
    id: 3,
    title: 'Movie 3',
    category: 'Action • Movie',
    start: '4.6',
    img: itemsImage.img3,
  },
  {
    id: 4,
    title: 'Movie 4',
    category: 'Action • Movie',
    start: '4.6',
    img: itemsImage.img4,
  },
  {
    id: 5,
    title: 'Movie 5',
    category: 'Action • Movie',
    start: '4.6',
    img: itemsImage.img5,
  },
]
const LatestMovie = () => {
  return (
    <View className='container mb-[100px]'>
      <TitleContent title='Latest movies' />
      <FlatList
        data={items}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName='gap-6'
        scrollEnabled={false}
        keyExtractor={item => item.id + ''}
        columnWrapperClassName='gap-4'
        renderItem={({ item }) => (
          <Link href={`/movie/detail`}>
            <View className='flex flex-col gap-2'>
              <View>
                <Image source={item.img} className='h-48 w-32 rounded-lg' resizeMode='cover' />
                <View className='absolute -left-6 bottom-0 rounded-full px-2'></View>
              </View>
              <Title title={item.title} />
              <LabelStart numberStart={item.start} />
              <Category text={item.category} />
            </View>
          </Link>
        )}
      ></FlatList>
    </View>
  )
}

export default LatestMovie
