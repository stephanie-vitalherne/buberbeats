import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { About, MenuItems, ViewCart } from "../../components";
import { Divider } from "react-native-elements";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View style={styles.mainContainer}>
      <About route={route} />
      <Divider width={1} style={styles.divider} />
      <MenuItems />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
  divider: {
    marginVertical: 20,
  },
});
