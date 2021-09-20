import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { HeaderTabs, SearchBar } from "../../components";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <HeaderTabs />
        <SearchBar />
      </View>
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
