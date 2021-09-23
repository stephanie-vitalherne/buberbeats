import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function ViewCart() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.text}>View Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    bottom: 130,
    zIndex: 999,
  },
  topContainer: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  container: {
    marginTop: 20,
    backgroundColor: "#000",
    alignItems: "center",
    padding: 13,
    borderRadius: 30,
    width: 300,
    position: "relative",
  },
  text: {
    color: "#FFF",
    fontSize: 20,
  },
});
