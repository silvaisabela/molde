import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const baseTitle = {
  color: theme.fontColor.primary,
  fontFamily: 'Roboto',
  letterSpacing: theme.letterSpacing.sm
}

const titleWeight = {
  light: {
    ...baseTitle,
    fontWeight: theme.fontWeight.light
  },
  regular: {
    ...baseTitle,
    fontWeight: theme.fontWeight.regular
  },
  bold: {
    ...baseTitle,
    fontWeight: theme.fontWeight.bold
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
  '6xl': {
    fontSize: theme.fontSize['6xl'],
    lineHeight: 50
  }
}

const titleStyles = (weight, size) => {
  return StyleSheet.create({ text: { ...baseTitle, ...titleWeight[weight], ...titleSize[size] } })
}

export { titleStyles }
