import React from 'react'
import {
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { node, func, number, string } from 'prop-types'
import { OrganicBackgroung } from '../../../assets/Icons'
import { signinLayoutStyles } from './signinLayout.style'
import { AppBar } from '../AppBar'

const propTypes = {
  onLeftClick: func,
  children: node,
  leftType: string,
  rightIcon: node,
  scale: number
}

const SigninLayout = ({ children, leftType, onLeftClick, rightIcon, scale = 4 }) => {
  const SigninLayoutStyles = signinLayoutStyles(scale)
  return (
    <SafeAreaView style={SigninLayoutStyles.safe}>
      <KeyboardAvoidingView
        style={SigninLayoutStyles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
      >
        <View style={SigninLayoutStyles.container}>
          <OrganicBackgroung style={SigninLayoutStyles.backgroundIcon} />
          <View style={SigninLayoutStyles.innerContainer}>
            <AppBar
              leftType={leftType}
              onLeftClick={onLeftClick}
              rightIcon={rightIcon}
            />
            <ScrollView
            contentContainerStyle={SigninLayoutStyles.scroll}
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

SigninLayout.propTypes = propTypes

export { SigninLayout }
