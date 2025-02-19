import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import WeatherGraph from "./WeatherGraph";
import SlideModal from "../../../modals/locationsSearch";
import { RootState } from "../../../../redux/store";
import AntDesign from "@expo/vector-icons/AntDesign";
import { removeLocation } from "../../../../redux/destinationsSlider";
import { decrementColorIndex } from "../../../../redux/colorsSlider";

export default function WeatherComponent() {
  const [isModalVisible, setModalVisible] = useState(false);

  const dataDestinations = useSelector(
    (state: RootState) => state.destinations
  );

  const dispatch = useDispatch();

  const handleRemoveLocation = (id: string) => {
    dispatch(removeLocation(id));
  };

  return (
    <>
      <View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
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
                // marginVertical: 15,
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
              disabled={dataDestinations.length >= 5}
            >
              <Text
                style={{
                  color: dataDestinations.length >= 5 ? "red" : "black",
                }}
              >
                {dataDestinations.length >= 5
                  ? "Máximo 5 destinos"
                  : "Seleccionar un destino"}
              </Text>
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
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {dataDestinations.map((item) => (
                <View
                  key={item.id}
                  style={{
                    backgroundColor: "#f0f0f0",
                    padding: 10,
                    borderRadius: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 10,
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      borderBottomWidth: 3,
                      borderBottomColor: item.color,
                      fontWeight: "bold",
                      paddingBottom: 3,
                    }}
                  >{`${item.name}, ${item.state}`}</Text>
                  <AntDesign
                    name="delete"
                    size={18}
                    color="black"
                    onPress={() => handleRemoveLocation(item.id)}
                  />
                </View>
              ))}
            </ScrollView>
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
