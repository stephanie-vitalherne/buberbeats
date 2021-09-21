import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian"],
    price: "$",
    reviews: 700,
    rating: 4.9,
  },
];

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
