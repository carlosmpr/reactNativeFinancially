import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Category({ text, children, color }) {
  const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      fontWeight: "bold",
    },
    card: {
      width: 120,
      borderRadius: 20,
      height: 160,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color,
      marginRight: 20,
       shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,
    alignItems: "center",

    elevation: 1,
    },

    circle: {
      backgroundColor: "white",
      padding: 15,
      borderRadius: 50,
    },
  });

  return (
    <View style={styles.card}>
      <View style={styles.circle}>{children}</View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
