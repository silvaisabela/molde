import React from 'react'
import { func, String, Boolean } from 'prop-types'
import { Pressable, TextInput, View, Text } from 'react-native'
import { InputPasswordStyles } from './InputPassword.style'
import { ClosePassword, OpenPassword } from '../../../assets/Icons'

const propTypes = {
  onPress: func,
  text: String,
  hidePassword: Boolean,
  error: Boolean,
  messageError: String
}

const InputPassword = ({ text = 'Digite a senha', onPress, hidePassword, error, messageError = 'Texto inválido', ...props }) => (
    <Pressable>
      <View style={InputPasswordStyles.container}>
          <TextInput
          placeholder={text}
          style={InputPasswordStyles.textInput}
          secureTextEntry={hidePassword}
          />
          {hidePassword
            ? <Pressable onPress={onPress}><ClosePassword/></Pressable>
            : <Pressable onPress={onPress}><OpenPassword/></Pressable> }
      </View>
      {error ? <Text style={InputPasswordStyles.error}>{messageError}</Text> : null}
    </Pressable>
)

InputPassword.propTypes = propTypes

export { InputPassword }
