import React, { useRef } from "react";
import { StyleSheet, SafeAreaView, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";
import slide from "../../assets/slide.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slide3.png";
import Slide from "../components/Slide";
const data = [
  {
    title: "Save Money",
    desc: "Have all your finances in one place!",
    image: slide,
  },

  {
    title: "Invest in your future",
    desc: "Saving plans, index fund and more.",
    image: slide2,
  },

  {
    title: "Every penny counts",
    desc: "Our specialist will invest every penny they can",
    image: slide3,
  },
];
export default function WelcomeScreen() {
  const isCarousel = useRef(null);
  const windowWidth = Dimensions.get("window").width;

  const renderItem = ({ item }) => {
    return <Slide {...item} />;
  };
  return (
    <SafeAreaView>
      <Carousel
        layout="default"
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={windowWidth}
        itemWidth={windowWidth}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
