import React, { useEffect } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CssStyle from "../StyleSheet/CssStyle";

const StartUp = ({ navigation }) => {
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigation.navigate("AllExercise");
  //   }, 3000);
  // }, []);
  return (
    <View style={CssStyle.flexData}>
      <Text>This is the start Up</Text>
    </View>
  );
};

export default StartUp;

const styles = StyleSheet.create({});
