/*imports*/
import * as React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { ImageBackground } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Card } from "react-native-paper";
import {Button} from "react-native";

//import from other files
import WelcomeMessage from "./WelcomeMessage";
import BottomMessage from "./BottomMessage"

/*main*/
export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground styles = {styles.background} source = {require("../assets/appbackground.jpg")}>
      <WelcomeMessage></WelcomeMessage>
      <View style={styles.container}>
        <Button title = "Start" onPress = {function() {navigation.navigate("Main Screen")}}/>
      </View>
      <BottomMessage></BottomMessage>
    </ImageBackground>
  );
}
//<StartButton></StartButton>
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%"
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    color: "#1BE049",
    paddingTop: 170,
  }
});
