import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartUp from "../screen/StartUp";
import AllExercise from "../screen/Exercise/AllExercise";
import DetailOfExercise from "../screen/Exercise/DetailOfExercise";
import Rest from "../screen/Exercise/Rest";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="StartUp" component={StartUp} /> */}
      <Stack.Screen name="AllExercise" component={AllExercise} />
      <Stack.Screen name="DetailOfExercise" component={DetailOfExercise} />
      <Stack.Screen name="Rest" component={Rest} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
