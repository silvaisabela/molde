import React from 'react'
import { string } from 'prop-types'
import { Text, View } from 'react-native'
import { titleStyles } from './Title.style'

const propTypes = {
  weight: string,
  text: string,
  size: string
}

const Title = ({ weight = 'light', size = 'sm', text }) => (
  <View>
    <Text style={titleStyles(weight, size).text}>{text}</Text>
  </View>
)

Title.propTypes = propTypes

export { Title }
