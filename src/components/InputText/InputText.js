import React from 'react';
import { Text, Pressable, View, TextInput } from 'react-native';
import { InputTextStyles } from './InputText.style';
import { Plus } from '../../../assets/Icons';


const InputText = ({text, plus, onPress}) =>(
    <Pressable>
        <View style={InputTextStyles.container}>
            <TextInput
            placeholder={text}
            style={InputTextStyles.inputText}
            onChange={()=> console.warn("Aqui")}
            />
            {plus ?
            <Pressable style={InputTextStyles.icon} onPress={onPress}>
                <Plus/>
            </Pressable>
            : null}
        </View>
    </Pressable>
)

export {InputText};