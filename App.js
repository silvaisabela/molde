import * as React from 'react'
import { useFonts } from 'expo-font'
import { Signin } from './src/pages/Signin/Signin'
import { Welcome } from './src/pages/Welcome/Welcome'

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
      <Signin/>
  )
}
