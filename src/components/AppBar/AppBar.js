import React from 'react'
import { View } from 'react-native'
import { func, node, string } from 'prop-types'
import { AppBarStyle } from './appBar.style'
import { ButtonOnly, ButtonOnlyType } from '../ButtonOnly'

const LeftType = ButtonOnlyType

const propTypes = {
  onLeftClick: func,
  leftType: string,
  rightIcon: node
}

const AppBar = ({ leftType, onLeftClick, rightIcon }) => {
  return (
    <View style={AppBarStyle.header}>
      {leftType ? <ButtonOnly type={leftType} onPress={onLeftClick} /> : <View></View> }
      {rightIcon && rightIcon}
    </View>
  )
}

AppBar.propTypes = propTypes

export { AppBar, LeftType }
