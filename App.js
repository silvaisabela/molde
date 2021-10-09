import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { Card } from './src/components/Card/Card'
import { Title } from './src/components/Title/Title'
import { Link } from './src/components/Link/Link'
import theme from './src/styles/theme.style'

export default function App () {
  return (
    <View style={styles.container}>
      <Card size="small">
        <Title style={styles.title} >My card</Title>
        <Link text="test" />
      </Card>
      <StatusBar style="auto" />
    </View >
  )
}

const baseText = {
  fontSize: 18,
  lineHeight: 21,
  letterSpacing: 0.25
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  paragraph: {
    ...baseText,
    fontWeight: theme.fontWeight.light,
    color: theme.fontColor.invert,
    marginBottom: 30
  },
  title: {
    ...baseText,
    color: theme.fontColor.invert,
    fontWeight: theme.fontWeight.regular
  },
  link: {
    ...baseText,
    fontWeight: theme.fontWeight.bold,
    color: theme.color.secondary,
    alignSelf: 'flex-end'
  }
})
