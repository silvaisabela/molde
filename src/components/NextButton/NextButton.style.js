import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const NextButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: theme.color.primary,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    elevation: 3,
    width: 140,
    height: 30,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: theme.fontWeight.regular,
    letterSpacing: 0.25,
    color: theme.fontColor.primary
  }
})

export { NextButtonStyles }