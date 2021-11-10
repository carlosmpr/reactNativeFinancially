import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import master from '../../assets/mastercard.png'
import visa from '../../assets/visa.png'
import ameri from '../../assets/american.png'
const windowWidth = Dimensions.get("window").width;
const CreditCard = ({ amount, fourDigit, name, exp,card }) => {

 const cardLogo = () =>{
    switch (card) {
        case "visa":
            
            return visa;

        case "master":
            return master
    
        default:
            return ameri
    }
 }

 const colorCard  = () =>{
    switch (card) {
        case "visa":
            
            return "#D3E1FF";

        case "master":
            return "#F5D4C1"
    
        default:
            return '#DED2F9'
    }
 }
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
      width: "100%",
      height: "100%",
      borderRadius: 20,
      backgroundColor: colorCard(),
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,
      justifyContent: "space-evenly",

      elevation: 11,
    },

    header: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },

  });
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text>Current Balance</Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image source={cardLogo()}/>
          </View>
        </View>
        <Text style={{ fontSize: 30 }}>{amount}</Text>
        <Text style={{ fontSize: 22 }}>**** **** **** {fourDigit}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>{name}</Text>

          <Text>Exp Date:{exp}</Text>
        </View>
      </View>
    </View>
  );
};

export default CreditCard;
