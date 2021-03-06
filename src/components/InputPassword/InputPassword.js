import React, { useState } from 'react'
import { Pressable, TextInput, View, Text } from 'react-native'
import { func, string } from 'prop-types'
import { EyeClose, EyeOpen } from '../../../assets/Icons'
import { InputPasswordStyles } from './InputPassword.style'

const propTypes = {
  onPress: func,
  placeholder: string,
  errorMessage: string,
  helperText: string
}

const InputMessage = (errorMessage, helperText) => {
  if (errorMessage) {
    return <Text style={InputPasswordStyles.error}>{errorMessage}</Text>
  }

  return <Text style={InputPasswordStyles.default}>{helperText}</Text>
}

const InputPassword = ({ placeholder, onPress, helperText, errorMessage, ...props }) => {
  const [showPassword, setShowPassword] = useState(false)

  const changeShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <Pressable>
      <View style={InputPasswordStyles.container}>
        <TextInput
          placeholder={placeholder}
          style={InputPasswordStyles.textInput}
          secureTextEntry={showPassword}
          {...props }
        />
        <Pressable style={InputPasswordStyles.containerIcon} onPress={changeShowPassword}>
          {showPassword ? <EyeClose /> : <EyeOpen />}
        </Pressable>
      </View>
      {(helperText || errorMessage) && (
        <View>{InputMessage(errorMessage, helperText)}</View>
      )}
    </Pressable>
  )
}
InputPassword.propTypes = propTypes

export { InputPassword }
