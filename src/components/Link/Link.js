import React from 'react'
import { func, String, Boolean } from 'prop-types'
import { Text, Pressable, View } from 'react-native'
import { LinkStyles } from './Link.style'
import { ArrowLeft, Plus } from '../../../assets/Icons'

const propTypes = {
  onPress: func.isRequired,
  text: String,
  type: String,

}

const linkThemes = {
  tertiary: LinkStyles.linkTertiary
}

const Link = ({ onPress, text = "Já tenho uma conta", type = 'primary', ...props }) => (
  <Pressable style={linkThemes[type]} onPress={onPress} {...props}>
    <View>
    <Text style={LinkStyles.text}>{text}</Text>
    </View>
  </Pressable>
)

Link.propTypes = propTypes

export { Link }
