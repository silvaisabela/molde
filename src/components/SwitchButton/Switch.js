import React, { useState } from 'react'
import { Switch } from 'react-native'
import { func } from 'prop-types'

const propTypes = {
  onValueChange: func.require
}

const SwitchButton = ({ onValueChange }) => {
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
      <Switch
        trackColor={{ false: '#979797', true: '#2DC1A6' }}
        thumbColor={isEnabled ? '#fff' : '#979797 '}
        ios_backgroundColor="#979797"
        onValueChange={() => {
          onValueChange()
          toggleSwitch()
        }}
        value={isEnabled}
      />
  )
}

SwitchButton.propTypes = propTypes

export { SwitchButton }
