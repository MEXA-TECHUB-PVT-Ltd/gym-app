import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import Dashboard from "../screen/Dashboard/Dashboard";
import Discover from "../screen/Dashboard/Discover";
import Nutrition from "../screen/Dashboard/Nutrition";
import Report from "../screen/Dashboard/Report";
import Settings from "../screen/Dashboard/Settings";

const BottomNavigation = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ focused }) => <Icon name="home-outline" size={focused ? 26 : 22} color={focused ? "blue" : "black"} />,
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="Discover"
        component={Discover}
        options={{
          tabBarIcon: ({ focused }) => <Octicons name="graph" size={focused ? 24 : 20} color={focused ? "blue" : "black"} />,
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarIcon: ({ focused }) => <Icon name="time-outline" size={focused ? 26 : 22} color={focused ? "blue" : "black"} />,
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="Nutrition"
        component={Nutrition}
        options={{
          tabBarIcon: ({ focused }) => <Icon name="person-outline" size={focused ? 26 : 22} color={focused ? "blue" : "black"} />,
          tabBarShowLabel: false,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ focused }) => <Icon name="person-outline" size={focused ? 26 : 22} color={focused ? "blue" : "black"} />,
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomNavigation;
