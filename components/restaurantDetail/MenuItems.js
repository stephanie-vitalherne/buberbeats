import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { foods } from "../../data/dummyData";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.mainContainer}>
            <BouncyCheckbox iconStyle={styles.checkbox} fillColor="green" />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" style={styles.divider} />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={styles.infoContainer}>
    <Text style={styles.title}>{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image source={{ uri: props.food.image }} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  checkbox: {
    borderColor: "lightgrey",
    borderRadius: 0,
  },
  divider: {
    marginHorizontal: 20,
  },
  infoContainer: {
    width: 240,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
