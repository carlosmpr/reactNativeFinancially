import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
const ContactLists = ({ name, initials }) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.initials}>{initials}</Text>
      </View>
      <Text style={styles.title}>{name}</Text>
      <MaterialCommunityIcons name="dots-horizontal" size={24} color="black" />
    </View>
  );
};

export default ContactLists;

const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 20,
    marginBottom: 10,
    
  },
  title: { fontWeight: "400", fontSize: 18 },

  circle: {
    backgroundColor: "orange",
    padding: 15,
    borderRadius: 60,
  },

  initials:{
      fontSize:30
  }
});
