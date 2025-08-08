import { Pressable, Text } from 'react-native'

interface ButtonPressableProps {
  onPress: () => void
}

const ButtonPressable = ({ onPress }: ButtonPressableProps) => {
  return (
    <Pressable
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      className='items-center rounded bg-[#DDDDDD] p-4 text-center'
    >
      <Text className='text-white'>Click me</Text>
    </Pressable>
  )
}

export default ButtonPressable
