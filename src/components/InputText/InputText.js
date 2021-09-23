import React from 'react'
import { Pressable, View, TextInput } from 'react-native'
import { InputTextStyles } from './InputText.style'
import { func } from 'prop-types'
import { Plus } from '../../../assets/Icons'
import { Check } from '../../../assets/Icons/Check'
import Uncheck from '../../../assets/Icons/Uncheck'

const propTypes = {
  onPress: func,
  text: String,
  plus: Boolean,
  checked: Boolean,
  noIcon: Boolean
}

const InputText = ({ text = 'Digite aqui', plus, onPress, checked, noIcon }) => (
    <Pressable>
        <View style={InputTextStyles.container}>
            <TextInput
            placeholder={text}
            style={InputTextStyles.inputText}
            /* onChange={} */
            />
            {noIcon
              ? null
              : plus
                ? <Pressable style={InputTextStyles.icon} onPress={onPress}>
                <Plus color="#7963FF"/>
            </Pressable>
                : checked ? <Check style={InputTextStyles.icon}/> : <Uncheck style={InputTextStyles.icon}/>}

        </View>
    </Pressable>
)

InputText.propTypes = propTypes

export { InputText }
