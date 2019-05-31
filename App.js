import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
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

export default createAppContainer(InitialNavigator);
