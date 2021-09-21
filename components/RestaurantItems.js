import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export default function RestaurantItems(props) {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.mainContainer}>
      {props.restaurantData.map((restaurant, index) => (
        <View key={index} style={styles.topContainer}>
          <RestaurantImage image={restaurant.image_url} />
          <RestaurantInfo name={restaurant.name} rating={restaurant.rating} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = (props) => (
  <>
    <Image source={{ uri: props.image }} style={styles.image} />
    <TouchableOpacity style={styles.iconContainer}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="#FFF" />
    </TouchableOpacity>
  </>
);

const RestaurantInfo = (props) => (
  <View style={styles.infoContainer}>
    <View>
      <Text style={styles.infoTitle}>{props.name}</Text>
      <Text style={styles.infoTime}>30-45 • min</Text>
    </View>
    <View style={styles.infoRatingContainer}>
      <Text style={styles.infoRating}>{props.rating}</Text>
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
