import { StyleSheet, Dimensions } from 'react-native'
import theme from '../../styles/theme.style'

const baseMessage = {
  fontWeight: theme.fontWeight.light,
  marginLeft: 5

}

const window = Dimensions.get('window')

const InputPasswordStyles = StyleSheet.create({
  container: {
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
  textInput: {
    height: '100%',
    width: '90%',
    justifyContent: 'center',
    color: theme.fontColor.primary
  },
  error: {
    ...baseMessage,
    fontWeight: theme.fontWeight.light,
    color: theme.color.error
  },
  default: {
    ...baseMessage
  },
  containerIcon: {
    height: '100%',
    justifyContent: 'center'
  }

})

export { InputPasswordStyles }
