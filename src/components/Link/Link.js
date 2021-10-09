import React from 'react'
import { func, node } from 'prop-types'
import { Text, Pressable, View } from 'react-native'
import { LinkStyles } from './Link.style'

const propTypes = {
  onPress: func.isRequired,
  children: node
}

const Link = ({ onPress, children, ...props }) => (
  <Pressable style={LinkStyles.container} onPress={onPress} {...props}>
    <View>
      <Text style={LinkStyles.text}>{children}</Text>
    </View>
  </Pressable>
)

Link.propTypes = propTypes

export { Link }
