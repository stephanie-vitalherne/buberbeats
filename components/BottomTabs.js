import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "react-native-vector-icons";
import { tabs } from "../data/dummyData";

export default function BottomTabs() {
  return (
    <View style={styles.mainContainer}>
      {tabs.map((tab, index) => (
        <Icon key={index} icon={tab.icon} text={tab.text} />
      ))}
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity activeOpacity={0.5}>
    <View>
      <FontAwesome5 name={props.icon} size={25} style={styles.icon} />
      <Text style={styles.iconTxt}>{props.text}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    margin: 10,
    marginHorizontal: 30,
    justifyContent: "space-between",
  },
  icon: {
    marginBottom: 3,
    alignSelf: "center",
  },
  iconTxt: {},
});
