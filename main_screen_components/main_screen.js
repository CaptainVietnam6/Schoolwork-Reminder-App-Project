/*imports*/
import * as React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { Card } from 'react-native-paper';

//import from other files
import TopMessage from "./top_message"

/*main*/
export default function MainScreen() {
  return (
    <ImageBackground styles = {styles.background} source = {require("../assets/appbackground.jpg")}>
      <TopMessage/>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
