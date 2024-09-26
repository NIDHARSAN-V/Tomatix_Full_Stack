import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../../Screens/Home";
import { DukaanStack } from "./DukaanStack";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export {HomeStack};
