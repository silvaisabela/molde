import React from 'react'
import { string, node } from 'prop-types'
import { Text, View } from 'react-native'
import { titleStyles } from './Title.style'

const propTypes = {
  weight: string,
  size: string,
  children: node
}

const Title = ({ weight = 'light', size = 'sm', children }) => (
  <View>
    <Text style={titleStyles(weight, size).text}>{children}</Text>
  </View>
)

Title.propTypes = propTypes

export { Title }
