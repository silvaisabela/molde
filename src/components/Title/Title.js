import React from 'react'
import { String } from 'prop-types'
import { Text, View } from 'react-native'
import { TitleStyles } from './Title.style'

const propTypes = {
  type: String,
  text: String
}

const Title = ({ type = 'light', text, ...props }) => (
    <View>
        <Text style={TitleStyles[type]}>{text}</Text>
    </View>
)

Title.propTypes = propTypes

export { Title }
