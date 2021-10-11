import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const baseTitle = {
  color: theme.fontColor.primary,
  fontFamily: 'RobotoRegular',
  letterSpacing: theme.letterSpacing.sm
}

const titleWeight = {
  light: {
    ...baseTitle,
    fontFamily: 'RobotoLight'
  },
  regular: {
    ...baseTitle,
    fontFamily: 'RobotoRegular'
  },
  bold: {
    ...baseTitle,
    fontFamily: 'RobotoBold'
  }
}

const titleSize = {
  xs: {
    fontSize: theme.fontSize.xs
  },
  sm: {
    fontSize: theme.fontSize.sm
  },
  md: {
    fontSize: theme.fontSize.md
  },
  lg: {
    fontSize: theme.fontSize.lg
  },
  xl: {
    fontSize: theme.fontSize.xl
  },
  '2xl': {
    fontSize: theme.fontSize['2xl'],
    lineHeight: 30
  },
  '3xl': {
    fontSize: theme.fontSize['3xl'],
    lineHeight: 30
  },
  '6xl': {
    fontSize: theme.fontSize['6xl'],
    lineHeight: 50
  }
}

const titleStyles = (weight, size) => {
  return StyleSheet.create({ text: { ...baseTitle, ...titleWeight[weight], ...titleSize[size] } })
}

export { titleStyles }
