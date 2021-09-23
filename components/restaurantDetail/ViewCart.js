import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);
  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      {total ? (
        <View style={styles.mainContainer}>
          <View style={styles.topContainer}>
            <TouchableOpacity style={styles.container}>
              <Text style={styles.text}>View Cart</Text>
              <Text style={styles.text}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
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
    // alignItems: "center",
    justifyContent: "flex-end",
    padding: 15,
    borderRadius: 30,
    width: 300,
    position: "relative",
    flexDirection: "row",
  },
  text: {
    color: "#FFF",
    fontSize: 20,
    marginRight: 30,
  },
});
