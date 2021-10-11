import { StyleSheet, Dimensions, Platform } from 'react-native'
import theme from '../../styles/theme.style'

const window = Dimensions.get('window')

const signinLayoutStyles = (scale) => {
  const innerContainerHeight = Platform.OS === 'ios'
    ? window.height - (window.height / scale - 1)
    : window.height - (window.height / scale)

  return StyleSheet.create({
    safe: {
      backgroundColor: theme.backgroungColor.primary,
      flex: 1
    },
    keyboard: {
      flex: 1
    },
    scroll: {
      flexGrow: 1,
      justifyContent: 'center'
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
    }
  })
}
export { signinLayoutStyles }
