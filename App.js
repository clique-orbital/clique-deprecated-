import React from "react";
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
import MyIcon from "./src/components/MyIcon";
import IconWithBadge from "./src/components/IconWithBadge";
import { cliqueBlue } from "./src/assets/constants";

const AppNavigator = createBottomTabNavigator(
  {
    Group: GroupScreen,
    Calendar: PersonalCalendar,
    Notifications: NotificationsScreen,
    Profile: SettingsScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = MyIcon;
        let iconName;
        let iconStyle;
        if (routeName === "Group") {
          iconName = `comments`;
          iconStyle = focused ? "solid" : "regular";
        } else if (routeName === "Calendar") {
          iconName = `calendar`;
          iconStyle = focused ? "solid" : "regular";
        } else if (routeName === "Notifications") {
          iconName = `bell`;
          iconStyle = focused ? "solid" : "regular";
        } else if (routeName === "Profile") {
          iconName = `user-circle`;
          iconStyle = focused ? "solid" : "regular";
        }
        return (
          <IconComponent
            name={iconName}
            size={25}
            color={tintColor}
            iconStyle={iconStyle}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: cliqueBlue,
      inactiveTintColor: "gray"
    }
  }
);

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
