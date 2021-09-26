import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { InputText } from './src/components/InputText/InputText'

export default function App () {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputText />
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
