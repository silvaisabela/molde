import { StyleSheet, Dimensions } from 'react-native'
import theme from '../../styles/theme.style'

const baseMessage = {
  marginTop: 10,
  fontWeight: theme.fontWeight.light
}

const window = Dimensions.get('window')

const InputTextStyles = StyleSheet.create({
  containerInput: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 10,
    maxWidth: window.width,
    height: 50,
    backgroundColor: theme.color.tertiary,
    marginBottom: 5
  },
  input: {
    height: '100%',
    width: '90%',
    justifyContent: 'center',
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
