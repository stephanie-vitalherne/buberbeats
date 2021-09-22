import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { items } from "../../data/dummyData";

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
