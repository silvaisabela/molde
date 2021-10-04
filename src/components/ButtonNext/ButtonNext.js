import React from 'react'
import { func, string, boolean } from 'prop-types'
import { Text, Pressable, View } from 'react-native'
import { ButtonNextStyles } from './ButtonNext.style'
import { ArrowRight } from '../../../assets/Icons'

const propTypes = {
  onPress: func,
  text: string,
  arrow: boolean
}

const ButtonNext = ({ onPress, text, arrow = true, ...props }) => (
  <Pressable style={ButtonNextStyles.button} onPress={onPress} {...props}>
    <View style={ButtonNextStyles.container} >
      <Text style={ButtonNextStyles.text}>{text}</Text>
      {arrow ? <ArrowRight /> : null}
    </View>
  </Pressable>
)

ButtonNext.propTypes = propTypes

export { ButtonNext }
