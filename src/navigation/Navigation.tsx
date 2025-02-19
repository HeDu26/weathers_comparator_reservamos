import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Travels from "../screens/Travels";
import Tickets from "../screens/Tickets";
import User from "../screens/User";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

type TabIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

type RouteProps = {
  route: {
    name: string;
  };
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: RouteProps) => ({
        tabBarIcon: ({ focused, color, size }: TabIconProps) => {
          let iconName: string = "";

          if (route.name === "Viajes") {
            iconName = focused ? "bag" : "bag-outline";
          } else if (route.name === "Mis boletos") {
            iconName = focused ? "ticket-sharp" : "ticket-outline";
          } else if (route.name === "Mi cuenta") {
            iconName = focused ? "person" : "person-outline";
          }

          // Puedes devolver cualquier componente aquí
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "white",
        },
        tabBarItemStyle: {
          paddingVertical: 5,
        },
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Viajes"
        component={Travels}
      />
      <Tab.Screen name="Mis boletos" component={Tickets} />
      <Tab.Screen name="Mi cuenta" component={User} />
    </Tab.Navigator>
  );
}
