import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TomatoAdd, TomatoView, FertilizerAdd, FertilizerView } from '../../Screens/Dukaan'

const Tomato = createNativeStackNavigator();
function TomatoScreen() {
    return (
        <Tomato.Navigator>
            <Tomato.Screen name="Tomato" component={TomatoView} />
            <Tomato.Screen name="TomatoAdd" component={TomatoAdd} />
        </Tomato.Navigator>
    );
}

const Fertilizer = createNativeStackNavigator();
function FertilizerScreen() {
    return (
        <Fertilizer.Navigator>
            <Fertilizer.Screen name="Fertilizer" component={FertilizerView} />
            <Fertilizer.Screen name="FertilizerAdd" component={FertilizerAdd} />
        </Fertilizer.Navigator>
    );
}

const Tab = createMaterialTopTabNavigator();

const DukaanStack = () => {
    return (
            <Tab.Navigator
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                    tabBarIndicatorStyle: { backgroundColor: '#00F', height: 3 },
                    tabBarStyle: { backgroundColor: '#FFF' },
                    tabBarActiveTintColor: '#00F',
                    tabBarInactiveTintColor: '#888',
                }}
            >
                <Tab.Screen name="FertilizerScreen" component={FertilizerScreen} />
                <Tab.Screen name="TomatoScreen" component={TomatoScreen} />
            </Tab.Navigator>
    );
}
export { DukaanStack };