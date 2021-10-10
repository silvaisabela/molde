import { StyleSheet, Dimensions, Platform } from 'react-native'
import theme from '../../styles/theme.style'

const window = Dimensions.get('window')

const titleDecorationTop = window.width <= 375 ? 104 : 85

const innerContainerHeight = Platform.OS === 'ios'
  ? window.height - (window.height / 4)
  : window.height - (window.height / 5)

const SigninStyles = StyleSheet.create({
  safe: {
    backgroundColor: theme.backgroungColor.primary,
    flex: 1
  },
  keyboard: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  backgroundIcon: {
    zIndex: 1,
    width: window.width,
    position: 'absolute',
    top: 0
  },
  innerContainer: {
    backgroundColor: theme.backgroungColor.secondary,
    width: window.width,
    height: innerContainerHeight,
    borderWidth: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    zIndex: 2
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  containerTitle: {
    width: 220,
    marginTop: 50
  },
  containerInput: {
    marginTop: 42,
    height: 120,
    justifyContent: 'space-between'
  },
  link: {
    alignItems: 'center',
    marginTop: 10
  },
  buttonContainer: {
    justifyContent: 'space-between'
  },
  containerButton: {
    marginTop: 40
  }
})

export { SigninStyles }
