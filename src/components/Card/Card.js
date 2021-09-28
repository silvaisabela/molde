import React from 'react'
import { func, String } from 'prop-types'
import { Text, Pressable, View } from 'react-native'
import { CardStyles } from './Card.style'
import { Add, PurpleShape, YellowShape } from '../../../assets/Icons'

const propTypes = {
  onPress: func,
  title: String,
  size: String,
  icon: String,
  type: String,
  paragraph: String
}

const CardSizes = {
  regular: CardStyles.regular,
  small: CardStyles.small,
  medium: CardStyles.medium,
  big: CardStyles.big
}

const TitleType = {
  regular: CardStyles.title,
  link: CardStyles.link
}

const ContainerType = {
  regular: CardStyles.columnContainer,
  small: CardStyles.rowContainer,
  medium: CardStyles.columnContainer,
  big: CardStyles.rowContainer
}

const Card = ({ onPress, type, title, icon, paragraph, size = 'regular', ...props }) => (
  <Pressable style={CardSizes[size]} onPress={onPress} {...props}>
    <View style={ContainerType[size]} >
      {(icon === 'add')
        ? <Add style={CardStyles.icon} />
        : (icon === 'purple-shape')
            ? <PurpleShape style={CardStyles.shape} />
            : (icon === 'yellow-shape')
                ? <YellowShape style={CardStyles.shape} />
                : <YellowShape display="none"/>}
      {paragraph ? <Text style={CardStyles.paragraph}>{paragraph}</Text> : null }
      {title ? <Text style={TitleType[type]}>{title}</Text> : null }
    </View>
  </Pressable>
)

Card.propTypes = propTypes

export { Card }
