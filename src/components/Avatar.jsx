import React from 'react'
import { StyleSheet, Text, View , Dimensions, Image} from 'react-native'
const windowWidth = Dimensions.get("window").width;
const Avatar = ({name,image}) => {
    return (
        <View style={styles.headerCard}>
          <View style={styles.headerOrientations}>
            <View style={styles.headerImage}>
              <Image source={image} style={styles.image} />
            </View>
            <View style={styles.headerContent}>
              <Text style={styles.headerTitle}>Hi,{name}</Text>
              <Text>Welcome back!</Text>
            </View>
          </View>
          <Text style={styles.extraMenu}>...</Text>
        </View>
    )
}

export default Avatar

const styles = StyleSheet.create({  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },

  headerCard: {
    padding: 15,
    width: windowWidth,
    height: 120,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#D0F1EB",
    shadowColor: "#000",
    borderBottomStartRadius: 30,
    borderBottomEndRadius: 30,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 9,
  },
  headerOrientations: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  headerImage: {
    width: 80,
    height: 80,
    backgroundColor: "gray",
    borderRadius: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: { width: 60, height: 60 },

  headerContent: {
    display: "flex",
  },

  headerTitle: { fontWeight: "bold", fontSize: 25 },

  extraMenu: { alignSelf: "flex-end", fontSize: 30 },})
