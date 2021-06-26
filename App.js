import React from "react";
import { TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "./src/context/AllStatesContext";
import IndexScreen from "./src/screens/IndexScreen";
import CountiesScreen from "./src/screens/CountiesScreen";
const Stack = createStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Provider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#573400",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => <TouchableOpacity></TouchableOpacity>,
          }}
        >
          <Stack.Screen name="Home" component={IndexScreen} />
          <Stack.Screen
            name="Counties"
            component={CountiesScreen}
            options={({ route }) => ({ title: route.params.res })}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
};
