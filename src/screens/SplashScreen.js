import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { cliqueBlue } from "../assets/constants";
import icon from "../assets/icon.png";

class SplashScreen extends React.Component {
  // preload data
  async componentDidMount() {
    this.props.navigation.navigate("App");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={icon} style={styles.iconStyle} resizeMode="contain" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cliqueBlue,
    justifyContent: "center",
    alignItems: "center",
    width: "100%"
  },
  iconStyle: {
    width: "50%",
    height: "50%",
    marginBottom: "20%"
  }
});

export default SplashScreen;
