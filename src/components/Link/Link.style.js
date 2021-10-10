import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const LinkStyles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: 'transparent'
  },
  text: {
    fontSize: theme.fontSize.md,
    letterSpacing: theme.letterSpacing.sm,
    fontWeight: theme.fontWeight.regular,
    color: theme.fontColor.primary
  }
})

export { LinkStyles }
