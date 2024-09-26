// tabs.js
import { CommunityChat, MarketIntelligence, WeatherForecast, AgroBot, HealthCare } from "../Screens";
import { HomeStack } from "./AppStacks/HomeStack";
import {DukaanStack} from './AppStacks/DukaanStack';
import DiseaseDetection from './../Components/Disease Detection/DiseaseDetection';

export const tabs = [
  {
    id: 1,
    title: "Weather",
    screen: "Chat",
    icon: "message-text",
    Component: WeatherForecast,
  },
  {
    id: 2,
    title: "Dukaan",
    screen: "Dukaan",
    icon: "storefront-outline",
    Component: DukaanStack,
  },
  {
    id: 3,
    title: "Home Tab",
    screen: "Home Tab",
    icon: "home",
    Component: HomeStack,
  },
  {
    id: 4,
    title: "Price",
    screen: "Market",
    icon: "currency-inr",
    Component: MarketIntelligence,
  },
  {
    id: 5,
    title: "HealthCare",
    screen: "HealthCare",
    icon: "robot-outline",
    Component: AgroBot,
  },
];
