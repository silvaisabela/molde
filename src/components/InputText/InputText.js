import React from 'react'
import { func, String, Boolean } from 'prop-types'
import { Pressable, TextInput } from 'react-native'
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

const InputText = ({ text = 'Digite aqui', plus, onPress, check, noIcon, onChange }) => (
    <Pressable style={InputTextStyles.container}>
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
    </Pressable>
)

InputText.propTypes = propTypes

export { InputText }
