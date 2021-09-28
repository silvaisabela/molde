import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const baseTitle = {
  fontSize: 36,
  color: theme.fontColor.primary,
  fontFamily: 'Roboto'
}

const TitleStyles = StyleSheet.create({
  light: {
    ...baseTitle,
    fontWeight: theme.fontWeight.light
  },
  bold: {
    ...baseTitle,
    fontWeight: theme.fontWeight.bold
  },
  bigger: {
    ...baseTitle,
    fontSize: 40,
    fontWeight: theme.fontWeight.bold
  }
})

export { TitleStyles }
