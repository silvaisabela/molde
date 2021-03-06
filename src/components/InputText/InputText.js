import React from 'react'
import { func, string, bool } from 'prop-types'
import { Pressable, TextInput, View, Text } from 'react-native'
import { InputTextStyles } from './InputText.style'
import { Check, Uncheck, Plus } from '../../../assets/Icons'
import theme from '../../styles/theme.style'

const propTypes = {
  onChange: func,
  value: string,
  placeholder: string,
  plus: bool,
  valid: bool,
  helperText: string,
  errorMessage: string,
  onClickPlus: func,
  onChangeText: func
}

const InputIcon = (plus, errorMessage, valid, onClick) => {
  if (plus) {
    return (
      <Pressable onPress={onClick} style={InputTextStyles.baseIcon}>
        <Plus color={theme.color.secondary} />
      </Pressable>
    )
  }

  if (errorMessage) {
    return (
      <View>
        <Uncheck style={InputTextStyles.baseIcon} />
      </View>
    )
  }

  if (valid) {
    return (
      <View>
        <Check style={InputTextStyles.baseIcon} />
      </View>
    )
  }

  return <></>
}

const InputMessage = (errorMessage, helperText) => {
  if (errorMessage) {
    return <Text style={InputTextStyles.error}>{errorMessage}</Text>
  }

  return <Text style={InputTextStyles.default}>{helperText}</Text>
}

const InputText = ({
  placeholder,
  plus,
  valid,
  helperText,
  errorMessage,
  onClickPlus,
  value,
  onChangeText
}) => (
  <Pressable>
    <View style={InputTextStyles.containerInput}>
      <TextInput
        style={InputTextStyles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      {InputIcon(plus, errorMessage, valid, onClickPlus)}
    </View>

    {(helperText || errorMessage) && (
      <View>{InputMessage(errorMessage, helperText)}</View>
    )}
  </Pressable>
)

InputText.propTypes = propTypes

export { InputText }
