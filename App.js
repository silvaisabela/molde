import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card } from './src/components/Card/Card'

export default function App () {
  return (
    <View style={styles.container}>

      <Card type="regular" size="small" title="Adicionar" icon="add"/>

      <Card type="regular" title="O que é?" icon="yellow-shape" text=""/>

      <Card type="regular" size="medium" title="Suas frases" icon="purple-shape"/>

      <Card type="link" size="big" title="Quero conhecer!" paragraph="Aprenda código morse e conheça uma nova forma de ouvir quando enviarmos o que identificamos para o seu dispositivo."/>

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
