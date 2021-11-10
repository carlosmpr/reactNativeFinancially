import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import Carousel from "react-native-snap-carousel";
import CreditCard from "../components/CreditCard";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const data = [
  { amount: "7,065.00", name: "Jhon Doe", exp: "07/26", fourDigit: "7281" },
  {
    amount: "3,065.00",
    name: "Jhon Doe",
    exp: "07/26",
    fourDigit: "3281",
    card: "visa",
  },
  {
    amount: "5,065.00",
    name: "Jhon Doe",
    exp: "07/26",
    fourDigit: "3281",
    card: "master",
  },
];
const SendMoneyScreens = () => {
  const isCarousel = useRef(null);
  const styles = StyleSheet.create({
    scrollView: {
      width: windowWidth,

      padding: 25,
    },

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
      backgroundColor: "#F5D4C1",
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

    initials: {
      fontSize: 50,
      backgroundColor: "orange",
      padding: 15,
      borderRadius: 60,
      color: "white",
    },
  });
  const renderItem = ({ item }) => {
    return <CreditCard {...item} />;
  };
  return (
    <SafeAreaView>
      <ScrollView style={{ height: windowHeight }}>
        <View
          style={{
            width: windowWidth,
            display: "flex",
            alignItems: "center",
            padding: 25,
          }}
        >
          <Text style={{ fontSize: 18 }}>Send Money</Text>
        </View>
        <Carousel
          layout="default"
          ref={isCarousel}
          data={data}
          renderItem={renderItem}
          sliderWidth={windowWidth}
          itemWidth={windowWidth}
        />

        <View
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.initials}>D</Text>
          <Text style={{ fontWeight: "400", fontSize: 26 }}>Melanie Ward</Text>

          <Text style={{ fontWeight: "600", fontSize: 26 }}>$40</Text>
          <TextInput
            style={{
              width: "60%",
              height: 40,
              margin: 12,
              borderWidth: 1,

              padding: 10,
            }}
            placeholder="Reason"
          />
        </View>
        <Button title="Continue" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SendMoneyScreens;
