import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import AddButton from "../components/AddButton";
import ContactLists from "../components/ContactLists";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Transactions = () => {
  return (
    <SafeAreaView>
      <ScrollView style={{ height: windowHeight, padding: 25 }}>
        <Text style={{ fontWeight: "bold", fontSize: 25, width: "80%", marginBottom:10 }}>
          Chose which account to transfer to
        </Text>
        <AddButton />
        <View
          style={{
            marginTop: 20,
            borderRadius: 10,
            width: "100%",
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.1,
            shadowRadius: 2.68,
            alignItems: "center",

            elevation: 1,
          }}
        >
          <View
            style={{
              height: 40,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              width: "100%",
            }}
          >
            <Text style={{ fontSize: 14 }}>Recents</Text>
            <Text style={{ color: "#EEF2F6" }}>|</Text>
            <Text style={{ fontSize: 14 }}>Contacts</Text>
          </View>

          <ContactLists initials="D" name="Deborah Sanchez" />
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#EEF2F6" }}
          ></View>
          <ContactLists initials="D" name="Deborah Sanchez" />
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#EEF2F6" }}
          ></View>
          <ContactLists initials="D" name="Deborah Sanchez" />
          <ContactLists initials="D" name="Deborah Sanchez" />
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#EEF2F6" }}
          ></View>
          <ContactLists initials="D" name="Deborah Sanchez" />
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#EEF2F6" }}
          ></View>
          <ContactLists initials="D" name="Deborah Sanchez" />
          <ContactLists initials="D" name="Deborah Sanchez" />
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#EEF2F6" }}
          ></View>
          <ContactLists initials="D" name="Deborah Sanchez" />
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#EEF2F6" }}
          ></View>
          <ContactLists initials="D" name="Deborah Sanchez" />
          <ContactLists initials="D" name="Deborah Sanchez" />
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#EEF2F6" }}
          ></View>
          <ContactLists initials="D" name="Deborah Sanchez" />
          <View
            style={{ width: "100%", height: 1, backgroundColor: "#EEF2F6" }}
          ></View>
          <ContactLists initials="D" name="Deborah Sanchez" />
        </View>
        <View style={{ height: 180 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transactions;

const styles = StyleSheet.create({});
