import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function ButtonsGroupTwo() {
  return (
    <View style={styles.buttonsGroupOne}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Viaje sencillo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          borderLeftWidth: 1,
        }}
      >
        <Text style={styles.buttonText}>Viaje redondo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsGroupOne: {
    flexDirection: "row",
    width: "70%",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    // justifyContent: "space-around",
    padding: 10,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "#000",
    fontSize: 16,
  },
});
