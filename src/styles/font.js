import { Dimensions } from 'react-native'
const { width } = Dimensions.get('window')

function responsiveFontSize (size) {
  // resize font for small screns
  if (width <= 375) {
    return size - 4
  }

  return size
}

export { responsiveFontSize }
