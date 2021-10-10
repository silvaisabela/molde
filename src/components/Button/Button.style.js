import { StyleSheet, Dimensions } from 'react-native'
import theme from '../../styles/theme.style'

const window = Dimensions.get('window')

const baseButton = (large) => {
  return {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    elevation: 3,
    maxWidth: large ? window.width : '40%',
    height: 42
  }
}

const ButtonStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: theme.fontSize.sm,
    fontWeight: theme.fontWeight.regular,
    letterSpacing: theme.letterSpacing.sm,
    color: theme.fontColor.primary,
    marginRight: 16
  }
})

const buttonThemes = (large) => {
  const base = baseButton(large)
  return {
    primary: {
      ...base,
      backgroundColor: theme.color.primary
    },
    secondary: {
      ...base,
      backgroundColor: theme.color.secondary
    },
    tertiary: {
      ...base,
      backgroundColor: theme.color.tertiary
    }
  }
}

export { ButtonStyles, buttonThemes }
