import { StyleSheet, Dimensions } from 'react-native'

const window = Dimensions.get('window')

const AppBarStyle = StyleSheet.create({
  header: {
    maxWidth: window.width,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

export { AppBarStyle }
