import React from 'react'
import { Image, TextInput, View } from 'react-native'
import { icons } from '@/constants/icons'
import { twMerge } from 'tailwind-merge'
interface SearchProps {
  placeholder: string
  value?: string
  onChangeText?: () => void
  className?: string
}

const SearchInput = ({ placeholder, value, onChangeText, className }: SearchProps) => {
  return (
    <View className={twMerge('flex-row items-center rounded-full bg-[#0F0D23] px-5 py-4', className)}>
      <Image source={icons.search} className='h-5 w-5' resizeMode='contain' tintColor='#AB8BFF' />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        className='ml-2 flex-1 text-white'
        placeholderTextColor='#A8B5DB'
        keyboardType='numeric'
      />
    </View>
  )
}

export default SearchInput
