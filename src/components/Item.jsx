import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Item = ({ title, price, children }) => {
  return (
    <View style={styles.container}>
    <View style={styles.circle}>{children}</View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F4F7FA",
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
    marginBottom:10
  },
  title: { fontWeight: "700", fontSize: 28 },
  price: { fontSize: 30 },

  circle: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 50,
  },
});
