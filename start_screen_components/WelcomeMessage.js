import * as React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { ImageBackground } from 'react-native';
//import {LinearGradient} from "expo-linear-gradient";
import { Card } from 'react-native-paper';

export default function WelcomeMessage() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Welcome!</Text>
      <Text style = {styles.title2}>Press Start to enter App!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 50,
    paddingTop: 150
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#1BE049",
  },
  title2: {
  fontSize: 20,
  fontWeight: "bold",
  color: "#1BE049",
  paddingTop: 12,
  }
});
