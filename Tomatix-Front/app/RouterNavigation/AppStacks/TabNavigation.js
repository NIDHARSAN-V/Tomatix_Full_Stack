import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { TabButton } from "../../Components";
import { CommunityChat, MarketIntelligence, WeatherForecast, AgroBot } from "../../Screens";
import { HomeStack } from "../AppStacks/HomeStack";
import { DukaanStack } from '../AppStacks/DukaanStack';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home Tab"}
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Chat"
        component={WeatherForecast}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => <TabButton item={{ title: "Weather", icon: "message-text" }} {...props} />,
        }}
      />
      <Tab.Screen
        name="Dukaan"
        component={DukaanStack}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => <TabButton item={{ title: "Dukaan", icon: "storefront-outline" }} {...props} />,
        }}
      />
      <Tab.Screen
        name="Home Tab"
        component={HomeStack}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => <TabButton item={{ title: "Home Tab", icon: "home" }} {...props} />,
        }}
      />
      <Tab.Screen
        name="Market"
        component={MarketIntelligence}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => <TabButton item={{ title: "Price", icon: "currency-inr" }} {...props} />,
        }}
      />
      <Tab.Screen
        name="HealthCare"
        component={AgroBot}
        options={{
          tabBarShowLabel: false,
          tabBarButton: (props) => <TabButton item={{ title: "HealthCare", icon: "robot-outline" }} {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 90,
    bottom: 25,
    position: "absolute",
    marginHorizontal: 16,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "#dadada",
  },
});

export default TabNavigation;
