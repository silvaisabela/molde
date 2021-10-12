import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const PhraseBoxStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-start',
    height: 30,
    padding: 12,
    borderWidth: 1,
    borderColor: theme.backgroungColor.primary,
    borderRadius: 50
  },
  text: {
    fontSize: theme.fontSize.md,
    letterSpacing: theme.letterSpacing.sm,
    fontWeight: theme.fontWeight.regular,
    color: theme.fontColor.primary,
    marginRight: 5
  }
})

export { PhraseBoxStyles }
