import React from 'react'
import { TouchableNativeFeedback, Text, Keyboard } from 'react-native'

interface ButtonTouchAbleWithoutFeedbackProps {
  onPress: () => void
}
const ButtonTouchAbleWithoutFeedback = ({ props }: { props: ButtonTouchAbleWithoutFeedbackProps }) => {
  return (
    <TouchableNativeFeedback
      onPress={props.onPress}
      className='items-center rounded-lg bg-[#DDDDDD] text-center'
      onPressIn={() => Keyboard.dismiss()}
    >
      <Text className='p-4'>Click me</Text>
    </TouchableNativeFeedback>
  )
}

export default ButtonTouchAbleWithoutFeedback
