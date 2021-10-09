import React from 'react'
import { func, String, node } from 'prop-types'
import { Pressable, View } from 'react-native'
import { CardStyles } from './Card.style'
import { Add, PurpleShape, YellowShape } from '../../../assets/Icons'

const propTypes = {
  onPress: func,
  size: String,
  icon: String,
  children: node
}

const CardSizes = {
  regular: CardStyles.regular,
  small: CardStyles.small,
  medium: CardStyles.medium,
  large: CardStyles.large
}

const ContainerType = {
  small: CardStyles.rowContainer,
  regular: CardStyles.columnContainer,
  medium: CardStyles.columnContainer,
  large: CardStyles.rowContainer
}

const IconType = {
  small: <Add style={CardStyles.icon} />,
  regular: <YellowShape style={CardStyles.shape} />,
  medium: <PurpleShape style={CardStyles.shape} />
}

const Card = ({
  onPress,
  children,
  size = 'regular',
  ...props
}) => (
  <Pressable style={CardSizes[size]} onPress={onPress} {...props}>
    <View style={ContainerType[size]}>
      {IconType[size] && IconType[size]}
      {children}
    </View>
  </Pressable>
)

Card.propTypes = propTypes

export { Card }
