import React from 'react'
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

interface ButtonTouchAbleOpacityProps {
  onPress?: () => void;

}
const ButtonTouchAbleOpacity = ({props}:{props: ButtonTouchAbleOpacityProps}) => {
  return (
    <TouchableOpacity  onPress={props.onPress} activeOpacity={0.7} className='text-center items-center bg-[#DDDDDD] rounded-lg'> 
      <Text className='p-4'>Click me</Text>
    </TouchableOpacity>
  )
}

export default ButtonTouchAbleOpacity