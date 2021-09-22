import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, RestaurantDetail } from "./screens";

export default function RootNavigator() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen component={RestaurantDetail} name="Restaurant Detail" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
