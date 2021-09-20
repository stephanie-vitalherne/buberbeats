import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "react-native-vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#EEE",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#EEE",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={styles.leftButton}>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View style={styles.rightButton}>
            <AntDesign name="clockcircle" size={11} style={styles.clock} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: "row",
  },
  leftButton: {
    marginLeft: 10,
  },
  rightButton: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    marginRight: 8,
    padding: 9,
    borderRadius: 30,
    alignItems: "center",
  },
  clock: {
    marginRight: 6,
  },
});
