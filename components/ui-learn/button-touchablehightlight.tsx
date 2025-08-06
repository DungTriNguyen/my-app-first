import React from 'react'
import { TouchableHighlight,Text } from 'react-native'

interface ButtonTouchableHightLightProps {
  onPress: () => void;
}
const ButtonTouchableHightLight = ({props}:{props: ButtonTouchableHightLightProps}) => {
  return (
    <TouchableHighlight onPress={props.onPress} underlayColor={"#DDDDDD"} className='text-center items-center bg-[#DDDDDD] rounded-lg '>
      <Text className='p-4'>Click me</Text>
    </TouchableHighlight>
  )
}
export default ButtonTouchableHightLight