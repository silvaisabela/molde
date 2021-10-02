import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from './src/components/Link';


export default function App () {
  return (
    <View style={styles.text}>
      <Link type="tertiary"/>
    </View >
  )
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})



