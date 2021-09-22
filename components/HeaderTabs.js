import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HeaderTabs(props) {
  return (
    <View style={styles.header}>
      <HeaderButton
        text="Delivery"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={[
      styles.headerButton,
      { backgroundColor: props.activeTab === props.text ? "#000" : "#FFF" },
    ]}
    onPress={() => props.setActiveTab(props.text)}
  >
    <Text
      style={[
        styles.headerText,
        { color: props.activeTab === props.text ? "#FFF" : "#000" },
      ]}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignSelf: "center",
  },
  headerButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  headerText: {
    fontSize: 15,
    fontWeight: "900",
  },
});
