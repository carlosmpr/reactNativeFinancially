import React from "react";
import { AntDesign,FontAwesome5 } from "@expo/vector-icons";
import {
    StyleSheet,
    View,
    Image,
    Text,
    Dimensions
  } from "react-native";

  const windowWidth = Dimensions.get("window").width;
const BalanceCard = ({image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={image} style={{ marginRight: 30 }} />
        <View style={{ flex: 1 }}>
          <Text>Your balance</Text>
          <View style={styles.textContent}>
            <Text style={styles.balance}>$7,065.00</Text>
            <AntDesign name="right" size={24} color="black" />
          </View>

          <View style={styles.textContent}>
            <FontAwesome5 name="wallet" size={35} color="black" />
            <Text>Wallet</Text>
            <AntDesign name="right" size={24} color="black" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default BalanceCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: windowWidth,
    height: 250,
    padding: 25,
  },
  card: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    borderRadius: 20,
    backgroundColor: "white",
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

  balance: { fontWeight: "bold", fontSize: 30 },

  textContent: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});
