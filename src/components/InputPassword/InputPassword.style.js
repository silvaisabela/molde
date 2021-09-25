import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const baseMessage = {
  fontWeight: theme.fontWeight.light,
  marginLeft: 5,
  marginTop: 5
}

const InputPasswordStyles = StyleSheet.create({
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
  },
  error: {
    ...baseMessage,
    fontWeight: theme.fontWeight.light,
    marginLeft: 5,
    marginTop: 5,
    color: theme.color.error
  },
  default: {
    ...baseMessage
  }

})

export { InputPasswordStyles }
