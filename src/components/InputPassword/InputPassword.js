import React from 'react'
import { func, String, Boolean } from 'prop-types'
import { Pressable, TextInput } from 'react-native'
import { InputPasswordStyles } from './InputPassword.style'
import { ClosePassword, OpenPassword } from '../../../assets/Icons'

const propTypes = {
  onPress: func,
  text: String,
  hidePassword: Boolean
}

const InputPassword = ({ text = 'Digite a senha', onPress, hidePassword, ...props }) => (
    <Pressable style={InputPasswordStyles.container}>
          <TextInput
          placeholder={text}
          style={InputPasswordStyles.textInput}
          secureTextEntry={hidePassword}
          />
          {hidePassword
            ? <Pressable onPress={onPress}><ClosePassword/></Pressable>
            : <Pressable onPress={onPress}><OpenPassword/></Pressable> }
    </Pressable>
)

InputPassword.propTypes = propTypes

export { InputPassword }
