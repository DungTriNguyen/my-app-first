import { video } from '@/constants/video'
import { VideoView, useVideoPlayer } from 'expo-video'
import { View } from 'react-native'

import { useRef } from 'react'

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
    <View>
      <VideoView player={playerRef.current} style={{ width: '100%', height: 300 }} />
    </View>
  )
}
