import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <RestaurantImage />
        <RestaurantInfo />
      </View>
    </TouchableOpacity>
  );
}

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      }}
      style={styles.image}
    />
    <TouchableOpacity style={styles.iconContainer}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#FFF" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = () => (
  <View style={styles.infoContainer}>
    <View>
      <Text style={styles.infoTitle}>Farmhouse Kitchen Thai Cuisine</Text>
      <Text style={styles.infoTime}>30-45 • min</Text>
    </View>
    <View style={styles.infoRatingContainer}>
      <Text style={styles.infoRating}>4.5</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 30,
  },
  topContainer: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "#FFF",
  },
  image: {
    width: "100%",
    height: 180,
  },
  iconContainer: {
    position: "absolute",
    right: 20,
    top: 20,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  infoTitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  infoTime: {
    fontSize: 13,
    color: "gray",
  },
  infoRatingContainer: {
    backgroundColor: "#EEE",
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  infoRating: {},
});
