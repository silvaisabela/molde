import React from 'react'
import { func, String } from 'prop-types'
import { Pressable, View } from 'react-native'
import { BackButtonStyles } from './BackButton.style'
import { Back, Close } from '../../../assets/Icons'

const propTypes = {
  onPress: func,
  type: String
}

const BackButton = ({ onPress, type, ...props }) => (
  <Pressable style={BackButtonStyles.button} onPress={onPress} {...props}>
    <View style={BackButtonStyles.container} >
      {(type === 'close') ? <Close /> : <Back />}
    </View>
  </Pressable>
)

BackButton.propTypes = propTypes

export { BackButton }
