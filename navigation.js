import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, RestaurantDetail } from "./screens";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

const store = configureStore();

export default function RootNavigator() {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen component={Home} name="Home" />
          <Stack.Screen component={RestaurantDetail} name="RestaurantDetail" />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
