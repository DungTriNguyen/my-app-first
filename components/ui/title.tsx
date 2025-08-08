import React from 'react'
import { Text, View } from 'react-native'
import { twMerge } from 'tailwind-merge'

export interface TitleProps {
  title: string
  className?: string
}

const Title = ({ title, className }: TitleProps) => {
  return <Text className={twMerge('text-[12px] font-bold text-white', className)}>{title}</Text>
}

export default Title
