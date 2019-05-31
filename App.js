import React from "react";
import { View, StyleSheet } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import GroupScreen from "./src/screens/Main/GroupScreen";
import NotificationsScreen from "./src/screens/Main/NotificationsScreen";
import SettingsScreen from "./src/screens/Main/SettingsScreen";
import PersonalCalendar from "./src/screens/Main/PersonalCalendar";
import SplashScreen from "./src/screens/SplashScreen";

const AppNavigator = createBottomTabNavigator({
  Group: GroupScreen,
  Calendar: PersonalCalendar,
  Notifications: NotificationsScreen,
  Settings: SettingsScreen
});

const InitialNavigator = createSwitchNavigator({
  Splash: SplashScreen,
  App: AppNavigator
});

const AppContainer = createAppContainer(InitialNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
