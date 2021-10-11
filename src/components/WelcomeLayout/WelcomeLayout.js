import React from 'react'
import {
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { node, func, number } from 'prop-types'
import { OrganicBackgroung } from '../../../assets/Icons'
import { welcomeLayoutStyles } from './welcomeLayout.style'
import { AppBar } from '../AppBar'

const propTypes = {
  onLeftClick: func.isRequired,
  children: node,
  rightIcon: node,
  scale: number
}

const WelcomeLayout = ({ children, rightIcon, scale = 2.5 }) => {
  const WelcomeLayoutStyles = welcomeLayoutStyles(scale)
  return (
    <SafeAreaView style={WelcomeLayoutStyles.safe}>
      <KeyboardAvoidingView
        style={WelcomeLayoutStyles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
      >
        <View style={WelcomeLayoutStyles.container}>
          <OrganicBackgroung style={WelcomeLayoutStyles.backgroundIcon} />
          <View style={WelcomeLayoutStyles.innerContainer}>
            <AppBar
              rightIcon={rightIcon}
            />
            <ScrollView
              showsVerticalScrollIndicator={false}
              persistentScrollbar={false}
            >
              {children}
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

WelcomeLayout.propTypes = propTypes

export { WelcomeLayout }
