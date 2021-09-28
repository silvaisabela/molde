import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const baseCard = {
  backgroundColor: theme.color.black,
  borderRadius: 10,
  elevation: 3,
  height: 114,
  padding: 12,
  paddingTop: 0,
  margin: 10 // TIRAR DEPOIS
}

const baseText = {
  fontSize: 18,
  lineHeight: 21,
  letterSpacing: 0.25
}

const baseContainer = {
  height: '100%'
}

const CardStyles = StyleSheet.create({
  regular: {
    ...baseCard,
    width: 157
  },
  small: {
    ...baseCard,
    width: 97
  },
  medium: {
    ...baseCard,
    width: 227
  },
  big: {
    ...baseCard,
    height: 167,
    width: 335
  },
  columnContainer: {
    ...baseContainer,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  rowContainer: {
    ...baseContainer,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  title: {
    ...baseText,
    color: theme.fontColor.invert,
    fontWeight: theme.fontWeight.regular
  },
  link: {
    ...baseText,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.secondary,
    alignSelf: 'flex-end'
  },
  icon: {
    marginBottom: 20
  },
  shape: {
    alignSelf: 'flex-end'
  },
  paragraph: {
    ...baseText,
    fontWeight: theme.fontWeight.light,
    color: theme.fontColor.invert,
    marginBottom: 30
  }
})

export { CardStyles }
