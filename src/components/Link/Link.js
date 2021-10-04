import React from 'react'
import { func, string } from 'prop-types'
import { Text, Pressable, View } from 'react-native'
import { LinkStyles } from './Link.style'

const propTypes = {
  onPress: func.isRequired,
  text: string
}

const Link = ({ onPress, text, ...props }) => (
  <Pressable style={LinkStyles.container} onPress={onPress} {...props}>
    <View>
      <Text style={LinkStyles.text}>{text}</Text>
    </View>
  </Pressable>
)

Link.propTypes = propTypes

export { Link }
