import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const baseCard = {
  borderRadius: 10,
  elevation: 3,
  backgroundColor: theme.color.black,
  height: 114,
  padding: 12,
  margin: 10 // TIRAR DEPOIS
}

const CardStyles = StyleSheet.create({
  normal: {
    ...baseCard,
    width: 157
  },
  small: {
    ...baseCard,
    width: 98
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
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  },
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: theme.fontWeight.regular,
    letterSpacing: 0.25,
    color: theme.fontColor.invert
  },
  icon: {
    alignSelf: 'center',
    top: '30%'
  },
  shape: {
    alignSelf: 'flex-end',
    marginTop: -12
  }
})

export { CardStyles }
