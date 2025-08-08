import { itemsImage } from '@/constants/ItemsImage'
import { video } from '@/constants/video'
import { VideoView, useVideoPlayer } from 'expo-video'
import { FlatList, Image, Pressable, Text, View } from 'react-native'

import { useRef } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const dataComment = [
  {
    id: 1,
    avatar: itemsImage.img1,
    comment: 'Phim như cứt',
  },
  {
    id: 2,
    avatar: itemsImage.img2,
    comment: 'Phim dễ ngủ',
  },
  {
    id: 3,
    avatar: itemsImage.img3,
    comment: 'Nhân vật chính cuối phim chết',
  },
  {
    id: 4,
    avatar: itemsImage.img4,
    comment: '60p vô vị',
  },
  {
    id: 5,
    avatar: itemsImage.img5,
    comment: 'Bô cái thằng đạo diễn',
  },
  {
    id: 6,
    avatar: itemsImage.img6,
    comment: 'Tổ sư chúng m',
  },
]

export default function MyVideo() {
  const playerRef = useRef<any>(null)

  useVideoPlayer(video.videoTest, player => {
    if (player) {
      player.loop = true
      player.staysActiveInBackground = true
      player.play()
      playerRef.current = player
    }
  })
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 bg-[#030014]'>
        <View className='flex-1'>
          <VideoView
            player={playerRef.current}
            style={{ width: '100%', height: 300 }}
            allowsFullscreen
            allowsPictureInPicture
            startsPictureInPictureAutomatically
          />
          <View className='container items-center gap-6'>
            <Pressable
              className='w-full rounded-2xl bg-blue-600 py-4'
              onPress={() => {
                playerRef.current?.play()
              }}
            >
              <Text className=' text-center font-semibold text-white'>Play</Text>
            </Pressable>
            <Pressable
              className='px-2 py-2'
              onPress={() => {
                playerRef.current?.pause()
              }}
            >
              <Text className='text-white'>Pause</Text>
            </Pressable>
          </View>
          <View className='flex-1 gap-6'>
            <View className='gap-4'>
              <Text className='text-white'>Tập film</Text>
              {/* <FlatList
        keyExtractor={}
        data={}
        renderItem={}
        /> */}
            </View>
            <View className='gap-4 flex-1'>
              <Text className='text-white'>Comments</Text>
              <FlatList
                keyExtractor={dataComment => dataComment.id + ''}
                data={dataComment}
                className='gap-4'
                contentContainerStyle={{gap: 24}}
                renderItem={({ item }) => (
                  <View className='flex-row gap-4'>
                    <View className='rounded-full'><Image source={item.avatar} className='w-8 h-8 rounded-full '/></View>
                    <View>
                      <Text className='text-white'>{item.comment}</Text>
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
