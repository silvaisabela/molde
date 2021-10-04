import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const ButtonNextStyles = StyleSheet.create({
  button: {
    backgroundColor: theme.color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    elevation: 3,
    width: 160,
    height: 40
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  text: {
    color: theme.fontColor.primary,
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.regular,
    letterSpacing: theme.letterSpacing.sm
  }
})

export { ButtonNextStyles }
