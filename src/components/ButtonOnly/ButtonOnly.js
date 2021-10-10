import React from 'react'
import { func, string } from 'prop-types'
import { Pressable, View } from 'react-native'
import { ButtonOnlyStyles } from './ButtonOnly.style'
import { ArrowLeft, Close } from '../../../assets/Icons'

const propTypes = {
  onPress: func,
  type: string
}

const ButtonOnly = ({ onPress, type, ...props }) => (
  <Pressable style={ButtonOnlyStyles.button} onPress={onPress} {...props}>
    <View style={ButtonOnlyStyles.container} >
      {(type === 'close') ? <Close /> : <ArrowLeft/>}
    </View>
  </Pressable>
)

ButtonOnly.propTypes = propTypes

export { ButtonOnly }
