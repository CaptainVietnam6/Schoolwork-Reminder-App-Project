import * as React from "react";
import { Text } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { ImageBackground } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import { Card } from "react-native-paper";
//import {LinearGradient} from "react-native-linear-gradient";

export default function TopMessage() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.message}>Assignment 1
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    paddingTop: 30
  },

  message: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1BE049",
  },
})
