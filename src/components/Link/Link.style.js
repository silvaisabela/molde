import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const baseLink = {
  alignItems: 'center',
  justifyContent: 'center',
  padding: 12,
  borderRadius: 10,
  elevation: 3,
  width: 300
}

const LinkStyles = StyleSheet.create({
  
  text: {
    fontSize: 18,
    lineHeight: 21,
    fontWeight: theme.fontWeight.regular,
    letterSpacing: 0.25,
    color: theme.fontColor.primary
  }
})

export { LinkStyles }
