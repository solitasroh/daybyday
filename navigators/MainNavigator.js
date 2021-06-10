import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DrinkWaterCheck from "../screens/DrinkWaterCheck";
import DrinkWaterHome from "../screens/DrinkWaterHome";
import DrinkWaterSetup from "../screens/DrinkWaterSetup";
import Home from "../screens/Home";

const Stack = createStackNavigator();

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="DrinkWaterCheck"
        component={DrinkWaterCheck}
        options={{ title: "Home" }}
      />
      <Stack.Screen name="DrinkWaterHome" component={DrinkWaterHome} />
      <Stack.Screen name="DrinkWaterSetup" component={DrinkWaterSetup} />
    </Stack.Navigator>
  );
}
