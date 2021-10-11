import * as React from 'react'
import { useFonts } from 'expo-font'
import { SwitchButton } from './src/components/Switch'

export default function App () {
  const [loaded] = useFonts({
    Roboto: require('./assets/Fonts/Roboto-Regular.ttf'),
    RobotoBold: require('./assets/Fonts/Roboto-Bold.ttf'),
    RobotoLight: require('./assets/Fonts/Roboto-Light.ttf')
  })

  if (!loaded) {
    return null
  }
  return (
    < SwitchButton /> 
  )
}
