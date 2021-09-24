import React from 'react'
import { func, String, Boolean } from 'prop-types'
import { Pressable, View, TextInput } from 'react-native'
import { InputPasswordStyles } from './InputPassword.style'
import { ClosePassword, OpenPassword } from '../../../assets/Icons'

const propTypes = {
  onPress: func,
  text: String,
  showPassword: Boolean
}

const InputPassword = ({ text = 'Digite a senha', onPress, showPassword, ...props }) => (
    <Pressable>
        <View style={InputPasswordStyles.container}>
            <TextInput
            placeholder={text}
            style={InputPasswordStyles.inputPassword}
            secureTextEntry={showPassword}
            />
            {showPassword
              ? <Pressable style={InputPasswordStyles.icon} onPress={() => console.warn('foi')}><ClosePassword/></Pressable>
              : <Pressable style={InputPasswordStyles.icon} onPress={() => console.warn('foi')}><OpenPassword/></Pressable> }

        </View>
    </Pressable>
)

InputPassword.propTypes = propTypes

export { InputPassword }
