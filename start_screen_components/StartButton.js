import React from 'react';
import { View, Image, Text, Button, Platform, StyleSheet } from 'react-native';

export default function StartButton({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title = "Start" onPress = {function() {navigation.navigate("Main Screen")}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    color: "#1BE049",
    paddingTop: 170
  }
})
