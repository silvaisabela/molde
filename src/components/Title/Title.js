import React from 'react'
import { string } from 'prop-types'
import { Text, View } from 'react-native'
import { titleStyles } from './Title.style'

const propTypes = {
  weight: string,
  children: string,
  size: string
}

const Title = ({ weight = 'light', size = 'sm', children, ...props }) => (
  <View>
    <Text style={titleStyles(weight, size).text} {...props} >{children}</Text>
  </View>
)

Title.propTypes = propTypes

export { Title }
