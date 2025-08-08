import React from 'react'
import { View, Text, Image } from 'react-native'
import { twMerge } from 'tailwind-merge'
import { icons } from '@/constants/icons'

export interface LabelStartProps {
  numberStart: string
  className?: string
}

const LabelStart = ({ numberStart, className }: LabelStartProps) => {
  return (
    <View
      className={twMerge('blur-4 flex flex-row items-center justify-center rounded-[3px] bg-white/30 p-1 ', className)}
    >
      <Image source={icons.star} className='h-2 w-2' />
      <Text className=' text-[8px] font-bold text-white'>{numberStart}</Text>
    </View>
  )
}

export default LabelStart
