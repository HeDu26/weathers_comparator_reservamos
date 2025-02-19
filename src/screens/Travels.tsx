import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Text,
} from "react-native";
import ButtonsGroupOne from "../components/travels/buttons/GroupOne";
import TravelsForm from "../components/travels/views/travels_form/TravelsForm";
import WeatherComponent from "../components/travels/views/weather/WeatherComponent";
import SlideModal from "../components/modals/locationsSearch";

export default function Travels() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/travels.png")}
        resizeMode="contain"
        style={styles.backgroundImage}
      />
      <ButtonsGroupOne />
      <View style={styles.content}>
        {/* <TravelsForm /> */}
        <WeatherComponent />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    width: "50%",
    height: 100,
  },
  content: {
    height: "70%",
    width: "100%",
  },
  openButton: {
    padding: 10,
    backgroundColor: "#ddd",
    marginTop: 20,
  },
});
