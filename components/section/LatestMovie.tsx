import { itemsImage } from '@/constants/ItemsImage'
import React, { useEffect, useState } from 'react'
import { FlatList, View, Image } from 'react-native'
import TitleContent from '../ui/title-content'
import Category from '../ui/category'
import Title from '../ui/title'
import LabelStart from '../ui/label-start'
import { Link } from 'expo-router'
import { getListFilm } from '@/services/productService'
import { ENV } from '@/configs/env'
import MovieCard from './MovieCard'

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


const LatestMovie = ({latestMovie}: {latestMovie: Movie[]}) => {
  return (
    <View className='container mb-[100px]'>
      <TitleContent title='Latest movies' className='mb-[14px]'/>
      <FlatList
        data={latestMovie}
        numColumns={3}
        showsHorizontalScrollIndicator={false}
        contentContainerClassName='gap-6'
        scrollEnabled={false}
        keyExtractor={item => item.id + ''}
        columnWrapperClassName='gap-4'
        renderItem={({ item }) => (
          <MovieCard item={item} />
        )}
      ></FlatList>
    </View>
  )
}

export default LatestMovie
