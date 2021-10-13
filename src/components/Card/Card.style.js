import { StyleSheet } from 'react-native'
import theme from '../../styles/theme.style'

const baseCard = {
  backgroundColor: theme.fontColor.primary,
  borderRadius: 10,
  elevation: 3,
  height: 114,
  padding: 12,
  paddingTop: 0
}

const baseContainer = {
  height: '100%'
}

const CardStyles = StyleSheet.create({
  regular: {
    ...baseCard,
    width: 157
  },
  small: {
    ...baseCard,
    width: 97
  },
  medium: {
    ...baseCard,
    width: 227
  },
  large: {
    ...baseCard,
    height: 167,
    width: 335
  },
  columnContainer: {
    ...baseContainer,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  rowContainer: {
    ...baseContainer,
    justifyContent: 'flex-end'
  },
  icon: {
    marginBottom: 20,
    alignSelf: 'center'
  },
  shape: {
    alignSelf: 'flex-end'
  }
})

export { CardStyles }
