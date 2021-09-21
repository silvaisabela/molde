import React from 'react';
import { func } from 'prop-types'
import { Text, Pressable, View } from 'react-native';
import { ButtonStyles } from './Button.style';
import { ArrowLeft, Plus } from '../../../assets/Icons';

const propTypes = {
    onPress: func.isRequired,
    text: String,
    type: String,
}

const buttonThemes = {
    "primary": ButtonStyles.button,
    "secondary": ButtonStyles.buttonSecondary,
    "tertiary": ButtonStyles.buttonTertiary
}

const Button = ({ onPress, text, plus, type = "primary", ...props }) => (
    <Pressable style={buttonThemes[type]} onPress={onPress} {...props}>
        <View style={ButtonStyles.container} >
            <Text style={ButtonStyles.text}>{text}</Text>
            {plus ? <Plus /> : <ArrowLeft aria-hidden="true" />}
        </View>
    </Pressable>
)

Button.propTypes = propTypes

export { Button };