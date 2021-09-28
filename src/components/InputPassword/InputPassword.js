import React, { useState } from 'react'
import { func, String } from 'prop-types'
import { Pressable, TextInput, View, Text } from 'react-native'
import { InputPasswordStyles } from './InputPassword.style'
import { ClosePassword, OpenPassword } from '../../../assets/Icons'

const propTypes = {
  onPress: func,
  text: String,
  errorMessage: String,
  helperText: String
}
const InputMessage = (errorMessage, helperText) => {
  if (errorMessage) {
    return <Text style={InputPasswordStyles.error}>{errorMessage}</Text>
  }

  return <Text style={InputPasswordStyles.default}>{helperText}</Text>
}

const InputPassword = ({ text = 'Digite a senha', onPress, helperText, errorMessage, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)

  const changeShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
      <Pressable>
      <View style={InputPasswordStyles.container}>
          <TextInput
          placeholder={text}
          style={InputPasswordStyles.textInput}
          secureTextEntry={showPassword}
          />
          <Pressable onPress={changeShowPassword}>{showPassword
            ? <ClosePassword/>
            : <OpenPassword/>}</Pressable>
      </View>
      {(helperText || errorMessage) && (
      <View>{InputMessage(errorMessage, helperText)}</View>
      )}
    </Pressable>
  )
}
InputPassword.propTypes = propTypes

export { InputPassword }
