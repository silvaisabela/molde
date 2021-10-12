import React from "react"
import { func, node } from 'prop-types'
import { Text, Pressable, View } from 'react-native'
import { PhraseBoxStyles } from "./PhraseBox.style"
import { Delete } from '../../../assets/Icons'

const propTypes = {
    onPress: func.isRequired,
    children: node,
}

const PhraseBox = ({ onPress, children}) => (
        <View style={PhraseBoxStyles.container}>
            <Text style={PhraseBoxStyles.text}>{children}</Text>
            <Pressable onPress={onPress}>
                <Delete/>
            </Pressable>
        </View>
)

PhraseBox.propTypes = propTypes

export { PhraseBox }