import React from "react";
import { Text, Button } from "react-native";
import { SafeAreaView } from "react-navigation";

import firebase from "react-native-firebase";

class GroupScreen extends React.Component {
  signOut = () => {
    firebase.auth().signOut();
    this.props.navigation.navigate("Auth");
  };

  render() {
    return (
      <SafeAreaView>
        <Text>This is the ??? screen!</Text>
        <Button title="SIGN OUT" onPress={this.signOut} />
      </SafeAreaView>
    );
  }
}

export default GroupScreen;
