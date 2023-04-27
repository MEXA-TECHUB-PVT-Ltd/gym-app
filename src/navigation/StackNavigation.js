import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import StartUp from "../screen/StartUp";
import AllExercise from "../screen/Exercise/AllExercise";
import DetailOfExercise from "../screen/Exercise/DetailOfExercise";
import Rest from "../screen/Exercise/Rest";
import Gender from "../screen/Information/Gender";
import Focused from "../screen/Information/Focused";
import Dashboard from "../screen/Dashboard";
import BottomNavigation from "./BottomNavigation";

const StackNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="StartUp">
      <Stack.Screen name="StartUp" component={StartUp} />
      <Stack.Screen name="AllExercise" component={AllExercise} />
      <Stack.Screen name="Gender" component={Gender} />
      <Stack.Screen name="DetailOfExercise" component={DetailOfExercise} />
      <Stack.Screen name="Rest" component={Rest} />
      <Stack.Screen name="Focused" component={Focused} />
      <Stack.Screen name="DashboardHome" component={BottomNavigation} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
