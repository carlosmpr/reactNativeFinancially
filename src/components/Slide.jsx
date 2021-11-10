import React from "react";
import { StyleSheet, Text, View, Image, Button,Dimensions } from "react-native";
import Pagination from "./Pagination";

const windowHeight = Dimensions.get('window').height;
export default function Slide({ title, desc, image }) {
   
  return (
    <View style={styles.slide}>
      <Text style={styles.title}>Financially</Text>
      <Image source={image} style={styles.image} />
      <Pagination />
      <Text style={styles.subtitle}>{title}</Text>
      <Text>{desc}</Text>
      <Button title={"Continue"} />
    </View>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: "100%",
    height: windowHeight,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  title: { fontWeight: "bold", fontSize: 30 },
  subtitle:{
    fontWeight: "bold", fontSize: 25
  },
  image: { width: "100%", height: "50%", resizeMode: "contain" },
});
