import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Pagination = () => {
  return (
    <View style={styles.main}>
      <View style={styles.circle}></View>
      <View style={styles.circle}></View>
      <View style={styles.circle}></View>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  main: { display: "flex", flexDirection: "row" },
  circle: {
    width: 10,
    height: 10,
    backgroundColor: "red",
    borderRadius: 100,
  },
});
