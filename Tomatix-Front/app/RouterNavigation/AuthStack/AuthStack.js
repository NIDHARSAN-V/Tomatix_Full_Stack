import { createStackNavigator } from "@react-navigation/stack";
import RegisterScreen from "../../Components/AuthComponents/RegisterScreen";
import LoginScreen from "../../Components/AuthComponents/LoginScreen";
import { HomeStack } from "../AppStacks/HomeStack";
import TabNavigation from "../AppStacks/TabNavigation";


const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Register">

        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home Screen" component={TabNavigation}/>
        

        
     
    </Stack.Navigator>
  );
};

export default AuthStack;
