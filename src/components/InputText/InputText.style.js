import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const baseMessage = {
  marginTop: 10,
  fontWeight: theme.fontWeight.light
}

const InputTextStyles = StyleSheet.create({
  container: {
    paddingLeft: 12,
    paddingRight: 12,
    borderRadius: 10,
    width: 300,
    height: 42,
    backgroundColor: theme.color.tertiary

  },
  containerInput: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'
  },
  input: {
    width: '100%',
    color: theme.fontColor.primary
  },
  error: {
    ...baseMessage,
    color: theme.color.error
  },
  default: {
    ...baseMessage
  },
  baseIcon: {
    marginLeft: 10
  }
})

export { InputTextStyles }
