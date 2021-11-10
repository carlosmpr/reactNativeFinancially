import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
const AddButton = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Entypo name="plus" size={40} color="black" />
      </View>
      <Text style={styles.text}>New account</Text>
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#D0F1EB",
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    alignItems: "center",

    elevation: 11,
  },

  circle: { backgroundColor: "white", padding: 10, borderRadius: 30 },
  text: { fontSize: 20, marginLeft: 10 },
});
