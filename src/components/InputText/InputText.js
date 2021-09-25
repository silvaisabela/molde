import React from 'react'
import { func, String, Boolean } from 'prop-types'
import { Pressable, TextInput, View, Text } from 'react-native'
import { InputTextStyles } from './InputText.style'
import { Check, Uncheck, Plus } from '../../../assets/Icons'
import theme from '../../styles/theme.style'

const propTypes = {
  onPress: func,
  text: String,
  plus: Boolean,
  check: Boolean,
  noIcon: Boolean,
  messageError: String,
  messageDefault: String,
  onChange: func
}

const InputText = ({ text = 'Digite aqui', plus, onPress, check, noIcon, onChange, messageError, messageDefault }) => (
    <Pressable >
      <View style={InputTextStyles.container}>
            <TextInput
            placeholder={text}
            onChange={onChange}
            style={InputTextStyles.textInput}
            />
            {noIcon
              ? null
              : plus
                ? <Pressable onPress={onPress}>
                <Plus color={theme.color.secondary}/>
            </Pressable>
                : check ? <Check/> : <Uncheck/>}
      </View>
      {messageDefault ? <Text style={InputTextStyles.default}>{messageDefault}</Text> : null}
      {messageError ? <Text style={InputTextStyles.error}>{messageError}</Text> : null}
    </Pressable>
)

InputText.propTypes = propTypes

export { InputText }
