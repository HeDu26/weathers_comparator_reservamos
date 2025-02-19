import { Provider } from "react-redux";
import { StyleSheet } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import store from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
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
