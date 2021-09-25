import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const InputTextStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 10,
    width: 300,
    height: 42,
    backgroundColor: theme.color.tertiary
  },
  textInput: {
    width: 240,
    color: theme.fontColor.primary
  }
})

export { InputTextStyles }
