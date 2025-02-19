import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function ButtonsGroupOne() {
  return (
    <View style={styles.buttonsGroupOne}>
      <View
        style={[
          styles.button,
          {
            // backgroundColor: "#458C26",
            borderBottomLeftRadius: 15,
            borderTopLeftRadius: 15,
          },
        ]}
      >
        <TouchableOpacity>
          <Text style={styles.buttonText}>Viajes</Text>
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.button,
          {
            backgroundColor: "#68D239",
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          },
        ]}
      >
        <TouchableOpacity>
          <Text style={styles.buttonText}>Clima</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsGroupOne: {
    flexDirection: "row",
    width: "50%",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: "50%",
    paddingVertical: 5,
  },

  buttonText: {
    color: "#000",
    fontSize: 16,
  },
});
