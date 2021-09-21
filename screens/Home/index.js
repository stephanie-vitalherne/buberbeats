import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import {
  HeaderTabs,
  SearchBar,
  Categories,
  RestaurantItems,
} from "../../components";
import { localRestaurants } from "../../components/RestaurantItems";
import { YELP_API_KEY } from "../../key";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);

  const getRestaurants = () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SpringValley`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpURL, apiOptions)
      .then((response) => response.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EEE",
    flex: 1,
  },
  headerContainer: {
    backgroundColor: "#FFF",
    padding: 15,
  },
});
