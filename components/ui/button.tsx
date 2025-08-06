import React from 'react'
import { Pressable, Text } from 'react-native'
import { twMerge } from 'tailwind-merge';
import Title from './title';
import type { TitleProps } from './title';

interface ButtonProps {
  onPress: () => void;
  title: string;
  className?: string;
  TitleProps: TitleProps;
}

const Button = ({title, onPress, className} : ButtonProps) => {
  return (
    <Pressable className={twMerge("bg-blue-500 p-4 rounded-lg",className)} onPress={onPress}>
        <Title title={title}/>
    </Pressable>
  )
}

export default Button