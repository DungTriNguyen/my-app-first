import React from 'react'
import { Text } from 'react-native'
import { twMerge } from 'tailwind-merge'
interface DescriptionProps {
  text: string
  className?: string
}

const Description = ({ text, className }: DescriptionProps) => {
  return <Text className={twMerge('text-base text-gray-400', className)}>{text}</Text>
}

export default Description
