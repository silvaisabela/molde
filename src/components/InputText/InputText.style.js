import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const InputTextStyles = StyleSheet.create({
  inputText: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    width: 300,
    height: 42,
    backgroundColor: theme.color.tertiary
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    position: 'absolute',
    right: 12
  }
})

export { InputTextStyles }
