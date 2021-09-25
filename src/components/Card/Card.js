import React from 'react'
import { func, String } from 'prop-types'
import { Text, Pressable, View } from 'react-native'
import { CardStyles } from './Card.style'
import { Add, PurpleShape, YellowShape } from '../../../assets/Icons'

const propTypes = {
  onPress: func.isRequired,
  text: String,
  size: String,
  icon: String
}

const CardSizes = {
  normal: CardStyles.normal,
  small: CardStyles.small,
  medium: CardStyles.medium,
  big: CardStyles.big
}

const Card = ({ onPress, text, icon, size = 'normal', ...props }) => (
  <Pressable style={CardSizes[size]} onPress={onPress} {...props}>
    <View style={CardStyles.container} >
      {(icon === 'add')
        ? <Add style={CardStyles.icon} />
        : (icon === 'purple-shape')
            ? <PurpleShape style={CardStyles.shape} />
            : (icon === 'yellow-shape')
                ? <YellowShape style={CardStyles.shape} />
                : <YellowShape display="none"/>}
      <Text style={CardStyles.text}>{text}</Text>
    </View>
  </Pressable>
)

Card.propTypes = propTypes

export { Card }
