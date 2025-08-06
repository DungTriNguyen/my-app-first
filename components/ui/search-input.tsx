import React from 'react'
import { Image, TextInput, View } from 'react-native'
import { icons } from '@/constants/icons'
import { twMerge } from 'tailwind-merge'
interface SearchProps {
  onPress?: () => void;
  placeholder: string;
  value?: string;
  onChangeText?: () => void;
  className?: string
}

const SearchInput = ({onPress, placeholder, value, onChangeText, className} : SearchProps) => {
  return (
     <View className={twMerge("flex-row items-center bg-[#0F0D23] rounded-full px-5 py-4",className)}>
      <Image
        source={icons.search}
        className="w-5 h-5"
        resizeMode="contain"
        tintColor="#AB8BFF"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className="flex-1 ml-2 text-white"
        placeholderTextColor="#A8B5DB"
      />
    </View>
  )
}

export default SearchInput