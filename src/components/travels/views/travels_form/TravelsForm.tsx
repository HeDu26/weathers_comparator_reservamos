import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ButtonsGroupTwo from "../../buttons/GroupTwo";

export default function TravelsForm() {
  return (
    <View>
      <Text
        style={{
          fontWeight: "thin",
          fontSize: 18,
          marginVertical: 20,
        }}
      >
        ¿Qué tipo de viaje harás?
      </Text>
      <ButtonsGroupTwo />
    </View>
  );
}

const styles = StyleSheet.create({});
