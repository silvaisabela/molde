import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card } from './src/components/Card/Card'

export default function App () {
  return (
    <View style={styles.container}>

      <Card size="small" text="Adicionar" icon="add"/>

      <Card text="O que é?" icon="yellow-shape"/>

      <Card size="medium" text="Suas frases" icon="purple-shape"/>

      <Card size="big"/>

      <StatusBar style="auto" />
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
