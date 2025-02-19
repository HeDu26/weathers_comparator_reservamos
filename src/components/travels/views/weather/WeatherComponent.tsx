import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import WeatherGraph from "./WeatherGraph";
import useCordinate from "../../../../hooks/useCordinates";
import SlideModal from "../../../modals/locationsSearch";

export default function WeatherComponent() {
  const [isModalVisible, setModalVisible] = useState(false);

  // useEffect(() => {
  //   if (data) {
  //     console.log("DATAAA:", data);
  //   }
  // }, [data]);

  return (
    <>
      <View>
        <Text style={{ textAlign: "center", fontSize: 18, marginTop: 10 }}>
          ¿Qué climas quieres comparar?
        </Text>
        <View style={styles.container}>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              width: "100%",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 14,
                marginVertical: 15,
                color: "#414040",
              }}
            >
              DESTINOS
            </Text>
            <TouchableOpacity
              style={{ padding: 10 }}
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Text style={{ marginBottom: 10 }}>Seleccionar un destino</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 15,
              width: "100%",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text>CDMX</Text>
            <Text>Monterrey</Text>
            <Text>Guadalajara</Text>
          </View>
        </View>
        <WeatherGraph />
      </View>
      <>
        <SlideModal
          isVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
        />
      </>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    padding: 15,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
