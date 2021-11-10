import React from "react";
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
  View,
  Image,
  Text,
} from "react-native";
import mary from "../../assets/mary.png";
import coins from "../../assets/coins.png";
import Avatar from "../components/Avatar";
import BalanceCard from "../components/BalanceCard";
import Category from "../components/Category";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  Entypo,
  Fontisto,
  Ionicons,
} from "@expo/vector-icons";
import Item from "../components/Item";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function MainScreen() {
  return (
    <SafeAreaView>
      <Avatar name="Mary" image={mary} />
      <ScrollView style={{ height: windowHeight }}>
        <BalanceCard image={coins} />
        <ScrollView style={styles.scrollView} horizontal={true}>
          <Category text="Send" color="#DED2F9">
            <FontAwesome5 name="telegram-plane" size={50} color="black" />
          </Category>
          <Category text="Scan" color="#D3E1FF">
            <MaterialCommunityIcons
              name="credit-card-scan"
              size={50}
              color="black"
            />
          </Category>
          <Category text="More" color="#FDC9D2">
            <Entypo name="grid" size={50} color="black" />
          </Category>
        </ScrollView>
        <View style={{ padding: 25 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            Your last activity
          </Text>
          <Item title="Shopping" price="120">
            <Fontisto name="shopping-bag" size={40} color="black" />
          </Item>
          <Item title="Food" price="120">
            <Ionicons name="fast-food" size={40} color="black" />
          </Item>
          <Item title="Taxi" price="120">
            <Entypo name="location" size={40} color="black" />
          </Item>

          <View style={{ height: 180 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    width: windowWidth,

    padding: 25,
  },
});
