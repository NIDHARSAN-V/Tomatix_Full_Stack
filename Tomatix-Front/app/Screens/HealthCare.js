import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import {TomatoVarieties,BeefsteakTomato,ArkaSaurabh,ArkaVikas, BlackTomato,CampariTomato,CherryTomato,CO3Tomato,GrapeTomato,GreenTomato,HeirloomTomato,PAU2372Tomato,Paiyur1Tomato,PbKesariTomato,PunjabChhuharaTomato,PusaEarlyDwarfTomato,PusaHybrid4Tomato,PusaHybrid8Tomato,PusaRohiniTomato,PusaUpharTomato,PusaSadabaharTomato,RomaTomato,SanMarzanoTomato,SiouxTomato,YellowOrangeTomato} from '../Container/index'

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee',
    accent: '#03dac4',
  },
};

function HealthCare() {
  return (
    <PaperProvider theme={theme}>
        <Stack.Navigator initialRouteName="TomatoVarieties">
          <Stack.Screen name="TomatoVarieties" component={TomatoVarieties} />
          <Stack.Screen name="Arka Saurabh" component={ArkaSaurabh} />
          <Stack.Screen name="Arka Vikas" component={ArkaVikas} />
          <Stack.Screen name="Beefsteak Tomato" component={BeefsteakTomato} />
          <Stack.Screen name="Black Tomato" component={BlackTomato} />
          <Stack.Screen name="Campari Tomato" component={CampariTomato} />
          <Stack.Screen name="Cherry Tomato" component={CherryTomato} />
          <Stack.Screen name="CO-3" component={CO3Tomato} />
          <Stack.Screen name="Grape Tomato" component={GrapeTomato} />
          <Stack.Screen name="Green Tomato" component={GreenTomato} />
          <Stack.Screen name="Heirloom Tomato" component={HeirloomTomato} />
          <Stack.Screen name="Paiyur 1" component={Paiyur1Tomato} />
          <Stack.Screen name="PAU-2372" component={PAU2372Tomato} />
          <Stack.Screen name="Pb. Kesari" component={PbKesariTomato} />
          <Stack.Screen name="Punjab Chhuhara" component={PunjabChhuharaTomato} />
          <Stack.Screen name="Pusa Early Dwarf" component={PusaEarlyDwarfTomato} />
          <Stack.Screen name="Pusa Hybrid 4" component={PusaHybrid4Tomato} />
          <Stack.Screen name="Pusa Hybrid 8" component={PusaHybrid8Tomato} />
          <Stack.Screen name="Pusa Rohini" component={PusaRohiniTomato} />
          <Stack.Screen name="Pusa Sadabahar" component={PusaSadabaharTomato} />
          <Stack.Screen name="Pusa Upahar" component={PusaUpharTomato} />
          <Stack.Screen name="Roma Tomato" component={RomaTomato} />
          <Stack.Screen name="San Marzano" component={SanMarzanoTomato} />
          <Stack.Screen name="Sioux" component={SiouxTomato} />
          <Stack.Screen name="Yellow Tomato" component={YellowOrangeTomato} />
        </Stack.Navigator>
    </PaperProvider>
  );
}
export default HealthCare;