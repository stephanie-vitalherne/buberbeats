import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import { Divider } from "react-native-elements";
import { foods } from "../../data/dummyData";

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <View key={index}>
          <View style={styles.mainContainer}>
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={styles.infoContainer}>
    <Text style={styles.title}>{props.food.title}</Text>
    <Text style={styles.description}>{props.food.description}</Text>
    <Text style={styles.price}>{props.food.price}</Text>
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
  infoContainer: {
    width: 240,
    justifyContent: "space-evenly",
  },
  title: {
    fontSize: 19,
    fontWeight: "600",
  },
  description: {},
  price: {},
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});
