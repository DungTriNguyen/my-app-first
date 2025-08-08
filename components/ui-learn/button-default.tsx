import React from 'react'
import { Button } from 'react-native'

interface ButtonProps {
  onPress: () => void
  title: string
}

const ButtonComponent = ({ props }: { props: ButtonProps }) => {
  return <Button onPress={props.onPress} title={props.title} />
}

export default ButtonComponent
