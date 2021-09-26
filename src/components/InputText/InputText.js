import React from 'react'
import { func, String, Boolean } from 'prop-types'
import { Pressable, View, TextInput } from 'react-native'
import { InputTextStyles } from './InputText.style'
import { Check, Uncheck, Plus } from '../../../assets/Icons'
import theme from '../../styles/theme.style'

const propTypes = {
  onPress: func,
  text: String,
  plus: Boolean,
  check: Boolean,
  noIcon: Boolean,
  onChange: func
}

const InputText = ({ text, plus, onPress, check, noIcon, onChange }) => (
  <Pressable>
    <View style={InputTextStyles.container}>
      <TextInput
        placeholder={text}
        style={InputTextStyles.inputText}
        onChange={onChange}
      />
      {noIcon
        ? null
        : plus
          ? <Pressable style={InputTextStyles.icon} onPress={onPress}>
            <Plus color={theme.color.secondary} />
          </Pressable>
          : check ? <Check style={InputTextStyles.icon} /> : <Uncheck style={InputTextStyles.icon} />}

    </View>
  </Pressable>
)

InputText.propTypes = propTypes

export { InputText }
