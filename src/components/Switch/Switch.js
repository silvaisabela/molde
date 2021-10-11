import React, { useState } from "react";
import { View, Switch } from "react-native";
import { SwitchStyle } from "./Switch.style";

const SwitchButton = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={SwitchStyle.container}>
      <Switch
        trackColor={{ false: "#979797", true: "#2DC1A6" }}
        thumbColor={isEnabled ? "#fff" : "#979797 "}
        ios_backgroundColor="#979797"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

export { SwitchButton }