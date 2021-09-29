import React from 'react'
import { func, String, Boolean } from 'prop-types'
import { Text, Pressable, View } from 'react-native'
import { NextButtonStyles } from './NextButton.style'
import { ArrowRight } from '../../../assets/Icons/ArrowRight'

const propTypes = {
  onPress: func,
  text: String,
  arrow: Boolean
}

const NextButton = ({ onPress, text, arrow = true, ...props }) => (
  <Pressable style={NextButtonStyles.button} onPress={onPress} {...props}>
    <View style={NextButtonStyles.container} >
      <Text style={NextButtonStyles.text}>{text}</Text>
      {arrow ? <ArrowRight /> : null}
    </View>
  </Pressable>
)

NextButton.propTypes = propTypes

export { NextButton }
