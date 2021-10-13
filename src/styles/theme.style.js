import { responsiveFontSize } from './font'

export default {
  fontWeight: {
    light: '300',
    regular: '400',
    bold: '700'
  },
  fontSize: {
    xs: responsiveFontSize(12),
    sm: responsiveFontSize(14),
    md: responsiveFontSize(16),
    lg: responsiveFontSize(18),
    xl: responsiveFontSize(20),
    '2xl': responsiveFontSize(24),
    '3xl': responsiveFontSize(28),
    '6xl': responsiveFontSize(40)
  },
  letterSpacing: {
    xs: 0.3,
    sm: 0.5,
    md: 1.5
  },
  lineHeight: {
    xs: 16,
    sm: 20,
    md: 24,
    lg: 26,
    xl: 28,
    '2xl': 32,
    '3xl': 36
  },
  fontColor: {
    primary: '#231F20',
    invert: '#FFFFFF'
  },
  color: {
    primary: '#2DC1A6',
    secondary: '#7963FF',
    tertiary: '#F4F4F4',
    black: '#231F20',
    error: '#DC3838'
  },
  backgroungColor: {
    primary: '#231F20',
    secondary: '#FFFFFF'
  }
}
