import React from 'react'
import { func, string, node, bool } from 'prop-types'
import { Text, Pressable, View } from 'react-native'
import { buttonThemes, ButtonStyles } from './Button.style'

const propTypes = {
  onPress: func.isRequired,
  children: node,
  type: string,
  icon: node,
  large: bool
}

const Button = ({
  children,
  onPress,
  icon,
  type = 'primary',
  large = false,
  ...props
}) => {
  const theme = buttonThemes(large)
  return (
    <Pressable style={theme[type]} onPress={onPress} {...props}>
      <View style={ButtonStyles.container} >
        <Text style={ButtonStyles.text}>{children}</Text>
        {icon}
      </View>
    </Pressable>
  )
}

Button.propTypes = propTypes

export { Button }
