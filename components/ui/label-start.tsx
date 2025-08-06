import React from 'react'
import { View, Text, Image } from 'react-native';
import { twMerge } from 'tailwind-merge';
import { icons } from '@/constants/icons';

export interface LabelStartProps {
  numberStart: string;
className?: string;
}

const LabelStart = ({numberStart, className} : LabelStartProps) => {
  return (
    <View className={twMerge("flex flex-row justify-center items-center bg-white/30 p-1 blur-4 rounded-[3px] ", className)}> 
        <Image source={icons.star} className='w-2 h-2'/>
        <Text className=' text-white text-[8px] font-bold'>
            {numberStart}
        </Text>
    </View>
  )
}

export default LabelStart