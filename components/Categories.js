import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const items = [
  {
    image: require("../assets/images/shopping-bag.png"),
    title: "Pick-up",
  },
  {
    image: require("../assets/images/soft-drink.png"),
    title: "Soft Drinks",
  },
  {
    image: require("../assets/images/bread.png"),
    title: "Bakery Items",
  },
  {
    image: require("../assets/images/fast-food.png"),
    title: "Fast Foods",
  },
  {
    image: require("../assets/images/deals.png"),
    title: "Deals",
  },
  {
    image: require("../assets/images/coffee.png"),
    title: "Coffee & Tea",
  },
  {
    image: require("../assets/images/desserts.png"),
    title: "Desserts",
  },
];

export default function Categories() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View style={styles.container} key={index}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.title}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 5,
    backgroundColor: "#FFF",
    paddingVertical: 10,
    paddingLeft: 20,
  },
  container: {
    alignItems: "center",
    marginRight: 30,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  text: {
    fontSize: 13,
    fontWeight: "900",
  },
});
