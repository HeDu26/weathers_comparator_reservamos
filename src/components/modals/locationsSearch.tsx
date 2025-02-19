import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Animated,
  StyleSheet,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  FlatList,
} from "react-native";
import useCordinate from "../../hooks/useCordinates";
import { CordinatesData } from "../../interfaces/codinatesResult";

interface SlideModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const SlideModal: React.FC<SlideModalProps> = ({ isVisible, onClose }) => {
  const [location, setLocation] = useState<string>("");
  const { data, loading, error } = useCordinate(location);
  const [selectedCity, setSelectedCity] = useState<CordinatesData>({
    temperature: 0,
    condition: "",
    city_name: "",
    state: "",
    lat: "",
    long: "",
  });

  console.log("SELECTED CITY:", selectedCity);

  const slideAnim = new Animated.Value(0);

  React.useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible]);

  const modalY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [600, 0],
  });

  const handleLocationChange = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setLocation(e.nativeEvent.text);
  };

  return (
    <Modal transparent={true} visible={isVisible} onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[styles.modalContent, { transform: [{ translateY: modalY }] }]}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>Destino</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text>Cerrar</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            placeholder="Buscar destino"
            style={{ borderBottomWidth: 1, borderBottomColor: "#000" }}
            onChange={handleLocationChange}
            value={location}
          />

          <Text style={styles.sectionTitle}>DESTINOS POPULARES</Text>
          {/* <Picker
            selectedValue={selectedCity}
            onValueChange={(itemValue: string) => setSelectedCity(itemValue)}
            style={styles.picker}
          >
            {data &&
              data.map((cityData, index) => (
                <Picker.Item
                  key={index}
                  label={cityData.city_name}
                  value={cityData.city_name}
                />
              ))}
          </Picker> */}
          <FlatList
            data={data}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  setSelectedCity(item);
                  onClose();
                }}
              >
                <Text style={styles.citiesItem}>
                  {item.city_name}
                  {", "}
                  {item.state}
                </Text>
              </TouchableOpacity>
            )}
          />
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: "90%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  closeButton: {
    padding: 10,
    backgroundColor: "#ddd",
    alignSelf: "flex-end",
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginTop: 20,
  },
  picker: {
    marginTop: 10,
    width: "100%",
    backgroundColor: "#f0f0f0",
  },
  citiesItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
});

export default SlideModal;
