import playIcon from '@/assets/icons/play.png'
import movieDetailImg from '@/assets/items/detail.png'
import Button from '@/components/ui/button'
import Category from '@/components/ui/category'
import Description from '@/components/ui/description'
import LabelStart from '@/components/ui/label-start'
import Title from '@/components/ui/title'
import TrendingIcon from '@/components/ui/trending-icon'
import { icons } from '@/constants/icons'
import React, { useRef, useState } from 'react'
import { VideoRef } from 'react-native-video'
import MyVideo from '@/components/section/Video'
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useRouter, useLocalSearchParams } from 'expo-router'
const MovieDetail = () => {
  const { slug } = useLocalSearchParams()
  const router = useRouter()
  const [openVideo, setOpenVideo] = useState(false)
  const videoRef = useRef<VideoRef>(null)

  const WatchingVideo = () => {
    router.push(`/movies/${slug}/video`)
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1'>
        <View className='flex-1 bg-[#030014]'>
          <ScrollView>
            <View className=''>
              <Image source={movieDetailImg} className='w-full' />
              <Pressable
                onPress={WatchingVideo}
                className='absolute bottom-[-25] right-5 flex size-14 items-center justify-center rounded-full bg-white'
              >
                <Image source={playIcon} className='ml-1 h-7 w-6' />
              </Pressable>
            </View>
            <View className='container flex-1 gap-4 py-4'>
              <View className='gap-4'>
                <Title title='Squid Game 2' />
                <Category text='2024 * PG-13 * 2h 46m' />
                <View className='flex flex-row gap-2'>
                  <LabelStart numberStart='8.9/10 (200K)' />
                  <View className='flex flex-row gap-1 rounded bg-white/30 px-2 py-1'>
                    <TrendingIcon />
                    <Text className='text-white'>1</Text>
                  </View>
                </View>
              </View>
              <View className='gap-6'>
                <Text className='text-white'>Overview</Text>
                <Description text="Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits with deadly high stakes: a game that has a whopping 45.6 billion-won prize at stake." />
                <View className='flex flex-row'>
                  <View className='flex-1 gap-2'>
                    <Text className='text-white'>Release date</Text>
                    <Text className='text-[#D6C7FF]'>December 26, 2024 (Worldwide)</Text>
                  </View>
                  <View className='flex-1 gap-2'>
                    <Text className='text-white'>Status</Text>
                    <Text className='text-[#D6C7FF]'>Released</Text>
                  </View>
                </View>
                <View className='gap-2'>
                  <Text className='text-white'>Generes</Text>
                  <View className='flex flex-row gap-2'>
                    <Button title='Adventure' className='bg-white/30 py-1' onPress={() => alert('Toi la Dung')} />
                    <Button title='Action' onPress={() => alert('Toi la Dung')} className='bg-white/30 py-1' />
                    <Button title='Drama' onPress={() => alert('Toi la Dung')} className='bg-white/30 py-1' />
                  </View>
                </View>
                <View className='gap-2'>
                  <Text className='text-white'>Countries</Text>
                  <Text className='text-[#D6C7FF]'>United Stated * Canada * UAE * Hungary * Italy * New Zealand</Text>
                </View>
                <View className='flex flex-row '>
                  <View className='flex-1 gap-2'>
                    <Text className='text-white'>Budget</Text>
                    <Text className='text-[#D6C7FF]'>$21.4 million</Text>
                  </View>
                  <View className='flex-1 gap-2'>
                    <Text className='text-white'>Revenue</Text>
                    <Text className='text-[#D6C7FF]'>$900 Million</Text>
                  </View>
                </View>
                <View className='gap-2'>
                  <Text className='text-white'> Tagline</Text>
                  <Text className='text-[#D6C7FF]'>45.6 Billion Won is Child's Play</Text>
                </View>
                <View className='gap-2'>
                  <Text className='text-white'>Production Companies</Text>
                  <Text className='text-[#D6C7FF]'>
                    Legendary Entertainment * Warner Bros. Entertainment * Villeneuve Films
                  </Text>
                </View>

                <TouchableOpacity
                  className='z-50 mx-2 flex flex-row items-center justify-center rounded-lg bg-[#AB8BFF] py-3.5'
                  onPress={() => router.push('/(tabs)')}
                >
                  <Image source={icons.arrow} className='mr-1 mt-0.5 size-5 rotate-180' tintColor='#000' />
                  <Text className='text-base font-semibold text-black'>Go Back</Text>
                </TouchableOpacity>
              </View>
            </View>

            {openVideo ? (
              <View>
                <MyVideo />
              </View>
            ) : (
              ''
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default MovieDetail
