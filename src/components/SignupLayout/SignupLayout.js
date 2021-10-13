import React from 'react'
import {
  SafeAreaView,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform
} from 'react-native'
import { node, func, string } from 'prop-types'
import { AppBar } from '../../components/AppBar'
import { SignupLayoutStyles } from './signupLayout.styles'

const propTypes = {
  onLeftClick: func.isRequired,
  children: node,
  leftType: string,
  action: node,
  rightIcon: node
}

const SignupLayout = ({ children, action, leftType, onLeftClick, rightIcon }) => {
  return (
    <SafeAreaView style={SignupLayoutStyles.safe}>
      <KeyboardAvoidingView
        style={SignupLayoutStyles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
      >
        <View style={SignupLayoutStyles.container}>
          <AppBar leftType={leftType}
              onLeftClick={onLeftClick}
              rightIcon={rightIcon} />
          <ScrollView
            contentContainerStyle={SignupLayoutStyles.scroll}
            showsVerticalScrollIndicator={false}
            persistentScrollbar={false}
          >
            <View style={SignupLayoutStyles.body}>{children}</View>
            {action}
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

SignupLayout.propTypes = propTypes

export { SignupLayout }
