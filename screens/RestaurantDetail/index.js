import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { About, MenuItems } from "../../components";
import { Divider } from "react-native-elements";

export default function RestaurantDetail() {
  return (
    <View style={styles.mainContainer}>
      <About />
      <Divider width={1} style={styles.divider} />
      <MenuItems />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {},
  divider: {
    marginVertical: 20,
  },
});
