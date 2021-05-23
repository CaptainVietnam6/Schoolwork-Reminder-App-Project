/*imports*/
import "react-native-gesture-handler";
import * as React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { ImageBackground } from 'react-native';
import Constants from 'expo-constants';

//imports for nav
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

//import {LinearGradient} from "expo-linear-gradient";
import { Card } from 'react-native-paper';

//import from other files
import WelcomeScreen from "./start_screen_components/WelcomeScreen";
import MainScreen from "./main_screen_components/main_screen";

//create navigator
const Stack = createStackNavigator();

/*main*/
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false //hides top header bar
        }}>
        <Stack.Screen name = "Welcome Screen" component = {WelcomeScreen} />
        <Stack.Screen name = "Main Screen" component = {MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
