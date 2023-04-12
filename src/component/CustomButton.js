import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/Ionicons";

const CustomButton = ({ onPress, iconColor, borderRadius, buttonText, style, iconName, mode, buttonColor, fontWeight, size, colorText, paddingVertical, styleText, borderColor, imageIcon }) => {
  return (
    <Button
      icon={() => (imageIcon ? imageIcon : <Icon name={iconName} size={size ? size : 23} color={iconColor ? iconColor : "green"} />)}
      style={[
        style,
        {
          borderRadius: borderRadius ? borderRadius : 30,
          borderColor: borderColor ? borderColor : "#00000020",
          backgroundColor: buttonColor ? buttonColor : '#0197F6',
        },
      ]}
      // buttonColor={buttonColor ? buttonColor : "#0197F6"}
      mode={mode ? mode : "contained"}
      labelStyle={[
        ,
        styleText,
        {
          fontWeight: fontWeight,
          color: colorText ? colorText : "white",
          paddingVertical: paddingVertical ? paddingVertical : 0,
        },
      ]}
      onPress={onPress}
    >
      {buttonText}
    </Button>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
